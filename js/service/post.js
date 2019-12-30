app.factory('PostFactory', function($http, $q, $timeout){
    var factory = {
    posts : false,
    getPosts : function() {
          var deferred = $q.defer();

          if(factory.posts !== false){
              deferred.resolve(factory.posts);
          }else{

                  $http.get('posts.json').then(
                  function(response){

                        factory.posts = response.data;
                        $timeout(function(){
                              deferred.resolve(factory.posts);
                        }, 2000);
                        
                    },
                  function(response){ 
                        deferred.reject('Impossible de charger les données'); 
                  })
          }
          return deferred.promise;
    },


    getPost: function(id){
          var post = {};
          var deferred = $q.defer();
          
          var posts = factory.getPosts().then(function(posts){
                  angular.forEach(factory.posts, function(value,key){
                    if(value.id == id) post = value;
                  });
                  deferred.resolve(post);
          }, function(msg){
                  deferred.reject(msg);
          });

          return deferred.promise;
    },

    add: function(comment){
          var deferred = $q.defer();
          deferred.resolve();
          return deferred.promise;
    }
  }
  return factory;
}); 

// app.service('Post', function(){
//       that = this;
//       that.posts = [
//           {
//               "id": 0,
//               "name": "Fishland",
//               "content": "Sit irure ex sint id est commodo excepteur duis magna. Do irure enim veniam ad consequat ut ullamco culpa id. Dolor irure nostrud aliqua incididunt fugiat ut nostrud. Eiusmod dolore laboris sint ullamco mollit aliqua excepteur est cupidatat consequat consectetur labore fugiat est. Nostrud eu velit et mollit veniam nisi.",
//               "comments": [
//                   {
//                       "username": "Jackson Alvarado",
//                       "city": "Herald",
//                       "email": "jacksonalvarado@fishland.com",
//                       "content": "Aute exercitation veniam in do tempor elit ullamco sunt magna sunt eu officia excepteur. Mollit eu cupidatat fugiat ipsum voluptate. Laborum sit amet aliqua ad. Est et ullamco cupidatat ad sit occaecat eu sunt non aliquip enim commodo irure cupidatat. Consectetur anim occaecat dolor labore laboris esse incididunt sunt fugiat culpa consequat duis."
//                   },
//                   {
//                       "username": "Rosalie Bush",
//                       "city": "Denio",
//                       "email": "rosaliebush@fishland.com",
//                       "content": "Sint fugiat adipisicing cupidatat reprehenderit do pariatur aliquip non eiusmod minim sit et. Ut id non dolor duis exercitation aute. Nulla occaecat aute excepteur ullamco excepteur ea ex occaecat. Proident excepteur minim amet adipisicing pariatur veniam eu enim aute culpa labore ex proident. Cupidatat duis irure cupidatat adipisicing dolore laborum duis commodo sit ullamco deserunt."
//                   },
//                   {
//                       "username": "Jodie Harrison",
//                       "city": "Why",
//                       "email": "jodieharrison@fishland.com",
//                       "content": "Ipsum velit velit ullamco dolore consectetur Lorem magna laboris nulla ad labore fugiat et velit. Ad ullamco deserunt fugiat est enim ut mollit. Nisi minim anim amet ex anim voluptate anim proident. Veniam ad Lorem est ad veniam aliquip culpa sit laborum eiusmod labore. Cillum consectetur quis est aliquip commodo tempor aliquip ipsum ipsum consequat."
//                   }
//               ]
//           }
//       ],
    
//       that.getPosts = function(){
//           return that.posts;
//       };

//       that.getPost = function(id){
//         var post = {};
//         angular.forEach(that.posts, function(value,key){
//            if(value.id == id) post = value;
//         });

//         return post;
//       }
// });