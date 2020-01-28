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
  } else {
    //Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // add bookmark to array
    bookmarks.push(bookmark);
    //Re-set back to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  //Clear Form
  document.getElementById("myForm").reset();
}
//Regex Expression
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

//Fetch Bookmarks
function fetchBookmarks() {
  //Get bookmarks from LocalStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  //   console.log(bookmarks);

  //Get Output Id
  var bookmarksResults = document.getElementById("bookmarksResults");

  //Build output
  bookmarksResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    //     console.log("NAME :" + name);
    //     console.log("URL :" + url);
    bookmarksResults.innerHTML +=
      '<div class="well">' + "<h3>" + name + "<h3>" + "</div>";
  }
}
