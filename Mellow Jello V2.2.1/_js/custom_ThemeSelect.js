var SelectedColor = 0;

//https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
function Default() {
    document.getElementById('JelloLogo').src = "../_images/jelloVariety/Jello_Green.png";
    document.getElementById('BigBG').src = "../_images/Jello_Green.png";

    SelectedColor = 0;
    SelectedPanel(document.getElementById("Themes"));
}
function Theme1() {
    document.getElementById('JelloLogo').src = "../_images/jelloVariety/Jello_Blue.png";
    document.getElementById('BigBG').src = "../_images/Jello_Blue.png";

    SelectedColor = 1;
    SelectedPanel(document.getElementById("Themes"));
}
function Theme2() {
    document.getElementById('JelloLogo').src = "../_images/jelloVariety/Jello_Red.png";
    document.getElementById('BigBG').src = "../_images/Jello_Red.png";

    SelectedColor = 2;
    SelectedPanel(document.getElementById("Themes"));
}
function Theme3() {
    document.getElementById('JelloLogo').src = "../_images/jelloVariety/Jello_Black.png";
    document.getElementById('BigBG').src = "../_images/Jello_Black.png";

    SelectedColor = 3;
    SelectedPanel(document.getElementById("Themes"));
}


function SelectedPanel(Label) {
    var x = document.getElementsByClassName("panelbutton");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = SelectedColorType();
    }

    Label.style.color = "yellow";
}

function SelectedColorType() {
    switch (SelectedColor) {
        case 0:
            return "lawngreen";
            break;
        case 1:
            return "#003DFF";
            break;
        case 2:
            return "red";
            break;
        case 3:
            return "gray";
        default:
            return "white";
    }
}
