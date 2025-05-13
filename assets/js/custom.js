jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("body").addClass("header-fixed");
    } else {
      $("body").removeClass("header-fixed");
    }
  });

  $(".nav-link").click(function (e) {
    e.preventDefault();
    $(".navbar-menu li").removeClass("active header-fixed");
    $(this).parent().addClass("active header-fixed");
    var tab = $(this).attr("href").substring(1);
    $("body,html").animate(
      {
        scrollTop: $("#" + tab).offset().top - 90,
      },
      500
    );
  });

  $(".mobile-toggle").click(function () {
    $("body").toggleClass("mobile-open");
  });

  $(".navbar-menu a").click(function () {
    $("body").removeClass("mobile-open");
  });

  $('input[name="r1"]').change(function () {
    if ($("#patient").prop("checked")) {
      $(".phone-div").hide();
      $(".company-div").hide();
      $("#phone").required = false;
    } else {
      $(".phone-div").show();
      $(".company-div").show();
      $("#phone").required = true;
    }
  });

  $("#send-inquiry").click(function () {
    $("#form1").validate({
      rules: {
        first_name: "required",
        last_name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        first_name: "First Name is required",
        last_name: "Last Name is required",
        phone: "Phone is required",
        email: "Enter a valid email",
      },
    });
  });

  $("#form1").submit(function (event) {
    if ($("#form1").valid()) {
      var request_type = "";

      if ($("#patient").prop("checked")) {
        request_type = "Patient";
      } else {
        request_type = "Manufacturer";
      }

      var formData = {
        first_name: $("#first_name").val(),
        last_name: $("#last_name").val(),
        email_from: $("#email").val(),
        phone: $("#phone").val(),
        request_type: request_type,
        partner_name: $("#company_name").val(),
      };

      $.ajax({
        type: "POST",
        url: "https://erp.paynela.com/website-new-inquiry",
        data: JSON.stringify(formData),
        dataType: "json",
        contentType: "application/json",
        crossDomain: true,
        success: function (respnose) {
          $("#form1")[0].reset();
          if (respnose.result.status == "error") {
            alert(respnose.result.message);
          } else {
            alert("Thank you for your inquiry. We will get back to you soon.");
          }
        },
        error: function (error) {
          alert("Something went wrong. Please try again later.");
        },
      });

      event.preventDefault();
    }
    else{
      alert("Please fill all the required fields.");
    }
  });
  
  $('.testimonials').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  });
  
});
