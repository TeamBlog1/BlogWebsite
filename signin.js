$(document).ready(function () {

  // Toggle forms (login <-> signin)
  $(".link").click(function (e) {
    e.preventDefault();
    $(".forms").toggleClass("show-signin");
    $(".error-msg").slideUp();
  });

  // Show / hide password
  $(".eye-icon").click(function () {
    let input = $(this).siblings("input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).removeClass("bx-hide").addClass("bx-show");
    } else {
      input.attr("type", "password");
      $(this).removeClass("bx-show").addClass("bx-hide");
    }
  });

  // LOGIN validation
  $(".login form").submit(function (e) {
    e.preventDefault();
    let valid = true;

    $(this).find(".error-msg").remove();

    $(this).find("input").each(function () {
      if ($(this).val().trim() === "") {
        valid = false;
        showError($(this), "This field is required");
      }
    });

    if (valid) {
      alert("Login successful");
    }
  });

  // SIGN IN validation
  $(".signin form").submit(function (e) {
    e.preventDefault();
    let valid = true;

    $(this).find(".error-msg").remove();

    let password = $(this).find("input[type='password']").eq(0);
    let confirmPassword = $(this).find("input[type='password']").eq(1);

    // Required fields check
    $(this).find("input").each(function () {
      if ($(this).val().trim() === "") {
        valid = false;
        showError($(this), "This field is required");
      }
    });

    // Password match check
    if (
      password.val().trim() !== "" &&
      confirmPassword.val().trim() !== "" &&
      password.val() !== confirmPassword.val()
    ) {
      valid = false;
      showError(confirmPassword, "Passwords do not match");
    }

    if (valid) {
      alert("Sign in successful");
    }
  });

  // Function to show error with animation
  function showError(input, message) {
    let error = $("<small class='error-msg'>" + message + "</small>");
    error.css({
      color: "red",
      display: "none"
    });
    input.parent().append(error);
    error.fadeIn(400);
  }

});

