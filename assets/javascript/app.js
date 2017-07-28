var searchTerm;
var beginDate = 2000;
var endDate = 2017;
var pages = 0;

$(document).ready(function() {

  $('button[type="submit"]').on('click', function(e){
    e.preventDefault();
    searchTerm = $('#search').val();

   beginDate = parseInt($('#start-year').val() + "0101" );
   endDate = parseInt($('#end-year').val() + "0101" )




    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
        'api-key': "2f1413f340504d3bb041d7d6eb0b967e",
        'q': searchTerm,
        'begin_date' : beginDate
      });
      console.log(url);
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {

      for(var i = 0; i < result.response.docs.length; i++){
        $('.panel-footer').append("<h3>" + result.response.docs[i].headline.main + "</h3>"); 
        $('.panel-footer').append("<p>" + result.response.docs[0].snippet + "</p>");
        $('.panel-footer').append("<a href='" + result.response.docs[i].web_url + " '>" + result.response.docs[i].web_url + "</a>");
      }

        console.log(result);
        console.log('web url here ' + result.response.docs[0].web_url);
        console.log('snippet ' + result.response.docs[0].snippet);
      }).fail(function(err) {
        throw err;
      });
   
  });

    $('button[type="reset"]').on('click', function(){
      $('.panel-footer').empty();
    });

});
//result.response.docs

  // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  // url += '?' + $.param({
  //   'api-key': "2f1413f340504d3bb041d7d6eb0b967e",
  //   'q': "whales",
  //   'begin_date' : number,
  //    'end_date' : number,
  //    
  // });
  // // console.log(url);

  // $.ajax({
  //   url: url,
  //   method: 'GET',
  // }).done(function(result) {
  //   console.log(result);

  //   var headline = $('body').append('h1');
  //   var headlineText = result.response.docs[0].headline.main; 

  //   headline.html(headlineText).append('<br>')
  //     .append(result.response.docs[0].snippet).append('<br>')
  //     .append("<a href='" + result.response.docs[0].web_url + " '>" + result.response.docs[0].web_url + "</a>");

  //   console.log(result.response.docs[0].headline.main);
  //   console.log('web url here ' + result.response.docs[0].web_url);
  //   console.log('snippet ' + result.response.docs[0].snippet);
  // }).fail(function(err) {
  //   throw err;
  // });
  




