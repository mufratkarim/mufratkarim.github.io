import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initSwiper from "./scripts/swiper";
import initPlyr from "./scripts/plyr";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { CONSTANTS } from "./data/constants";

initScrollReveal(targetElements, defaultProps);
initSwiper();
initPlyr();
initTiltEffect();
window.onload = function () {
  document.querySelector(".project-wrapper__text-title").textContent =
    CONSTANTS.moviemateTitle;

  document.querySelector(
    ".project-wrapper__text > .moviemateDesc > p"
  ).textContent = CONSTANTS.moviemateDes;
  document.querySelector(
    ".project-wrapper__text > .newspaperDesc > p"
  ).textContent = CONSTANTS.newspaperDesc;

  document.querySelector(
    ".project-wrapper__text > .androidAppsDesc"
  ).innerHTML = CONSTANTS.androidAppsDesc;
  document.querySelector(".project-wrapper__text > .iosAppsDesc").innerHTML =
    CONSTANTS.iosAppsDesc;
  document.querySelector(".project-wrapper__text > .webDesc").innerHTML =
    CONSTANTS.webDesc;
  document.querySelector(".about-wrapper__info-text").innerHTML =
    CONSTANTS.aboutDesc.split("\n").join("<br>");
};
