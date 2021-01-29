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
			url: rootUrl.substr(0, rootUrl.lastIndexOf('/') + 1) + "dataExt.json",
			dataType: "jsonp", // jsonp
			type: 'POST',
			dataType: "jsonp",
			contentType: "application/json",
			success: function (result, status, xhr) {
				console.log(result);
			},
			error: function (xhr, status, error) {
				console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
			}
			jsonpCallback: "jsonCallback"
  });
}
 
function jsonCallback(json){
    alert("In jsonCallback! Got " + json.field1 + ", " + json.field2 + ", " + json.field3);
}