const allSeatsBtn = document.getElementsByClassName("seat-add");

let count = 0;
// let seatLeftCount = 1;
for (const singleSeatBtn of allSeatsBtn) {
  singleSeatBtn.addEventListener("click", function (e) {
    const seatLeftEl = document.getElementById("seat-left").innerText;
    const convertedSeatLeft = parseInt(seatLeftEl);
    const leftValue = convertedSeatLeft - 1;

    count = count + 1;
    setInnerText("seat-count", count);
    setInnerText("seat-left", leftValue);
  });
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
