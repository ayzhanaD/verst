function openContent(evt, contPart) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcont");
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contPart).style.display = "block";
    evt.currentTarget.className += " active";
  }