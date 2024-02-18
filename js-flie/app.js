const allSeatsBtn = document.getElementsByClassName("seat-add");

let count = 0;
for (const singleSeatBtn of allSeatsBtn) {
  singleSeatBtn.addEventListener("click", function (event) {
    const seatEl = event.target;
    seatEl.classList.remove("bg-[#F7F8F8]");
    seatEl.classList.add("bg-[#1DD100]");

    const seatLeftEl = getElementTextById("seat-left");
    const leftValue = seatLeftEl - 1;
    count = count + 1;

    // const seatNumber = event.target.innerText;
    // const economoyEl = getElementTextById("economoy");
    // const seatPriceEl = getElementTextById("seat-price");
    // const convertedSeatPriceEl = parseInt(seatPriceEl);
    // console.log(seatNumber, economoyEl, convertedSeatPriceEl);

    setInnerText("seat-count", count);
    setInnerText("seat-left", parseInt(leftValue));
  });
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
