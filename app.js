"use strict";

const featureEl = document.querySelector(".dropdown--features");
const companyEl = document.querySelector(".dropdown--Company");
const dropdownFeatureEl = document.querySelector(".dropdown-feature");
const dropdownCompanyEl = document.querySelector(".dropdown-company");
const openArrowFeatEl = document.querySelector(".open-arrow-feat");
const openArrowCompEl = document.querySelector(".open-arrow-comp");
const closeArrowFeatEl = document.querySelector(".close-arrow-feat");
const closeArrowCompEl = document.querySelector(".close-arrow-comp");

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
