$(function(){
  $("dd").css("display","none");
  $("dl dt").css("background-image","url('../asset/img/news/add.png')");
  $("dl dt").on("click",function(){
    if ( $(this).next().css("display") == "none"){
      $("dl dd").css("display","none"); // 나머지를 노출하지 않음
      $(this).next().css("display","block");
      $(this).css("background-image","url('../asset/img/news/minus.png')");
    } else {
      $(this).next().css("display","none");
      $("dl dt").css("background-image","url('../asset/img/news/add.png')");
    }

    // if ( $("+dd",this).css("display") == "none") {
    //   $("dl dd").slideUp("slow");
    //   $("+dd",this).slideDown("slow");
    // }
  });
});
