$(document).ready(function () {
    $('#tabContainer').tabs({
        show: 'fadeIn',
        hide: 'fadeOut'
    });
    var hash = location.hash;
    if (hash) {
        $('#tabContainer').tabs('load', hash)
    }


    // Prevent the web browser from caching AJAX responses
    // Otherwise, clicking for the server time only makes the call the first time you click
    $.ajaxSetup({ cache: false });

    $("#btnAJAXLoad").click(function () {
        $("#divAJAXLoad").load("../pages/Crossword.html");
        console.log("ok");
    }); // End btnAJAXLoad.click()





    //Extra script stuff for start on page
    SelectedPanel(document.getElementById("Home"));



    var words = 'BQPXXICKGUZSRNPODWSTDORFEVZVPQLDDNDJOOKDKPPQAKYYIWRLCSREGRUBREGFYYORATUSDSJGIFVLMGWKTCAFUGFXXBUNNYSISDXOEEJNAFEAQTSYRLELMJEUZVSBUZOMDHZCTKGFJRXWCLRCXCMGBSRRAUPNVWCVLXSJHRTGRXGUVBPMNNLTQJDPNCHHVQZHCCZWYTQAOOYYTMGONXYZMHNRVYAEH';
    var table = document.createElement("table");
    var wordIndex = 1;
    for (f = 0; f < words.length; f++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (i = 1; i < 16; i++) {
            var td = document.createElement("td");
            td.style.paddingRight = "5px";
            td.style.paddingLeft = "5px";
            tr.appendChild(td);
            var newchar = document.createTextNode(words.substring(wordIndex - 1, wordIndex));
            td.appendChild(newchar);
            wordIndex++;
        }
        console.log("ran");
    }
    document.getElementById("wordSearch").appendChild(table);




}); // end ready