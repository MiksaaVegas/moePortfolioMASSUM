const inputName = document.querySelector(".inputName")
const email = document.querySelector(".inputEmail")
const message = document.querySelector(".inputMessage")
function sendMsg() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    if (inputName.value.length > 2) {
      if (message.value.length > 0) {
        console.log("mejlot e vo red");
        email.style.border = "5px solid #fff"
        inputName.style.border = "5px solid #fff"
        message.style.border = "5px solid #fff"
        javascript: location.href =
          "mailto:kuzmanoskimihail9@gmail.com?subject=Мејл од клиент " +
          inputName.value +
          "&body=" +
          message.value +
          " Мејл за контакт: " +
          email.value
      } else {
        message.style.border = "5px solid #ff0000"
      }
      inputName.style.border = "5px solid #fff"
    } else {
      inputName.style.border = "5px solid #ff0000"
    }
    email.style.border = "5px solid #fff"
  } else {
    console.log("NEVALIDEN MEJL")
    email.style.border = "5px solid #ff0000"
  }
}
const swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
})
const tween = KUTE.fromTo(
  "#path1",
  { path: "#path1" },
  { path: "#path2" },
  { repeat: 999, duration: 2000, yoyo: true }
)
const tween2 = KUTE.fromTo(
  "#path3",
  { path: "#path3" },
  { path: "#path4" },
  { repeat: 999, duration: 1700, yoyo: true }
)
const tween3 = KUTE.fromTo(
  "#path5",
  { path: "#path5" },
  { path: "#path6" },
  { repeat: 999, duration: 1500, yoyo: true }
)
const tween4 = KUTE.fromTo(
  "#path7",
  { path: "#path7" },
  { path: "#path8" },
  { repeat: 999, duration: 1800, yoyo: true }
)
const tween5 = KUTE.fromTo(
  "#path9",
  { path: "#path9" },
  { path: "#path10" },
  { repeat: 999, duration: 1800, yoyo: true }
)
tween.start()
tween2.start()
tween3.start()
tween4.start()
tween5.start()