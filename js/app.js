window.addEventListener("scroll", () => {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercentage + "%";
  });