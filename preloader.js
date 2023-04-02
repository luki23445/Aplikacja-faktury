window.onload = function () {
  document.getElementById("preloader").style.display = "block";
  document.getElementById("preloader").style.opacity = "1";
  document.getElementById("lewy").style.width = "50%";
  document.getElementById("prawy").style.width = "50%";

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  document.getElementsByTagName('html')[0].style.overflow = "hidden";

  const element = document.getElementById("hr");
  let width = 0;
  let value = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
      console.log("KOŃ")
      setTimeout(() => {
        document.getElementById("preloader").style.opacity = "0";
        document.getElementById("lewy").style.width = "0%";
        document.getElementById("prawy").style.width = "0%";
        document.getElementById("preloader").style.display = "none";
        setTimeout(() => {
          document.getElementsByTagName('html')[0].style.overflow = "scroll";
        }, 300);
      }, 1000);
    } else {
      width++;
      element.style.width = width + '%';

      value++;
      var proc = document.getElementById("proc");
      proc.innerHTML = value + "%";
    }

  }
}
