const images = [
  {
    src: "img/slaider/slaider1.jpg",
    city: "Rostov-on-Don <br />LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
    link: "Rostov-on-Don, Admiral",
  },
  {
    src: "img/slaider/slaider2.jpg",
    city: "Sochi <br />Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
    link: "Sochi, Thieves",
  },
  {
    src: "img/slaider/slaider3.jpg",
    city: "Rostov-on-Don <br />Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
    link: "Rostov-on-Don, Patriotic",
  },
];

function initSlaider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".projects-photo__slaider");
  let sliderCity = document.querySelector(".city");
  let sliderArea = document.querySelector(".area");
  let sliderTime = document.querySelector(".time");
  let sliderCost = document.querySelector(".cost");
  let sliderArrow = document.querySelectorAll(".projects__arrow");
  let sliderDots = document.querySelector(".projects__dot");
  let sliderLink = document.querySelector(".projects__list");

  initImages();
  initInfo();
  initArrow();
  initDots();
  initLink();

  function initImages() {
    images.forEach((image, index) => {
      let elementImg = `<img class="projects-photo__img n${index} ${
        index === 0 ? "active" : ""
      }" src="./${image.src}" alt="Project" data-index="${index}">`;
      sliderImages.innerHTML += elementImg;
    });
  }

  function initInfoElement(index, element) {
    return `<p class="projects-description__text n${index} ${
      index === 0 ? "active" : ""
    }" data-index='${index}'>${element}</p>`;
  }

  function initInfo() {
    images.forEach((elem, index) => {
      sliderCity.innerHTML += initInfoElement(index, elem.city);
      sliderArea.innerHTML += initInfoElement(index, elem.apartmentArea);
      sliderTime.innerHTML += initInfoElement(index, elem.repairTime);
      sliderCost.innerHTML += initInfoElement(index, elem.repairCost);
    });
  }

  function initArrow() {
    sliderArrow.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let indexNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("back-arrow")) {
          nextNumber = indexNumber === 0 ? images.length - 1 : indexNumber - 1;
        } else {
          nextNumber = indexNumber === images.length - 1 ? 0 : indexNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dots = `<div class="dot-item n${index} ${
        index === 0 ? "active" : ""
      }" data-index='${index}'></div>`;
      sliderDots.innerHTML += dots;
    });
    sliderDots.querySelectorAll(".dot-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initLink() {
    images.forEach((image, index) => {
      let link = `<a class="projects__list__item n${index} ${
        index === 0 ? "active" : ""
      }" href="#" data-index='${index}'>${image.link}</a>`;
      sliderLink.innerHTML += link;
    });
    sliderLink.querySelectorAll(".projects__list__item").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        moveSlider(this.dataset.index);
      });
    });
  }

  function toggleActive(element, number) {
    element.querySelector(".active").classList.remove("active");
    element.querySelector(".n" + number).classList.add("active");
  }

  let elements = [
    sliderImages,
    sliderCity,
    sliderArea,
    sliderTime,
    sliderCost,
    sliderDots,
    sliderLink,
  ];
  function moveSlider(number) {
    elements.forEach((element) => toggleActive(element, number));
  }
}

document.addEventListener("DOMContentLoaded", initSlaider);
