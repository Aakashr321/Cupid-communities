const soulmateCarouselData = document.getElementById("carouselData");
const formSubmitButton = document.getElementById("buttonGetData");
const parentContainer = document.getElementById("bridalData__Container");

const carouselDivData = [
  {
    imgSrc: "./assets/Rectangle1.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle2.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle3.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle4.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle5.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle6.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle1.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle2.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle3.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle4.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle5.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle6.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle1.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle2.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle3.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle4.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle5.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
  {
    imgSrc: "./assets/Rectangle6.png",
    age: 23,
    height: "5'2",
    languageKnown: "Gujarati",
    religion: "Hindu",
    gotra: "Agarwal",
    location: "Ahemdabad,Gujarat",
    graduation: "Bachelor Degree in Science",
  },
];

let rows = "";

formSubmitButton.addEventListener("click", () => {
  //Have to write a button to take and submit form data

  $(".owl-carousel1").trigger("destroy.owl.carousel");
  $(".owl-carousel1").find(".owl-stage-outer").children().unwrap();
  $(".owl-carousel1").removeClass("owl-center owl-loaded owl-text-select-on");

  carouselDivData.forEach((user) => {
    rows =
      rows +
      ` <div class="item1">
          <div class="carouselUpperDiv">
            <div>
              <img src=${user.imgSrc} alt="girl" class="img-fluid"/>
            </div>
            <div class="text-left carouselDivContent">
              <h2>${user.age}, ${user.height}, ${user.languageKnown}</h2>
              <h4>${user.religion}, ${user.gotra}</h4>
              <h4>${user.location}</h4>
              <h4>${user.graduation}</h4>
              <p>To View full Profile*</p>
            </div>
            <a
              class="btn  btnAppDownload"
              aria-current="page"
              href="#"
              >Download app Now</a
            >     
          </div> 
        </div>`;
  });
  soulmateCarouselData.innerHTML = rows;
  parentContainer.style.opacity = 1;

  $(".owl-carousel1").owlCarousel({
    center: false,
    loop: false,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 3000,
    nav: true,
    responsiveClass: true,
    arrows: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  $(".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
  $(".owl-next").html('<i class="fa-solid fa-arrow-right"></i>');
});
