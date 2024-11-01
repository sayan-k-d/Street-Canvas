let underline = document.getElementsByClassName("underline");
console.log(window.location.pathname);

if (
  window.location.pathname === "/work" ||
  window.location.pathname === "/work.html"
) {
  document.querySelector(".work").classList.add("current-link");
} else if (
  window.location.pathname === "/about" ||
  window.location.pathname === "/about.html"
)
  document.querySelector(".about").classList.add("current-link");
else if (
  window.location.pathname === "/bookings" ||
  window.location.pathname === "/bookings.html"
)
  document.querySelector(".booking").classList.add("current-link");

for (let i = 0; i < underline.length; i++)
  underline[i].classList.add("underline-animate");

function changeBg(bg = "../assets/IMG_0669.JPG") {
  document.querySelector(".main-image").style.backgroundImage = `url(${bg})`;
  document.querySelector(".main-image").style.transition =
    "background-image 0.5s linear";
}

//bookings
function getAlert() {
  Swal.fire({
    title: "Booking Confirmation",
    text: "Appoinment Booked Successfully!",
    icon: "success",
  });
}
