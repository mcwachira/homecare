

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

});




(function($) {
  $.fn.menumaker = function(options) {
    let cssmenu = $(this),
        settings = $.extend(
          {
            format: "dropdown",
            sticky: false
          },
          options
        );
    return this.each(function() {
      $(this)
        .find(".button")
        .on("click", function() {
        $(this).toggleClass("menu-opened");
        let mainmenu = $(this).next("ul");
        if (mainmenu.hasClass("open")) {
          mainmenu.slideToggle().removeClass("open");
        } else {
          mainmenu.slideToggle().addClass("open");
          if (settings.format === "dropdown") {
            mainmenu.find("ul").show();
          }
        }
      });
      cssmenu
        .find("li ul")
        .parent()
        .addClass("has-sub");
      let  multiTg = function() {
        cssmenu
          .find(".has-sub")
          .prepend('<span class="submenu-button"></span>');
        cssmenu.find(".submenu-button").on("click", function() {
          $(this).toggleClass("submenu-opened");
          if (
            $(this)
            .siblings("ul")
            .hasClass("open")
          ) {
            $(this)
              .siblings("ul")
              .removeClass("open")
              .slideToggle();
          } else {
            $(this)
              .siblings("ul")
              .addClass("open")
              .slideToggle();
          }
        });
      };
      if (settings.format === "multitoggle") multiTg();
      else cssmenu.addClass("dropdown");
      if (settings.sticky === true) cssmenu.css("position", "fixed");
     let  resizeFix = function() {
        let mediasize = 1000;
        if ($(window).width() > mediasize) {
          cssmenu.find("ul").show();
        }
        if ($(window).width() <= mediasize) {
          cssmenu
            .find("ul")
            .hide()
            .removeClass("open");
        }
      };
      resizeFix();
      return $(window).on("resize", resizeFix);
    });
  };
})(jQuery);

(function($) {
  $(document).ready(function() {
    $("#cssmenu").menumaker({
      format: "multitoggle"
    });
  });
})(jQuery);



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

    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

