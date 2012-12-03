'use strict';

// Declare app level module which depends on filters, and services
var augebitPrototypeApp = angular.module('augebitPrototypeApp', ['HNServices'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'MainCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links-list.html',
        controller: 'LinksCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books-list.html',
        controller: 'BooksCtrl'
      })
      .when('/timeline', {
        templateUrl: 'views/out-of-trial.html',
        controller: 'TimelineCtrl'
      })
      .when('/todos', {
        templateUrl: 'views/out-of-trial.html',
        controller: 'TodosCtrl'
      })
      .when('/out-of-trial', {
        templateUrl: 'views/out-of-trial.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

augebitPrototypeApp.controller('MainCtrl', function($scope) {
  $scope.save = function() {
    if ($scope.userEmail !== undefined) {
      Parse.initialize('lywqlwHwaizR1HHTv1dYQtzSrkDJRkArdI3QfMpR', '5bpXBKHHfhD4QESUr4LYQI1kYaxvniTvXycrdB8l');

      var EmailObject = Parse.Object.extend('EmailObject');
      var emailObject = new EmailObject();
      var email = $scope.userEmail;
      emailObject.save({email: email});
      $scope.userEmail = '';
    }
  };

  $scope.isSaveDisabled = function() {
    return $scope.emailForm.$invalid;
  };
});

'use strict';

augebitPrototypeApp.controller('LinksCtrl', function($scope, Link) {
  $scope.links = Link.query(function() {});
});

'use strict';

/* Services */

angular.module('HNServices', ['ngResource']).
  factory('Link', function($resource) {
  return $resource('http://api.thriftdb.com/api.hnsearch.com/items/_search?q=rubyonrails&filter[fields][type]=submission&weights[title]=1.1&weights[text]=0.7&weights[domain]=2.0&weights[username]=0.1&weights[type]=0.0&boosts[fields][points]=0.15&boosts[fields][num_comments]=0.15&boosts[functions][pow(2,div(div(ms(create_ts,NOW),3600000),72))]=200.0&pretty_print=true&callback=',
                   {
                     alt: 'json',
                     callback: 'JSON_CALLBACK'
                   },
                   {
                     query: {
                       method: 'JSONP'
                     }
                   });
});


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
