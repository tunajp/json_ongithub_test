/*
 * app.js
 *
 * @author Mitsunori Inaba <m-inaba@phoenixdesign.jp>
 */

/**
 * ready
 */
$(function(){
  getData('data/test.json', function(result_data){
    if(result_data === null) {
      return;
    }
    console.log(result_data);
    $('#result').text(result_data.name);
  });
});

/**
 * getData function
 */
function getData(url, callback_function)
{
  $.ajax({
    url: url,
    timeout:30000,
    contentType: 'application/json',
    dataType: 'json',
    success: function(result_data) {
      callback_function(result_data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert('通信エラーが発生しました。');
      callback_function(null);
    }
  });
}
