document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Create the date object
const currentDate = new Date();
const lastModDate = new Date(document.lastModified);

// Set the inner html text of the elements
currentYear.innerHTML = currentDate.getFullYear();
lastModified.innerHTML = `Last Modification: ${lastModDate.getMonth() + 1}/${lastModDate.getDate()}/${lastModDate.getFullYear()} ${lastModDate.getHours()}:${lastModDate.getMinutes()}:${lastModDate.getSeconds()}`;


//header function***
function openCity(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();