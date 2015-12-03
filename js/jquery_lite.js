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

  Dom.prototype.append = function(obj) {
    if (obj instanceof(window.DOMNodeCollection)) {
      for (var i = 0; i < this.nodes.length; i++){
        for (var j =0; j < obj.nodes.length; j++){
          this.nodes[i].appendChild(obj.nodes[j]);
        }
      }
    } else if (typeof obj === "string") {
      this.nodes.forEach(function (node) {
        node.innerHTML += obj;
      });
    } else {
      this.nodes.forEach(function (node) {
        node.innerHTML += obj.innerHTML;
      });
    }
  };

  Dom.prototype.attr = function(attributeName, value) {
    if (value === 'undefined') {
      for (var i = 0; i < this.nodes.length; i++) {
        var result = this.nodes[i].attributes[attributeName];
        if (result !== 'undefined') {
          return result;
        }
      }
    } else {
      for (var i = 0; i < this.nodes.length; i++) {
        var result = this.nodes[i].attributes[attributeName];
        if (result !== 'undefined') {
          this.nodes[i].attributes[attributeName] = value;
          return;
        }
      }
    }
  };




})();
