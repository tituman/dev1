if (window.jQuery === undefined) {
    var j = document.createElement('script');
    j.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
    j.onload = fetchData;
    document.body.appendChild(j);
}
else {
    fetchData();
}
 
function fetchData() {
        var rootUrl = jQuery('#ajaxBookmarklet').attr('src');
        jQuery.ajax({
          url: rootUrl.substr(0, rootUrl.lastIndexOf('/') + 1) + "dataExt.js",
          type: 'get',
          dataType: "jsonp",
          contentType: "application/json",
          jsonpCallback: "jsonCallback"
  });
}
 
function jsonCallback(json){
    alert(json);
}