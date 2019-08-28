function fetch(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send("request");
  request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
      return request.responseText;
    }
  }
}
