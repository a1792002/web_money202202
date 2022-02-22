$(document).ready(function(){

  // 回頂端 按鈕
  $('.gotop').click(function(){
    $('html,body').animate({scrollTop:0}, 333);
  });

  // 廣告大小控制 
  $('.btn_l').click(function(){
    $('.item').removeClass('row_m');
    $('.item').removeClass('row_s');
    $('.item').addClass('row_l');
  });
  $('.btn_m').click(function(){
    $('.item').removeClass('row_l');
    $('.item').removeClass('row_s');
    $('.item').addClass('row_m');
  });
  $('.btn_s').click(function(){
    $('.item').removeClass('row_l');
    $('.item').removeClass('row_m');
    $('.item').addClass('row_s');
  });

  // 上方下拉式選單
  $('.top_about_list').slideUp(0);
  $('.top_city_list').slideUp(0);
  $('.top_about').click(function(){
    $('.top_city_list').slideUp(300);
    $('.top_about_list').slideToggle(300);
  });
  $('.top_city').click(function(){
    $('.top_about_list').slideUp(300);
    $('.top_city_list').slideToggle(300);
  });

  // 手機版上方選單開關
  $('.m_menu_list').slideUp(0);
  $('.btn_m_openmenu').click(function(){
    $('.m_menu_list').slideDown(300);
  });
  $('.close_list').click(function(){
    $('.m_menu_list').slideUp(300);
  });

  // 手機版上方搜尋開關
  $('.m_searchbox').slideUp(0);
  $('.m_opensearch').click(function(){
    $('.m_searchbox').slideDown(300);
  });
  $('.close_search').click(function(){
    $('.m_searchbox').slideUp(300);
  });

  // 手機版首頁下方控制區_廣告縮放
  $('.bottom_size').slideUp(0);
  $('.bottom_opensize').click(function(){
    $('.bottom_size').slideDown(300);
  });
  $('.close_size').click(function(){
    $('.bottom_size').slideUp(300);
  });

  // 手機首頁下方控制區_縣市快選
  $('.m_menu_list').slideUp(0);
  $('.bottom_openmenu').click(function(){
    $('.m_menu_list').slideDown(300);
  });
  $('.close_list').click(function(){
    $('.m_menu_list').slideUp(300);
  });

});