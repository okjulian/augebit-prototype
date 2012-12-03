'use strict';

augebitPrototypeApp.controller('BooksCtrl', function($scope) {
  $scope.books = [
    {
    title: 'Agile Web Development with Rails',
    url: 'http://www.amazon.com/dp/1934356166'
  },
  {
    title: 'The Rails Way',
    url: 'http://www.amazon.com/dp/0321445619'
  },
  {
    title: 'Rails Recipe',
    url: 'http://pragprog.com/book/fr_rr/rails-recipes'
  },
  {
    title: 'The Ruby Way',
    url: 'http://www.amazon.com/dp/0672328844'
  }
  ];
});
