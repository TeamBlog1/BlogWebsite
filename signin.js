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
        let value = $(this).val().trim();

        if (value === "") {
            valid = false;
            showError($(this), "This field is required");
        }

        // Email format check
        if ($(this).attr("type") === "email" && value !== "") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                valid = false;
                showError($(this), "Please enter a valid email");
            }
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

    // Required fields and email check
    $(this).find("input").each(function () {
        let value = $(this).val().trim();

        if (value === "") {
            valid = false;
            showError($(this), "This field is required");
        }

        // Email format check
        if ($(this).attr("type") === "email" && value !== "") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                valid = false;
                showError($(this), "Please enter a valid email");
            }
        }
    });

    // Password length check
    if (password.val().trim() !== "" && password.val().length < 8) {
        valid = false;
        showError(password, "Password must be at least 8 characters");
    }

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
