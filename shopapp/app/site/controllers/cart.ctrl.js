(function(){
	angular
		.module('shopApp')
		.controller('cartCtrl',cartCtrl)

	function cartCtrl($scope,$state,cartSrv){
		var cartVm = this;

		cartVm.checkout = checkout;
		cartVm.is_cart = cartSrv.is_cart;
		cartVm.cart = cartSrv.getCart();
		cartVm.deletefromCart = deletefromCart;

		$scope.$watch(function(){
	    	return cartSrv.cart;
		}, function (newValue) {
			console.log(cartSrv.cart.length)
			if(cartSrv.cart.length > 0){
					cartVm.cart = cartSrv.getCart();
			    cartVm.is_products = true;
			} else {
				cartVm.is_products = false;
			}
		});

		function deletefromCart(productId) {
			cartSrv.removefromCart(productId);
			if(cartSrv.cart.length === 0){
					cartVm.is_products = false;
			}
		}

		function checkout() {
			$state.go("checkout");
		}
	}

})();
