const inputName = document.querySelector(".inputName");
const email = document.querySelector(".inputEmail");
const message = document.querySelector(".inputMessage");
function sendMsg() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    if (inputName.value.length > 2) {
      if (message.value.length > 0) {
        console.log("mejlot e vo red");
        email.style.border = "5px solid #fff";
        inputName.style.border = "5px solid #fff";
        message.style.border = "5px solid #fff";
        javascript: location.href =
          "mailto:kuzmanoskimihail9@gmail.com?subject=Мејл од клиент " +
          inputName.value +
          "&body=" +
          message.value +
          " Мејл за контакт: " +
          email.value;
      } else {
        message.style.border = "5px solid #ff0000";
      }
      inputName.style.border = "5px solid #fff";
    } else {
      inputName.style.border = "5px solid #ff0000";
    }
    email.style.border = "5px solid #fff";
  } else {
    console.log("NEVALIDEN MEJL");
    email.style.border = "5px solid #ff0000";
  }
}
const swiper = new Swiper('.swiper', {
  effect: "cards",
  grabCursor: true,
})