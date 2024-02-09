document.getElementById("heading").addEventListener("click", function() {
    var paragraph = document.getElementById("paragraph");
    if (paragraph.classList.contains("hidden")) {
      paragraph.classList.remove("hidden");
    } else {
      paragraph.classList.add("hidden");
    }
  });
  // Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to the heading element
  var heading = document.getElementById("heading");
  heading.addEventListener("click", function() {
    // Toggle the 'hidden' class on the paragraph element
    var Image = document.getElementById("image");
    Image.classList.toggle("hidden");
  });
});
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to the heading element
  var heading = document.getElementById("heading");
  heading.addEventListener("click", function() {
    // Toggle the 'hidden' class on the paragraph element
    var paragraph = document.getElementById("ul");
    paragraph.classList.toggle("hidden");
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var heading = document.getElementById("heading");
  heading.addEventListener("click", function() {
    var paragraph = document.getElementById("paragraph");
    if (paragraph.classList.contains("hidden")) {
      paragraph.classList.remove("hidden");
    } else {
      paragraph.classList.add("hidden");
    }

    var image = document.getElementById("image");
    if (image) {
      image.classList.toggle("hidden");
    }

    var ul = document.getElementById("ul");
    if (ul) {
      ul.classList.toggle("hidden");
    }
  });
});



// script.js

// Function to toggle visibility of paragraphs when headings are clicked
document.addEventListener('DOMContentLoaded', function () {
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach(function (heading) {
      heading.addEventListener('click', function () {
          const paragraph = heading.nextElementSibling;
          if (paragraph.classList.contains('hidden')) {
              paragraph.classList.remove('hidden');
          } else {
              paragraph.classList.add('hidden');
          }
      });
  });
});
