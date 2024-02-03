"use strict";

const featureEl = document.querySelector(".dropdown--features");
const companyEl = document.querySelector(".dropdown--Company");
const dropdownFeatureEl = document.querySelector(".dropdown-feature");
const dropdownCompanyEl = document.querySelector(".dropdown-company");
const openArrowFeatEl = document.querySelector(".open-arrow-feat");
const openArrowCompEl = document.querySelector(".open-arrow-comp");
const closeArrowFeatEl = document.querySelector(".close-arrow-feat");
const closeArrowCompEl = document.querySelector(".close-arrow-comp");
const btnMenuOpen = document.querySelector(".menu-open");
const btnMenuClose = document.querySelector(".menu-close");
const navBarEl = document.getElementById("navigations");
const navigationEl = document.getElementById("navigation");
// const navStyle = navBarEl.style;

featureEl.addEventListener("click", function () {
  dropdownFeatureEl.classList.toggle("hidden");
  openArrowFeatEl.classList.toggle("hidden");
  closeArrowFeatEl.classList.toggle("hidden");
});

companyEl.addEventListener("click", function () {
  dropdownCompanyEl.classList.toggle("hidden");
  openArrowCompEl.classList.toggle("hidden");
  closeArrowCompEl.classList.toggle("hidden");
});

btnMenuOpen.addEventListener("click", function () {
  navBarEl.style.marginRight = "0";
  navigationEl.style.overflow = "visible";
  btnMenuClose.classList.remove("hidden");
  btnMenuOpen.classList.add("hidden");
});

btnMenuClose.addEventListener("click", function () {
  navBarEl.style.marginRight = "-21rem";
  navigationEl.style.overflow = "hidden";
  btnMenuClose.classList.add("hidden");
  btnMenuOpen.classList.remove("hidden");
});
