<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="author" content="Lindsey, Ahlea, Karis, Angie">
        <title>Tree Search</title>
        <link rel="stylesheet" href="search_page.css">
        <title>Search_page</title>
    </head>

    <body>
        <?php
        include("menu.php")
        ?>
        <div>
            <form method="POST">
                <input id ="inputSize" placeholder="Search... " type="text" name="searchBox" value=""><br>
                <input id ="inputSize" type="submit" name="enterSearch" value="Search"><br>
                <p id="hint"> *Press the Search button to view available books* </p>
                <p id="data"></p>
            </form>

            <script>
                function loadXMLDoc() {
                    //Code to do XML HTTP request (see slides) goes here
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            // Run a function to handle XML data recv’d
                            myFunction(this);
                        }
                    };
                    xhttp.open("GET", "1.xml", true);
                    xhttp.send();
                }
                
                function myFunction(xml) {
                    var x, i, xmlDoc, txt;
                    xmlDoc = xml.responseXML; //Response returned as XML data
                    txt = "";
                    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
                    console.log(x[1]);
                    for (i = 0; i< x.length; i++) {
                        txt += x[i].childNodes[1].innerHTML + "<br>";
                        console.log(x[i].childNodes[1].innerHTML);
                    }
                    console.log(txt);
                    image = x[10].childNodes[0].innerHTML;
                    txt += "<img src="+image+">";
                    document.getElementById("newHTML").innerHTML = txt;

                }
            </script>
        </div>
    </body>
</html>
