// Listen for submit form
document.getElementById("myForm").addEventListener("submit", saveBookMark);
var WebSiteName;
var WebSiteUrl;
//Save BookMark
function saveBookMark(e) {
  e.preventDefault();
  //Get input from form values
  WebSiteName = document.getElementById("websiteName").value;
  WebSiteUrl = document.getElementById("websiteUrl").value;
  //   console.log(WebSiteName);
  //   console.log(WebSiteUrl);
}

var bookmark = {
  name: WebSiteName,
  url: WebSiteUrl
};

//Regex Expression
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

//Clear Form
document.getElementById("myForm").reset();
