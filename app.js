(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
  {
    name: 'Ruby',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Opal",
    price: 4.34,
    description: '...',
  }
  ];
})();


