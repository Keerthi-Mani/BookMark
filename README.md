# [BookMark](https://keerthi-mani.github.io/BookMark/)

## Overview

We will build an application for storing website urls using nothing but pure JavaScript. No jQuery or frameworks, just plain old JavaScript. We will use Local Storage to store the bookmarks.

### To Check the validation of the url

#### Regex Expression

```
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
```

### Local Storage

#### Set to localStorage

```

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
```

#### Get bookmarks from LocalStorage

```
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
```

<img width="724" alt="Screen Shot 2020-01-28 at 9 51 58 AM" src="https://user-images.githubusercontent.com/52920074/73274636-df540b80-41b3-11ea-8f23-f6a96ec5a3b9.png">

### Screenshot

<img width="1171" alt="Screen Shot 2020-01-28 at 9 51 29 AM" src="https://user-images.githubusercontent.com/52920074/73274640-e0853880-41b3-11ea-9661-34c68face1d5.png">
<img width="1147" alt="Screen Shot 2020-01-28 at 9 50 18 AM" src="https://user-images.githubusercontent.com/52920074/73274644-e2e79280-41b3-11ea-94b9-cd52e5e7410d.png">

### Feedback and issues:

I really appreciate your feedback. If you want to see some improvements in the app I'll be really grateful if you can drop me an email to carkeane.getz@gmail.com.

Additionally, if you find any issue when running the app or any other other matter, please feel free to open an issue in this Github repo.

### Author - Keerthi
