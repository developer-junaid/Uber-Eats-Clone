window.onload = () => {
  // Get listings
  const listings = Array.from(document.getElementsByClassName("listings"));

  // Loop listings
  listings.forEach((listing) => handleSlider(listing));
};

//Define Functions

// // Handle Slider
const handleSlider = (listing) => {
  const listingsGrid = listing.getElementsByClassName("listings-grid")[0];
  const arrowLeft = listing.getElementsByClassName("left")[0];
  const arrowRight = listing.getElementsByClassName("right")[0];

  if (!listingsGrid || !arrowLeft || !arrowRight) {
    console.log(listing);
    return;
  }

  arrowRight.addEventListener("click", (e) => {
    e.preventDefault();
    handleClassChange("right");
    listingsGrid.scrollTo({
      left: listingsGrid.offsetWidth,
      behaviour: "smooth",
    });
  });

  arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();
    handleClassChange("left");
    listingsGrid.scrollTo({
      left: 0,
      behaviour: "smooth",
    });
  });

  const handleClassChange = (direction) => {
    if (direction == "right") {
      arrowRight.classList.remove("dark");
      arrowLeft.classList.add("dark");
    } else if (direction === "left") {
      arrowLeft.classList.remove("dark");
      arrowRight.classList.add("dark");
    }
  };
};
