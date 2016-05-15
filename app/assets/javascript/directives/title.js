angular.module('NoteWrangler').directive('title',function($timeout){
  return function(scope, element, attrs){
    $timeout(function(){
        $(element).tooltip();
    });
    //destroy the tooltip to keep the DOM clean
    scope.$on('destroy',function(){
      $(element).tooltip('destroy');
    })
  }
})
