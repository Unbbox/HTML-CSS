// 01_04.html's js
const radio_btns = document.querySelectorAll("[name='radio_btns']");
const ordered_list = document.querySelector("ol");
const ordered_start = document.querySelector("#start_num");

radio_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    ordered_list.type = e.target.value;
  });
});

ordered_start.addEventListener("change", (e) => {
  // console.log(e.target.value);
  ordered_list.start = e.target.value;
});
// 01_04.html's js end
