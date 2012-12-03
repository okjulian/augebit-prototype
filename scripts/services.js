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

