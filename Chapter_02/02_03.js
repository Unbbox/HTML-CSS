const align = document.querySelector(".align > div");
const lSpace = document.querySelector("#lSpace");
const wSpace = document.querySelector("#wSpace");
const lHeight = document.querySelector("#lHeight");
const radios = document.querySelectorAll("[name='tAlign']");

radios.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    align.style.textAlign = e.target.value;
  });
});

lSpace.addEventListener("change", (e) => {
  align.style.letterSpacing = e.target.value;
});

wSpace.addEventListener("change", (e) => {
  align.style.wordSpacing = e.target.value;
});

lHeight.addEventListener("change", (e) => {
  align.style.lineHeight = e.target.value;
});

const indent = document.querySelector(".indent > div");
const tIndent = document.querySelector("#tIndent");

tIndent.addEventListener("change", (e) => {
  indent.style.textIndent = e.target.value;
});
