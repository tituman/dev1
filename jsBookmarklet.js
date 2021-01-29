JavaScriptFetch();

function JavaScriptFetch() {
    var script = document.createElement('script');
    script.src = 'https://tituman.github.io/dev1/dataExt.json';
    document.querySelector('head').appendChild(script);
}
  
function jsonCallback(data) {
    alert(data[3].domains.length);
}