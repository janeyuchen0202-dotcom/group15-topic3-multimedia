/* Group details: edit these values once and every page updates.
   Put each member's name between the quotes, for example "1123708": "王小明". */
window.HUB = {
  group: "15",
  members: {
    "1123708": "簡語辰",  // Section 1 · Digital Multimedia Representation
    "1123709": "簡丞逸",  // Section 2 · Image Resizing and Interpolation
    "1110426": "洪郁琇",  // Section 3 · Geometric Image Transformations
    "1123721": "許亦禎",  // Section 4 · Frequency-Domain Transformations
    "1143724": "蕭偉恩",  // Section 5 · Color-Space Transformations
    "1083750": "黃微恩"   // Section 6 · Efficient Multimedia Processing
  }
};

(function () {
  function fill() {
    var hub = window.HUB || {}, members = hub.members || {};
    var who = document.querySelectorAll("[data-sid]");
    for (var i = 0; i < who.length; i++) {
      var name = members[who[i].getAttribute("data-sid")];
      if (name) who[i].textContent = name;
    }
    if (hub.group) {
      var g = document.querySelectorAll("[data-group]");
      for (var j = 0; j < g.length; j++) g[j].textContent = hub.group;
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill); else fill();
})();
