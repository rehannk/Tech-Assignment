$(document).ready(function () {

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    }
    else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 300) {
      $(".slide-left").addClass("in-view");
    }
    else {
      $(".slide-left").removeClass("in-view");
    }
  });

  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });

  if ($("#carousButton span:first").length) {
    $("#carousButton span:first").addClass("activated");
    $(".maincont div:first").show();
  }

  setInterval(function () {
    $("#carousButton span").each(function () {
      if ($("#" + $(this).attr("id")).hasClass("dot activated")) {
        let indexinterval = $(this).attr("id").substr(4);
        if (
          $("#ctrl" + indexinterval)
            .next()
            .is("span")
        ) {
          $("#ctrl" + indexinterval)
            .next()
            .trigger("click");
        } else {
          $("#carousButton span:first").trigger("click");
        }
        return false;
      }
    });
  }, 5000);

  $(document).on("click", ".dot", function () {
    let index = this.id.substr(4);

    $(".box").hide();
    $(".dot").removeClass("activated");
    $(".dot").css("background-color", "");

    $("#box" + index).show();
    $("#" + this.id).addClass("activated");
    $("#" + this.id).css("background-color", "black");
  });
});
