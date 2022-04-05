const seFilterBtn = document.querySelector("#se")
const tamnejliFilterBtn = document.querySelector("#tamnejli")
const baneriFilterBtn = document.querySelector("#baneri")
const pozadiniFilterBtn = document.querySelector("#pozadini")
const tamnejliFilterContent = document.querySelector(".thumbRow")
const baneriFilterContent = document.querySelector(".bannerRow")
const pozadiniFilterContent = document.querySelector(".wallpaperRow")
seFilterBtn.addEventListener("click", function () {
  tamnejliFilterContent.style.display = 'flex';
  baneriFilterContent.style.display = 'flex';
  pozadiniFilterContent.style.display = 'flex';
})
tamnejliFilterBtn.addEventListener("click", function () {
  tamnejliFilterContent.style.display = 'flex';
  baneriFilterContent.style.display = 'none';
  pozadiniFilterContent.style.display = 'none';
})
baneriFilterBtn.addEventListener("click", function () {
  tamnejliFilterContent.style.display = 'none';
  baneriFilterContent.style.display = 'flex';
  pozadiniFilterContent.style.display = 'none';
})
pozadiniFilterBtn.addEventListener("click", function () {
  tamnejliFilterContent.style.display = 'none';
  baneriFilterContent.style.display = 'none';
  pozadiniFilterContent.style.display = 'flex';
})