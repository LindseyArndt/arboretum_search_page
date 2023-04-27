
function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunctionWithCollapse(this);
        }
    };
    xhttp.open("GET", "1.xml", true);
    xhttp.send();
}

function myFunctionWithCollapse(xml) {
    var x, i, xmlDoc, txt, name;
    xmlDoc = xml.responseXML; //Response returned as XML data
    txt = "";
    entered = String(document.getElementById("searchBox").value);

    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
    console.log(x[1]);
    console.log(entered);
    //This is just printing to the console
    for (i = 0; i < x.length; i++) {
        if ((x[i].childNodes[1].innerHTML) === String(entered)) {
            console.log(x[i].childNodes[1].innerHTML);
            break;
        }
    }
    if (i >= 0 && i != x.length) {
        image = x[i].childNodes[0].innerHTML;
        image = "<img src=" + image + ">";
        name = x[i].childNodes[1].innerHTML;
        name = x[i].childNodes[1].innerHTML;
        image = x[i].childNodes[0].innerHTML;
        image = "<img src=" + image + " \"alt =\"This is an image of a tree on the Winona State campus\">";
        desc = "<p id=\"desc\">This is a wonderful description of a tree.</p>";
        txtPrint = name + image + desc;
        document.getElementById("allTree").innerHTML = "";
        document.getElementById('nameID').style.visibility = 'visible';

        document.getElementById("nameAndImage").innerHTML = txtPrint;
        document.getElementById("nameID").innerHTML = name;

    }
    else {
        document.getElementById("nameID").innerHTML = "This tree does not exist. Please type in another tree.";
    }
}


function collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}
