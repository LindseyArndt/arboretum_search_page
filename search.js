
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
    var x, i, xmlDoc, txt, entity, name;
    xmlDoc = xml.responseXML; //Response returned as XML data
    txt = "";
    entered = String(document.getElementById("searchBox").value);
    alert(entered);
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
    console.log(x[1]);
    console.log(entered);
    //alert(entered);
    //"Austrian Pine"
    //check if the the tree exists

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
            document.getElementById("tree").innerHTML = txtPrint;
            //alert(txtPrint);

        })
        document.getElementById("newHTML").appendChild(button);
    }
    else {
        document.getElementById("tree").innerHTML = "This tree does not exist. Please type in another tree.";
    }


    //document.body.appendChild(button);

    //txt += "<button type=\"button\" onclick=\"treeCalled(" + name + "," + image + ")\">" + name + "</button><br>";
    //document.getElementById("newHTML").innerHTML = txt;

    //Description
    //entity = x[i].childNodes[2].innerHTML;
    //alert("entity" + entity);
}
