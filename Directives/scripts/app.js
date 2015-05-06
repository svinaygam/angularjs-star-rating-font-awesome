define(['angularAMD'],function(angularAMD){
	
		
		var app =angular.module('appmod',[]);
		app.controller('appctrl',['$scope',function($scope){
			
			$scope.userrating=2;
		}]);
		app.directive('starRating', function () {
        return {
            restrict: 'E',
            scope: {
                currentrating: '=currentrating',
                },
            
            link: function (scope, ele, attrs) {
                var actual= parseInt(scope.currentrating);
                var max =parseInt(attrs.maxrating);
                var prevX = 0;
                var rating = {
                    init: function () {
                        var starhtml = '';
                        var _addStar = function (className, index) {
                            return '<span><i class="' + className + '" data-index=' + index + '></i></span>'
                        };
                        for (var i = 1; i <= actual; i++) starhtml = starhtml + _addStar("fa fa-star", i); // actual rating stars
                        for (var i = actual; i < max ; i++) starhtml = starhtml + _addStar("fa fa-star-o", i); // max rating stars
                        return starhtml;
                    },  //intialize the rating with full stars
                    update: function (evt, ctxt) {
                        var idx = $(ctxt).data("index");
                        var ratingUpdate = function (from, to, removethis, addthis) {
                            for (var i = from; i < to ; i++)
                                $(ele[0].children[i]).find('i').removeClass(removethis).addClass(addthis);
                        };

                        if (evt.pageX > prevX) { // mousing moving left 
                            ratingUpdate(0, idx, "fa-star-o", "fa-star");
                            scope.currentrating = idx;
                            scope.$apply();
                        }
                        else if (evt.pageX < prevX) { // mouse moving right                           
                            ratingUpdate(idx, max, "fa-star", "fa-star-o");
                            scope.currentrating = idx;
                            scope.$apply();
                        }
                        prevX = evt.pageX;
                    }, //update rating as user rates 
                };
                $(ele).html(rating.init());
                $(ele).find('span i').hover(
                    function (evt) { // hover in
                         rating.update(evt, this);
                        },
                    function () { })//hover out                
            }
        }
    });
   

		return angularAMD.bootstrap(app);
});