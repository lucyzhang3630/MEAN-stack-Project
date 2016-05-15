angular.module('NoteWrangler').directive('nwCategorySelect', function(Category){
  return {
    replace: true,
    restrict: "E",
    require:"?ngModel", //question mark make it not compulsory,by requireing it we could use sth from other directives,
                        //and make the link function have access to ngModel's controller,
                        // we could name that controller whatever we want, for now,just call it ngModelCtrl
    templateUrl: '/assets/templates/directives/nwCategorySelect.html',
    link: function(scope, element, attrs, ngModelCtrl){
      var activeCategory = {};
      scope.categories = Category.query();

      scope.isActive = function(category){
        //console.log("this is activeCategory "+JSON.stringify(activeCategory));
        //console.log("this is Category "+JSON.stringify(category));
        return activeCategory && activeCategory.id === category.id;
      }

      scope.toggleCategory = function(category){
        if(category === activeCategory){
          activeCategory = {};
        }else {
          activeCategory = category;  
        }
        ngModelCtrl.$setViewValue(activeCategory);
      }

      ngModelCtrl.$render = function () {
        activeCategory = ngModelCtrl.$viewValue;
      }
    }
  }
});
