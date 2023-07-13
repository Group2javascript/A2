document.addEventListener("DOMContentLoaded", function() {
  const featuredImage = document.querySelector("#gallery figure img");
  const thumbnails = document.querySelectorAll("#gallery ul li img");
  const caption = document.querySelector("#gallery figure figcaption");

  let images = [
    {
      smallImg: "images/flowers-pink-small.jpg",
      bigImg: "images/flowers-pink-large.jpg",
      title: "Pink Flowers"
    },
    {
      smallimg: "images/flowers-purple-small.jpg",
      bigImg: "images/flowers-purple-large.jpg",
      title: "Purple Flowers"
    },
    {
      smallImg: "images/flowers-red-small.jpg",
      bigImg: "images/flowers-red-large.jpg",
      title: "Red Flowers"
    },
    {
      smallImg: "images/flowers-white-small.jpg",
      bigImg: "images/flowers-white-large.jpg",
      title: "White Flowers"
    },
    {
      smallImg: "images/flowers-yellow-small.jpg",
      bigImg: "images/flowers-yellow-large.jpg",
      title: "Yellow Flowers"
    }
  ];

  // Creating two functions to change the big image and to select from thumbnails.
  function changeFeaturedImage(smallImg) {
    featuredImage.src = smallImg.dataset.bigImg;
    featuredImage.alt = smallImg.alt;
    caption.textContent = smallImg.alt;
  }

  function clickSmallImage(e) {
    var smallImg = e.target;
    changeFeaturedImage(smallImg);
  }

  thumbnails.forEach(function(smallImg) {
    smallImg.addEventListener("click", clickSmallImage);
  });
});



