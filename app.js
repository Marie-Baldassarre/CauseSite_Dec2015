function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc="
             + "&subject=" + escape("Let's Support Hillary 2016")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}











