$(document).ready(function () {
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 100){
    $(".header").addClass("header-animate");
  }
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 100){
      $(".header").addClass("header-animate");
    }else{
      $(".header").removeClass("header-animate");
    }
  });
  /*if(location.hash){
    $("body, html").animate({
      scrollTop: $(location.hash).offset().top - $('.header').height()
    },"ease-in");
  }*/
  $("a[data-scroll]").on("click", function (event) {
    event.preventDefault();
    if($(this).attr('data-scroll')){
      $("body, html").animate({
        scrollTop: $('#'+$(this).attr('data-scroll')).offset().top - $('.header').height()
      },"ease-in");
    }
  });

  $(".copy").on("click", function (event) {
    event.preventDefault();
      var copyTextarea = $(this).parents('li').find(".copy-area");
      copyTextarea.select();

      try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
      } catch (err) {
          console.log('Oops, unable to copy');
      }
  });

  $(document).on("click",".navigation.open a", function (event) {
    //event.preventDefault();
    //console.log($(this).parents('.navigation'));
    $(this).parents('.navigation').removeClass('open');
    $("#nav-icon").removeClass("open");
    $(".header").removeClass("open");
    $("body").removeClass("overflow-hidden");
  });
  
  $(document).on("click", "#nav-icon", function () {
    $(this).toggleClass('open');
    $('.navigation').toggleClass('open');
    $(".header").toggleClass("open");
    $("body").toggleClass("overflow-hidden");
  });

  $('#buy-pat-tokens').click(function (event) {
      event.preventDefault();
      var dataSource = this.id;
      $('#buy-token').modal('show');
      $("#token-purchase-agreement-continue").attr("data-source", dataSource);
  });

  $(".accept").click(function (event) {
    var counter = 0;
    $(".accept").each(function(key, checkbox) {
      if(checkbox.checked == false) {
        $("#token-purchase-agreement-continue").attr("disabled", "disabled");
        return false;
      } else {
        counter++;
        if(counter == $(".accept").length) {
          $("#token-purchase-agreement-continue").attr("disabled", false);
        }
      }
    });
  });

  $('#buy-token').on($.modal.AFTER_CLOSE, function(event, modal) {
    $(".accept").prop('checked', false);
    $("#token-purchase-agreement-continue").attr("disabled", "disabled");
  });

  $("#token-purchase-agreement-continue").click(function() {
      top.location.href = "instructions";
  });
});
