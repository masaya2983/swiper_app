let title = "javascriptが使えましや";
alert(title);
$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});