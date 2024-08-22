// 01_07.html's js
const aLinkBtns = document.querySelectorAll("[name='target']");
const H_Link = document.querySelector(".H_Link");

const result_target = document.querySelector(".result_target > a");
const href_link = document.querySelector("#href_link");

aLinkBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    H_Link.target = e.target.id;
  });
});
// 01_07.html's js end

href_link.addEventListener("change", (e) => {
  result_target.href = e.target.value;
});
