$.get("https://flurin.ml/component/head.html", function(data) {
  $("head").append(data);
});
$.get("https://flurin.ml/component/header.html", function(data) {
  $("header").append(data);
});
