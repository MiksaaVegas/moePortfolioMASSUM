let rockNum = 1;
let paperNum = 2;
let scissorsNum = 3;
let userRole, opponentRole, userNum, opponentNum;
let result;
function userSelected(role, roleNum) {
  console.log("User choose: " + role + " With number: " + roleNum);
  userRole = role;
  userNum = roleNum;
  selectRandRole();
  setTimeout(function () {
    window.scrollBy(0, 600);
  }, 50);
}
function selectRandRole() {
  opponentNum = Math.floor(Math.random() * 3 + 1);
  if (opponentNum === rockNum) {
    opponentRole = "Rock";
  } else if (opponentNum === paperNum) {
    opponentRole = "Paper";
  } else if (opponentNum === scissorsNum) {
    opponentRole = "Scissors";
  }
  console.log(
    "Opponent choose: " + opponentRole + " With number: " + opponentNum
  );
  compareRoles();
}
function compareRoles() {
  setTimeout(function () {
    if (userNum === rockNum) {
      //AKO JAS SUM ODBRAL KAMEN
      if (opponentNum === rockNum) {
        console.log("KAMEN VS KAMEN E NERESHENO");
        result = "Draw";
        $(".resultDraw").css("display", "block").addClass("animate__animated animate__fadeIn");
        $(".resultWin").css("display", "none");
        $(".resultLose").css("display", "none");
      }
      if (opponentNum === paperNum) {
        console.log("KAMEN VS LIST E POBEDA ZA LISTOT");
        result = "Loss";
        $(".resultLose").css("display", "block").addClass("animate__animated animate__fadeIn");
        $(".resultDraw").css("display", "none");
        $(".resultWin").css("display", "none");
      }
      if (opponentNum === scissorsNum) {
        console.log("KAMEN VS NOZICKI E POBEDA ZA KAMENOT");
        result = "Win";
        $(".resultWin").css("display", "block").addClass("animate__animated animate__fadeIn");
        $(".resultLose").css("display", "none");
        $(".resultDraw").css("display", "none");
      }
    }
    if (userNum === paperNum) {
      //AKO JAS SUM ODBRAL LIST
      if (opponentNum === rockNum) {
        console.log("LIST VS KAMEN E POBEDA ZA LISTOT");
        result = "Win";
        $(".resultWin").css("display", "block").addClass("animate__animated animate__fadeIn");
        $(".resultLose").css("display", "none");
        $(".resultDraw").css("display", "none");
      }
      if (opponentNum === paperNum) {
        console.log("LIST VS LIST E NERESHENO");
        result = "Draw";
        $(".resultDraw").css("display", "block").addClass("animate__animated animate__fadeIn");
        $(".resultWin").css("display", "none");
        $(".resultLose").css("display", "none");
      }
      if (opponentNum === scissorsNum) {
        console.log("LIST VS NOZICKI E POBEDA ZA NOZICKI");
        result = "Loss";
        $(".resultLose").css("display", "block").addClass("animate__animated animate__fadeIn");
        $(".resultDraw").css("display", "none");
        $(".resultWin").css("display", "none");
      }
    }
    if (userNum === scissorsNum) {
      //AKO JAS SUM ODBRAL NOZICKI
      if (opponentNum === rockNum) {
        console.log("NOZICKI VS KAMEN E POBEDA ZA KAMEN");
        result = "Loss";
        $(".resultLose").css("display", "block");
        $(".resultDraw").css("display", "none");
        $(".resultWin").css("display", "none");
      }
      if (opponentNum === paperNum) {
        console.log("NOZICKI VS LIST E POBEDA ZA NOZICKI");
        result = "Win";
        $(".resultWin").css("display", "block");
        $(".resultLose").css("display", "none");
        $(".resultDraw").css("display", "none");
      }
      if (opponentNum === scissorsNum) {
        console.log("NOZICKI VS NOZICKI E NERESHENO");
        result = "Draw";
        $(".resultDraw").css("display", "block");
        $(".resultWin").css("display", "none");
        $(".resultLose").css("display", "none");
      }
    }
    window.scrollBy(0, 200);
  }, 6000);
  console.log(result);
}
