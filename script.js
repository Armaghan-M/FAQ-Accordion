let $ = document;

let allAcc = $.querySelectorAll("button");

allAcc.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.target.classList.toggle("bold");
    event.target.nextElementSibling.classList.toggle("active");
  });
});
