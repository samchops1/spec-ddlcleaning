(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.name.value || "").trim();
      var email = (form.email.value || "").trim();
      var subject = (form.subject.value || "").trim();
      var message = (form.message.value || "").trim();
      var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
      var href = "mailto:luzelena@ddlcleaningservices.com"
        + "?subject=" + encodeURIComponent(subject || "Quote — DDL Cleaning Services")
        + "&body=" + encodeURIComponent(body);
      window.location.href = href;
    });
  }
})();
