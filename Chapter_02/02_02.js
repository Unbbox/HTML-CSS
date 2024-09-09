const fStyle = document.querySelector("#fStyle");
const fWeight = document.querySelector("#fWeight");
const p = document.querySelectorAll("p");

fStyle.addEventListener("change", (e) => {
    p.forEach((op) => {
        op.style.fontStyle = e.target.value;
    })
});

fWeight.addEventListener("change", (e) => {
    p.forEach((op) => {
        op.style.fontWeight = e.target.value;
    })
});

const fSize = document.getElementById("fSize");
const text = document.querySelector(".divs > div")

fSize.addEventListener("change", (e) => {
    text.style.fontSize = e.target.value;
})

const txt = document.querySelector(".text div");
const tDeco = document.querySelector("#tDeco");
const tTrans = document.querySelector("#tTrans");

tDeco.addEventListener("change", (e) => {
    txt.style.textDecoration = e.target.value;
})

tTrans.addEventListener("change", (e) => {
    txt.style.textTransform = e.target.value;
})

const shadow = document.querySelector(".shadow div")
const tShad = document.querySelector("#tShad");

tShad.addEventListener("change", (e) => {
    shadow.style.textShadow = e.target.value;
})