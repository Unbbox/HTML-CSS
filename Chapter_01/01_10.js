const progress = document.getElementById("progressBar");
const startBtn = document.getElementById("prgStartBtn");

startBtn.addEventListener("click", (e) => {
  console.log("prog: ", progress);
  for (let i = 0; i < 1000; i++) {
    progress.value += 0.1;
  }
  //   progress.value = 80;
});
