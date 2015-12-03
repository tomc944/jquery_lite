if (typeof $l === 'undefined') {
  window.$l = {};
}
(function() {
  window.$l = function(el) {
    if (el instanceof(HTMLElement)) {
      return new window.DOMNodeCollection([el]);
    } else {
      var elementList = document.querySelectorAll(el);
      var elementListArr = [].slice.apply(elementList);
      return new window.DOMNodeCollection(elementListArr);
    }
  };

  var Dom = window.DOMNodeCollection = function(arr) {
    this.nodes = arr;
  };

  Dom.prototype.html = function (string) {
    if (arguments.length === 0){
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach(function (node) {
        node.innerHTML = string;
      });
    }
  };

  Dom.prototype.empty = function () {
    this.html("");
  };



})();
