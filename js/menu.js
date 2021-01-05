function changeClass() {
    document.querySelector(".header-navigation").classList.toggle('active');
}
  
document.querySelectorAll(".mobile-navigation").forEach(function(e) {
    e.addEventListener("click", changeClass);
});
  