const box1 = document.querySelector(".box1");
const box1Styles = getComputedStyle(box1);
const box1MainColor = box1Styles.getPropertyValue("--box1-main-color");

const box2 = document.querySelector(".box2");
const box2Styles = getComputedStyle(box2);
const box2MainColor = box2Styles.getPropertyValue("--box2-main-color");

const header = document.querySelector("#main-header");
header.style.setProperty("--header-bg-color", boxMainColor);
