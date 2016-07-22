(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,productSrv,$state){
		/*Controller for the main home page*/
		var shopVm = this;

		//Initializes variables and sets background image
		shopVm.products;
		shopVm.images = ["assets/img/img-hero-1.jpg", 'http://oddculture.com/wp-content/uploads/2015/12/Camping-Near-The-Lake-Background-Wallpaper.jpg', 'http://auroravillage.com/media/uploads/slideshows/home-slider-1.jpg' ];
		shopVm.background_image = choose_background(shopVm.images);

		//function bindings
		shopVm.toCategory = toCategory;
		shopVm.toLogin = toLogin;
		shopVm.toCart = toCart;

		//watch for any changes to model data
		$scope.$watch(function(){
	    	return productSrv.products;
		}, function (newValue) {
		    shopVm.products = productSrv.products;
		});

	function choose_background(images) {
		//Randomly chooses a background from the shopVm.images array
		return images[Math.floor(Math.random()*images.length)];
	}

	function toCategory(categoryname) {
		//Goes to a category page
		$state.go('categories', {category: categoryname});
	}

	function toLogin() {
		//Redirects to a page name passed in as an arg
		$state.go('login');
	}

	function toCart() {
		$state.go('cart');
	}
	}
})();
