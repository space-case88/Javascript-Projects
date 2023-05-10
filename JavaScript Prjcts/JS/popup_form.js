function openForm() {
    document.getElementById("myForm").style.display = "block";
}


function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 

// Get image element
const img = document.getElementById('flores');

//add eventListener
img.addEventListener('click', () => {
    img.classList.toggle('zoom-in');
});

const zoomImage = document.getElementById('flores');
zoomImage.addEventListener('click', () => {
  zoomImage.classList.toggle('zoom-in');
});

//This will allow smooth scrolling between sections of the html
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }

  document.getElementById("section1-button").addEventListener("click", function() {
    scrollToSection("section1");
  });

  document.getElementById("section2-button").addEventListener("click", function() {
    scrollToSection("section2");
  });

  document.getElementById("section3-button").addEventListener("click", function() {
    scrollToSection("section3");
  });

  document.getElementById("section4-button").addEventListener("click", function() {
    scrollToSection("section4");
  });

  document.getElementById("section5-button").addEventListener("click", function() {
    scrollToSection("section5");
  });

  //This should add smooth scrolling to the navbar
  var navbar = document.getElementById("navbar");
  var links = navbar.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var sectionId = this.getAttribute("href").substring(1);
      var section = document.getElementById(sectionId);
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }

//Scripting for the slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
