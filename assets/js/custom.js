window.addEventListener("load", init);

function init(event) {
  console.log(event);
  changeGrades();
  fillProgressBar();
}

function changeGrades() {
  const getGrades = document.querySelectorAll(".grades");
  console.log(getGrades)

  getGrades.forEach(function (element, index, arr) {
    if (element.innerHTML === "-") {
      element.innerHTML = null;
    }
  });
}

function fillProgressBar() {
    let totalEC = 0;
    const getEC = document.querySelectorAll('.ec');
    console.log(getEC)
}