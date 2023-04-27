
function loadXMLDoc() {
    //Code to do XML HTTP request (see slides) goes here
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Run a function to handle XML data recv’d
            myFunctionWithCollapse(this);
        }
    };
    xhttp.open("GET", "1.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var x, i, xmlDoc, txt, name;
    xmlDoc = xml.responseXML; //Response returned as XML data
    txt = "";
    entered = String(document.getElementById("searchBox").value);
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
    console.log(x[1]);
    console.log(entered);

    for (i = 0; i < x.length; i++) {
        //console.log(x[i].childNodes[1]);
        if ((x[i].childNodes[1].innerHTML) === String(entered)) {
            //txt += x[i].childNodes[1].innerHTML + "<br>";
            console.log(x[i].childNodes[1].innerHTML);
            break;
        }
    }
    if (i >= 0 && i != x.length) {
        image = x[i].childNodes[0].innerHTML;
        image = "<img src=" + image + ">";
        name = x[i].childNodes[1].innerHTML;
        // Create a button element
        const button = document.createElement('button')

        // Set the button text to 'Can you click me?'
        button.innerText = name;
        button.id = name;
        button.class = "collapsible";
        // Attach the "click" event to your button
        button.addEventListener('click', () => {
            // When there is a "click"
            // it shows an alert in the browser
            //x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
            //alert("made it");
            name = x[i].childNodes[1].innerHTML;
            image = x[i].childNodes[0].innerHTML;
            image = "<img src=" + image + ">";
            txtPrint = name + image;
            //alert(txtPrint);
            //txtPrint += "<img src=" + image + ">";
            //const page = window.open("http://127.0.0.1:5501/tree_page.html");
            document.getElementById("nameAndImage").innerHTML = txtPrint;
            //alert(txtPrint);
            collapse();
        })
        document.getElementById("nameID").appendChild(button);
    }
    else {
        document.getElementById("nameID").innerHTML = "This tree does not exist. Please type in another tree.";
    }
}

function myFunctionWithCollapse(xml) {
    var x, i, xmlDoc, txt, name;
    xmlDoc = xml.responseXML; //Response returned as XML data
    txt = "";
    entered = String(document.getElementById("searchBox").value);

    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
    console.log(x[1]);
    console.log(entered);

    for (i = 0; i < x.length; i++) {
        //console.log(x[i].childNodes[1]);
        if ((x[i].childNodes[1].innerHTML) === String(entered)) {
            //txt += x[i].childNodes[1].innerHTML + "<br>";
            console.log(x[i].childNodes[1].innerHTML);
            break;
        }
    }
    if (i >= 0 && i != x.length) {
        image = x[i].childNodes[0].innerHTML;
        image = "<img src=" + image + ">";
        name = x[i].childNodes[1].innerHTML;
        // Create a button element
        //const button = document.createElement('button')

        // Set the button text to 'Can you click me?'
        //button.innerText = name;

        //button.id = name;

        // Attach the "click" event to your button
        //button.addEventListener('click', () => {
        // When there is a "click"
        // it shows an alert in the browser
        //x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
        //alert("made it");
        name = x[i].childNodes[1].innerHTML;
        image = x[i].childNodes[0].innerHTML;
        image = "<img src=" + image + ">";
        txtPrint = name + image;
        //alert(txtPrint);
        //txtPrint += "<img src=" + image + ">";
        //const page = window.open("http://127.0.0.1:5501/tree_page.html");

        //make button not hidden 
        document.getElementById("allTree").innerHTML = "";
        document.getElementById('nameID').style.visibility = 'visible';

        document.getElementById("nameAndImage").innerHTML = txtPrint;
        document.getElementById("nameID").innerHTML = name;
        //alert(txtPrint);

        //})
        //document.getElementById("newHTML").appendChild(button);
    }
    else {
        document.getElementById("tree").innerHTML = "This tree does not exist. Please type in another tree.";
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
