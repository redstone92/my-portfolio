// $(function(){
//   $(".mainmenu_area .info").mouseover(function(){
//     $("#submenu.sm1").css("visibility","hidden");
//     $("#submenu.sm1").css("visibility","visible");
//   }).mouseout(function(){
//     $("#submenu.sm1").css("visibility","hidden");
//   });
// });


$(function(){
  $(".mainmenu_area li").mouseover(function(){
    $("#submenu",this).css("height","630px");
    $("#submenu",this).css("visibility","visible");
  }).mouseout(function(){
    $("#submenu",this).css("height","0");
    $("#submenu",this).css("visibility","hidden");
  });
});

// $(function(){
//   $(".menubtn").click(function(){
//     $("#smallmenu").toggleClass("smallmenu");
//     $(".smallmenu").css("display","block");
//     $(this).toggleClass("on");
//   });
//   $(".searchbtn").click(function(){
//     $("#searchmenu").toggleClass("searchmenu");
//     $(".searchmenu").css("display","block");
//     $(".search_area").css("display","block");
//     $(this).toggleClass("on");
//   });
// });

// $(function(){
//   $(".btn1").click(function(){
//     $(".btn1 ul").toggleClass("list");
//     $(".list").css("display","block");
//   });
// });

$(function(){
  $(".tabBox ul li a").click(function(){
    $(".tabBox ul li a").removeClass("now");
    $(this).addClass("now");
  });
});

$(function(){
  $(".page_wrap a").click(function(){
    $(".page_wrap a").removeClass("now_page");
    $(this).addClass("now_page");
  });
});
