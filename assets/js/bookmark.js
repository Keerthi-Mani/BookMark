// Listen for submit form
var Submit = document.getElementById("myForm");
Submit.addEventListener("submit", saveBookMark);

//Save BookMark
function saveBookMark() {
  //Get input from form values
  var WebSiteName = document.getElementById("websiteName").value;
  var WebSiteUrl = document.getElementById("websiteUrl").value;

  if (!validateForm(WebSiteName, WebSiteUrl)) {
    return false;
  }
}

var bookmark = {
  name: WebSiteName,
  url: WebSiteUrl
};

//Clear Form
Submit.reset();
