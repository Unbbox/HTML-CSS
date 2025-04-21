// ele_size 클래스 control
const divEle = document.querySelector(".div_ele");
const divEle_parents = document.querySelector(".ele_size > div div:first-child");
const control = document.querySelector(".ele_size > .control");

const divWidth = control.querySelector("#width");
const divHeight = control.querySelector("#height");
const divLineHeight = control.querySelector("#line-height");
const divDisplay = control.querySelectorAll("#display");

divWidth.addEventListener("change", () => {
  divEle.style.width = divWidth.value;
});

divHeight.addEventListener("change", () => {
  divEle.style.height = divHeight.value;
});

divLineHeight.addEventListener("change", () => {
  divEle.style.lineHeight = divLineHeight.value;
});

divDisplay.forEach((display) => {
  display.addEventListener("click", () => {
    divEle_parents.style.display = display.value;
  });
});

/**
 * minMaxwidthHeight 클래스 control
 */
const divColor = document.querySelector(".div_color");
const divYellow = document.querySelector(".div_yellow");
const divBlue = document.querySelector(".div_blue");

// 전체 div 크기 변경
const color_width = document.querySelector("#color_width");

// div_yellow 크기 변경
const yellow_maxWidth = document.querySelector("#yellow_maxWidth");
const yellow_minWidth = document.querySelector("#yellow_minWidth");
const yellow_maxHeight = document.querySelector("#yellow_maxHeight");
const yellow_minHeight = document.querySelector("#yellow_minHeight");

// div_blue 크기 변경
const blue_width = document.querySelectorAll("#blue_width");

color_width.addEventListener("change", (e) => {
  divColor.style.width = color_width.value;
});

yellow_maxWidth.addEventListener("change", (e) => {
  console.log(yellow_maxWidth.value);
  divYellow.style.maxWidth = yellow_maxWidth.value;
});

yellow_minWidth.addEventListener("change", (e) => {
  divYellow.style.minWidth = yellow_minWidth.value;
});

yellow_maxHeight.addEventListener("change", (e) => {
  divYellow.style.maxHeight = yellow_maxHeight.value;
});

yellow_minHeight.addEventListener("change", (e) => {
  divYellow.style.minHeight = yellow_minHeight.value;
});

blue_width.forEach((blue) => {
  blue.addEventListener("click", (e) => {
    divBlue.style.display = blue.value;
  });
});

/**
 * div_contents 섹션 control
 *
 */
// div1 컨트롤러
const div1 = document.querySelector(".div1");
const div1Margin = document.querySelector("#div1_margin");
const div1Padding = document.querySelector("#div1_padding");

div1Margin.addEventListener("change", (e) => {
  div1.style.margin = div1Margin.value;
});

div1Padding.addEventListener("change", (e) => {
  div1.style.margin = div1Padding.value;
});

// div2 컨트롤러
const div2 = document.querySelector(".div2");
const div2Display = document.querySelectorAll("#div2_display");
const div2Margin = document.querySelector("#div2_margin");

div2Display.forEach((display) => {
  display.addEventListener("click", (e) => {
    div2.style.display = e.target.value;
  });
});

div2Margin.addEventListener("change", (e) => {
  div2.style.margin = e.target.value;
});

// p 요소 컨트롤러
const divContents = document.querySelector(".div_contents");
const pMargin = document.querySelectorAll("#p_margin");

pMargin.forEach((p) => {
  const pEle = divContents.querySelectorAll("p");

  p.addEventListener("change", (e) => {
    pEle.forEach((ele) => {
      ele.style.margin = e.target.value;
    });
  });
});
