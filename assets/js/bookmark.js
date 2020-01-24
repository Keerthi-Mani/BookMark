// Listen for submit form
document.getElementById("myForm").addEventListener("submit", saveBookMark);

//Save BookMark
function saveBookMark(e) {
  // Prevent form from submitting
  e.preventDefault();

  //Get input from form values
  var WebSiteName = document.getElementById("websiteName").value;
  var WebSiteUrl = document.getElementById("websiteUrl").value;
  //   console.log(WebSiteName);
  //   console.log(WebSiteUrl);

  var bookmark = {
    name: WebSiteName,
    url: WebSiteUrl
  };
  //   console.log(bookmark);

  //   //Local Storage Test
  //     localStorage.setItem("test", "Hello World");
  //     console.log(localStorage.getItem("test"));
  //     localStorage.removeItem("test");
  //     console.log(localStorage.getItem("test"));

  // Test if bookmarks is null
  if (localStorage.getItem("bookmarks") === null) {
    // initial array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}
//Regex Expression
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

//Clear Form
document.getElementById("myForm").reset();
