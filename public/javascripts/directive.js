var directives = angular.module('Directives',[]);

directives.directive('ngCarousel',function () {
    var carouselConteiner = $('#carousel_div');
    var carousel = carouselConteiner.children(':first');
    var initLength = carousel.children().length;

    var start = function () {
        if((carousel.children().length*carousel.children().outerWidth())<carouselConteiner.outerWidth()){
            carousel.css('width',"100%");
        }else {
            carousel.mousemove();
            carousel.children(':last').after(carousel.children().slice(0, 1).clone(true));
            carousel.children(':first').animate({
                "margin-left": "-=" + (carousel.children().outerWidth() + 30) + "px"
            }, 600, 'linear', function (evt) {
                carousel.children().slice(0, 1).remove();
                carousel.children(':first').css('margin-left', 0);
                start();
            });
            console.log(carousel.children().length);
        }

    };

    var stop = function (event) {
        i=false;
        var carouselConteiner = $('#carousel_div');
        var carousel = carouselConteiner.children(':first');
        carousel.children(':first').stop();
        if(carousel.children().length>initLength){
            carousel.children().slice(0,1).remove();
        }
    };

    return{
        restrict: 'A',
        link : function(scope,element,attrs){
            $(document).ready(function () {
                start();
            });
            element.bind('mousedown',stop);
            element.bind('mouseup',start);
            element.bind('mousemove',function(){
            });
        }
    }
});

