function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    } else {
        let B = document.body; //IE 'quirks'
        let D = document.documentElement; //IE with doctype
        D = (D.clientHeight) ? D : B;
        return D.scrollTop;
    }
}

let timeouts = [];
let scrolling = false;
let scroller;
let scrollTop = getScrollTop();
let timeMs;
let alter = false;
let speed = 5;
window.onscroll = function() {
    if(alter) {
        let timeDif = new Date().getMilliseconds() - timeMs;
        speed = 5 - (timeDif / 50);
        console.log(speed);
    }
    timeMs = new Date().getMilliseconds();
    alter = !alter;
    let scrollDirection = getScrollTop() - scrollTop;
    scrollDirection = scrollDirection / Math.abs(scrollDirection);
    scrollTop = getScrollTop();
    clearTimeout(scroller);
    scroller = setTimeout(function(){
        console.log('smooth scrolling active');
        if(!scrolling) {
            timeouts.length = 0;
            scrolling = true;
            let steps = 50;
            let delay = 6;
            for(let i = 0; i < steps; i++) {
                (function(i){
                    let timeout = setTimeout(function(){
                        let perc = i / steps;
                        let val = (perc == 1) ? 1 : (-Math.pow(2, -10 * perc) + 1);
                        let scrollY = val * speed * scrollDirection;
                        window.scrollTo(0, getScrollTop() + scrollY);
                        setTimeout(function(){
                            if(i == (steps - 1)) scrolling = false;
                        }, steps * delay);
                    }, (i * delay));
                    timeouts.push(timeout);
                })(i);
            }
        }
    }, 50);
};

/* affix the navbar after scroll below header */
// $('nav').affix({
//       offset: {
//         top: $('#services').offset().top
//       }
// });



$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});


