var elms = document.getElementsByClassName("checked")

for (var i = 0; i < elms.length; i++) {
    elms[i].click()
    elms[i].onclick = function() {
        return false;
    }
}

function SetNailpolishColor(color) {
    var elm = document.getElementById("nailpolish-img");

    var src = "bilder/13.jpeg"

    if (color == 1) {
        src = "bilder/14.jpeg"
    }
    else if (color == 2) {
        src = "bilder/15.jpeg"
    }
    else if (color == 3) {
        src = "bilder/16.jpeg"
    }

    elm.src = src;
}

function ChangeNailSize() {
    var elm = document.getElementById("fake-nails");
    var size = document.getElementById("nail-size").value;

    var src = "bilder/9.jpeg";

    if (size == "medium") {
        src = "bilder/12.jpeg"
    }
    else if (size == "long") {
        src = "bilder/4.jpg"
    }

    elm.src = src;
}

ChangeNailSize();