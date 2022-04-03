const inputName = document.querySelector(".inputName")
const email = document.querySelector(".inputEmail")
const message = document.querySelector(".inputMessage")
const modal = document.querySelector("dialog")
const openModalBtn = document.querySelector(".globe")
const closeModalBtn = document.querySelector(".dialogButton")
const backToTopBtn = document.querySelector(".backToTop")
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
const swiper = new Swiper(".swiperSertifikati", {
  effect: "cards",
  grabCursor: true,
})
const swiper2 = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraion: true,
  },
  grabCursor: true,
  mousewheel: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
})
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
tween3.start()
tween4.start()
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  })
}
function disableScrolling() {
  window.addEventListener('scroll', scrollToTop, true)
}
function enableScrolling() {
  window.removeEventListener('scroll', scrollToTop, true)
}
openModalBtn.addEventListener('click', function () {
  modal.showModal()
  disableScrolling()
})
closeModalBtn.addEventListener('click', function () {
  modal.close()
  enableScrolling()
})
document.addEventListener('scroll', function () {
  if(window.pageYOffset >= 1500){
    backToTopBtn.style.opacity = 1
  }
  else{
    backToTopBtn.style.opacity = 0
  }
})
backToTopBtn.addEventListener('click', function (){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})