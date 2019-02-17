function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 

function alertText() { 
    // Gets text from text box
    var text = document.getElementById("mytext");
    // Opens up alert window
    window.alert(text.value);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Treats the return/enter key like a button click
document.getElementById("mytext")
    // Checks for specific event to happen defined by function in 2nd parameter
    .addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("mybutton").click();
    }
});
