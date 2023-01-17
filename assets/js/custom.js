$(document).ready(function(){

  $(".copy_form > button").click(function(e) {
    $(".succes").fadeIn("slow").delay(1000).fadeOut("slow"), $(this).next().is(":visible") || $(this).next().fadeIn("slow").delay(1000).fadeOut("slow"),
    e.stopPropagation()

  });
  // accordion js
  // accordion js
  $('.acc_title').click(function(j) {
    var dropDown = $(this).closest('.acc_card').find('.acc_panel');
    $(this).closest('.accordion').find('.acc_panel').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.accordion').find('.acc_title.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  // scroll js
  $.scrollIt({
    scrollTime: 1000, 
    activeClass: 'active',
    onPageChange: null,
    topOffset: -0
  });
  
  // data copy
  // data copy
   // Select on pressing COPY
   var copybutton = document.querySelectorAll("[data-copy]");
   for (var i = 0; i < copybutton.length; i++) {
    var el = copybutton[i];
    el.addEventListener("submit", function(e) {
      e.preventDefault();
      var text = e.target.querySelector('input[type="text"]').select();
      document.execCommand("copy");
    });
  }

        // Select all text when pressing inside text field
        var els_selectAll = document.querySelectorAll("[data-click-select-all]");
        for (var i = 0; i < els_selectAll.length; i++) {
          var el = els_selectAll[i];
          el.addEventListener("click", function(e) {
            e.target.select();
          });
        };


      });

