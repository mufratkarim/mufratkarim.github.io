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
  document.getElementById("Linkedin").setAttribute("href", CONSTANTS.linkedin);
  document.getElementById("Github").setAttribute("href", CONSTANTS.github);

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

  document
    .getElementById("playStoreProfileLink")
    .setAttribute("href", CONSTANTS.playStoreProfile);
  document
    .getElementById("appleStoreProfileLink")
    .setAttribute("href", CONSTANTS.appleStoreProfile);
  document
    .getElementById("moviemateiOSLink")
    .setAttribute("href", CONSTANTS.moviemateiOS);
  document
    .getElementById("moviemateAndroidLink")
    .setAttribute("href", CONSTANTS.moviemateAndroid);
  document
    .getElementById("newspaper")
    .setAttribute("href", CONSTANTS.newspaperLink);
  document.getElementById("wsj").setAttribute("href", CONSTANTS.wsjLink);
  document
    .getElementById("nytimes")
    .setAttribute("href", CONSTANTS.nytimesLink);
  document
    .getElementById("dailyprophet")
    .setAttribute("href", CONSTANTS.dailyprophetLink);

  document
    .getElementById("androidApps")
    .setAttribute("href", CONSTANTS.androidAppsLink);
  document
    .getElementById("worldCup")
    .setAttribute("href", CONSTANTS.worldCupLink);
  document
    .getElementById("cleanCrypto")
    .setAttribute("href", CONSTANTS.cleanCryptoLink);
  document
    .getElementById("nationalpark")
    .setAttribute("href", CONSTANTS.nationalparkLink);
  document.getElementById("trivia").setAttribute("href", CONSTANTS.triviaLink);
  document
    .getElementById("memorylocker")
    .setAttribute("href", CONSTANTS.memorylockerLink);

  document
    .getElementById("iosApps")
    .setAttribute("href", CONSTANTS.iosAppsLink);
  document
    .getElementById("swiftstorm")
    .setAttribute("href", CONSTANTS.swiftstormLink);
  document
    .getElementById("secretmessenger")
    .setAttribute("href", CONSTANTS.secretmessengerLink);
  document
    .getElementById("hackerNewsLog")
    .setAttribute("href", CONSTANTS.hackerNewsLogLink);

  document
    .getElementById("citytutors")
    .setAttribute("href", CONSTANTS.citytutorsLink);
  document
    .getElementById("sortingvisualizer")
    .setAttribute("href", CONSTANTS.sortingvisualizerLink);
  document
    .getElementById("rgbProject")
    .setAttribute("href", CONSTANTS.rgbProjectLink);
};
