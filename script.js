var a;

function show_hide() {
    if(a == 1) {
        document.getElementById("15form").style.display="none";
        return a=0;
    }else{
        document.getElementById("15form").style.display="block";
        return a=1;
    }
}


var b;

function hide_show() {
    if(b == 1) {
        document.getElementById("24form").style.display="none";
        return b=0;
    }else{
        document.getElementById("24form").style.display="block";
        return b=1;
    }
}





// script.js

function show_hide() {
  var form12 = document.getElementById("15form");
  var form24 = document.getElementById("24form");

  form12.style.display = "block";
  form24.style.display = "none";
}

function hide_show() {
  var form12 = document.getElementById("15form");
  var form24 = document.getElementById("24form");

  form12.style.display = "none";
  form24.style.display = "block";
}
