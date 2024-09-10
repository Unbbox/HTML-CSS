const colorSection = document.querySelector(".color > div");
const keywordBG = document.querySelector("#keywordBG");
const rgbBG = document.querySelector("#rgbBG");
const hexBG = document.querySelector("#hexBG");
const hslBG = document.querySelector("#hslBG");

keywordBG.addEventListener("change", (e) => {
    const li = document.getElementById("keyword");
    li.querySelector("div > div").style.backgroundColor = e.target.value;
});

rgbBG.addEventListener("change", (e) => {
    const li = document.getElementById("rgb");
    li.querySelector("div > div").style.backgroundColor = e.target.value;
});

hexBG.addEventListener("change", (e) => {
    const li = document.getElementById("hex");
    li.querySelector("div > div").style.backgroundColor = e.target.value;
});

hslBG.addEventListener("change", (e) => {
    const li = document.getElementById("hsl");
    li.querySelector("div > div").style.backgroundColor = e.target.value;
});

