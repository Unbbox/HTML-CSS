const divEle = document.querySelector(".display_element");
const spans = document.querySelectorAll("[name='spanDis']");
const divs = document.querySelectorAll("[name='divDis']");

const spann = divEle.querySelectorAll("span");
const divv = divEle.querySelectorAll("div");

// span 요소
spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    spann.forEach((s) => {
      s.style.display = e.target.value;
    });
  });
});

// div 요소
divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    divv.forEach((d) => {
      d.style.display = e.target.value;
    });
  });
});

const w = document.querySelector("#width");
const h = document.querySelector("#height");
const m = document.querySelector("#margin");
const p = document.querySelector("#padding");

w.addEventListener("change", (e) => {
  spann.forEach((s) => {
    s.style.width = e.target.value;
  });

  divv.forEach((d) => {
    d.style.width = e.target.value;
  });
});

h.addEventListener("change", (e) => {
  spann.forEach((s) => {
    s.style.height = e.target.value;
  });

  divv.forEach((d) => {
    d.style.height = e.target.value;
  });
});

m.addEventListener("change", (e) => {
  spann.forEach((s) => {
    s.style.margin = e.target.value;
  });

  divv.forEach((d) => {
    d.style.margin = e.target.value;
  });
});

p.addEventListener("change", (e) => {
  spann.forEach((s) => {
    s.style.padding = e.target.value;
  });

  divv.forEach((d) => {
    d.style.padding = e.target.value;
  });
});
