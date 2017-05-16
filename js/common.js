$(function(){

  // スマホレイアウトのときに、ハンバーガーボタンを押すとメニューを表示させる
  $('.hum_menu').on('click', function(){
    $('header').toggleClass('open');
  });


  // グローバルメニュー国際化
  $("#lng-ja").on('click', function() {
    $("#menu-sec1").text('見出しのエリア');
    $("#menu-sec2").text('floatのエリア');
    $("#menu-sec3").text('センタリングエリア');
    $("#menu-sec4").text('制作実績');
  });

  $("#lng-en").on('click', function() {
    $('#menu-sec1').text('Heading');
    $('#menu-sec2').text('Float');
    $('#menu-sec3').text('Centering');
    $('#menu-sec4').text('Portfolio');
  });


  // 背景色変更
  $("#bg-blue").on('click', function() {
    $('body').removeClass("bg-red"); // 青にする前に赤を取り除く
    $('body').toggleClass("bg-blue");
  });

  $("#bg-red").on('click', function() {
    $('body').removeClass("bg-blue"); // 赤にする前に青を取り除く
    $('body').toggleClass("bg-red");
  });


  // 制作実績画像サイズ拡大
  $("#size-up").on('click', function() {
    $("#sec4 ul li").css("width", "400px");
  });


  // 制作実績の画像を変更する

  //(特定の画像を更新する)
  //$("#img-change").on('click', function() {
  //  $("#change-target").attr("src", "img/change_img.jpg");
  //});

  //(全ての画像を更新する)
  $("#img-change").on('click', function() {
    $("#sec4 ul li img").attr("src", "img/change_img.jpg"); // 好きな画像を用意してください
  });

  $('.bxslider').bxSlider({
      auto: true,
      slideWidth: 640
    });

  $('#sec1 h1').pep();

  $(".drawer").drawer();

});
