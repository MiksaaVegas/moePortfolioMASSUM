$(document).ready(function () {
  $(".roleContainer img").click(function () {
    $(".roleContainer img")
    $(".rockRight", ".paperRight", "scissorsRight").css("display", "block");
    function displayOpponentRoleHandler() {
      $("footer").css("margin-top", "0");
      setTimeout(function () {
        if (opponentNum === rockNum) {
          $(".rockRight").css("display", "block");
          $(".paperRight").css("display", "none");
          $(".scissorsRight").css("display", "none");
        } else if (opponentNum === paperNum) {
          $(".paperRight").css("display", "block");
          $(".rockRight").css("display", "none");
          $(".scissorsRight").css("display", "none");
        } else if (opponentNum === scissorsNum) {
          $(".scissorsRight").css("display", "block");
          $(".paperRight").css("display", "none");
          $(".rockRight").css("display", "none");
        }
      }, 5830);
    }
    function opponentIsChoosing() {
      setTimeout(function () {
        $(".rockRight").css("display", "block");
        $(".paperRight").css("display", "none");
        $(".scissorsRight").css("display", "none");
        setTimeout(function () {
          $(".rockRight").css("display", "none");
          $(".paperRight").css("display", "block");
          $(".scissorsRight").css("display", "none");
          setTimeout(function () {
            $(".rockRight").css("display", "none");
            $(".paperRight").css("display", "none");
            $(".scissorsRight").css("display", "block");
            setTimeout(function () {
              $(".rockRight").css("display", "block");
              $(".paperRight").css("display", "none");
              $(".scissorsRight").css("display", "none");
              setTimeout(function () {
                $(".rockRight").css("display", "none");
                $(".paperRight").css("display", "block");
                $(".scissorsRight").css("display", "none");
                setTimeout(function () {
                  $(".rockRight").css("display", "none");
                  $(".paperRight").css("display", "none");
                  $(".scissorsRight").css("display", "block");
                  setTimeout(function () {
                    $(".rockRight").css("display", "block");
                    $(".paperRight").css("display", "none");
                    $(".scissorsRight").css("display", "none");
                    setTimeout(function () {
                      $(".rockRight").css("display", "none");
                      $(".paperRight").css("display", "block");
                      $(".scissorsRight").css("display", "none");
                      setTimeout(function () {
                        $(".rockRight").css("display", "none");
                        $(".paperRight").css("display", "none");
                        $(".scissorsRight").css("display", "block");
                      }, 740);
                    }, 650);
                  }, 600);
                }, 500);
              }, 400);
            }, 400);
          }, 350);
        }, 400);
      }, 400);
    }
    if (userNum === rockNum) {
      $(".rockLeft").css("display", "block");
      $(".paperLeft").css("display", "none");
      $(".scissorsLeft").css("display", "none");
      opponentIsChoosing();
      displayOpponentRoleHandler();
    } else if (userNum === paperNum) {
      $(".rockLeft").css("display", "none");
      $(".paperLeft").css("display", "block");
      $(".scissorsLeft").css("display", "none");
      opponentIsChoosing();
      displayOpponentRoleHandler();
    } else if (userNum === scissorsNum) {
      $(".rockLeft").css("display", "none");
      $(".paperLeft").css("display", "none");
      $(".scissorsLeft").css("display", "block");
      opponentIsChoosing();
      displayOpponentRoleHandler();
    }
  });
});
