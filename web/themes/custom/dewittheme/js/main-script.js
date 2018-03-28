window.onload = function() { myFunction() };

  var container = document.querySelector("header > div");
  
  function myFunction() {
    container.classList.add("container-fluid");
  }

window.onscroll = function() { myFunction() };

  var header = document.querySelector("header");
  var container = document.querySelector("header > div");
  var offset = 200;

  function myFunction() {
      if (window.pageYOffset >= 200) {
          header.classList.add("fixed");
          container.classList.remove("container-fluid");
          container.classList.add("container");
      }
      else {
          header.classList.remove("fixed");
          container.classList.remove("container");
          container.classList.add("container-fluid");
      }
  }