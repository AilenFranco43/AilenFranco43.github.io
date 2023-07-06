$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.btn__wpp').fadeIn();
    } else {
        $('.btn__wpp').fadeOut();
    }
  });