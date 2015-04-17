(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
  {
    name: 'Ruby',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'ruby.jpeg',
        thumb: 'image.png'
      }
    ],
    reviews: [
      {
        stars: 5,
        body: "I love rails",
        author: "me@you.com"
      }
    ]
  },
  {
    name: "Opal",
    price: 4.34,
    description: '...',
  }
  ];
})();


