var vis_toggle = false;
var c;

function toggle_vis_class(c) {
  var x = document.getElementsByClassName(c)
  for (var i = 0; i < x.length; i++) {
    if (x[i].style.display == 'block') {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = 'block';
    }
  }
}
