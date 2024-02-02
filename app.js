"use strict";

const featureEl = document.querySelector(".dropdown--features");
const companyEl = document.querySelector(".dropdown--Company");
const dropdownFeatureEl = document.querySelector(".dropdown-feature");
const dropdownCompanyEl = document.querySelector(".dropdown-company");

featureEl.addEventListener("click", function () {
  dropdownFeatureEl.classList.toggle("hidden");
});
companyEl.addEventListener("click", function () {
  dropdownCompanyEl.classList.toggle("hidden");
});
