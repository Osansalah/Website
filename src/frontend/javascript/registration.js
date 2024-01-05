const regbut = document.getElementById("regia");
const logia = document.getElementById("logia");
const log = document.getElementById("log");
const regist = document.getElementById("regist");

regbut.addEventListener("click", () => {
  log.style.display = "none";
  regist.style.display = "block";
});
logia.addEventListener("click", () => {
  log.style.display = "block";
  regist.style.display = "none";
});
