
function loadXMLDoc() {
    alert("called");
    //Code to do XML HTTP request (see slides) goes here
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Run a function to handle XML data recv’d
            myFunction(this);
        }
    };
    xhttp.open("GET", "1.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var x, i, xmlDoc, txt, entity;
    xmlDoc = xml.responseXML; //Response returned as XML data
    txt = "";
    entered = String(document.getElementById("searchBox").value);
    alert(entered);
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
    console.log(x[1]);
    console.log(entered);
    //alert(entered);
    //"Austrian Pine"
    for (i = 0; i < x.length; i++) {
        //console.log(x[i].childNodes[1]);
        if ((x[i].childNodes[1].innerHTML) === String(entered)) {
            txt += x[i].childNodes[1].innerHTML + "<br>";
            console.log(x[i].childNodes[1].innerHTML);
            break;
        }

    }
    image = x[i].childNodes[0].innerHTML;
    txt += "<img src=" + image + ">";
    tree_page.getElementById("description").innerHTML = txt;

    //Description
    entity = x[i].childNodes[2].innerHTML;
    alert("entity" + entity);
}
