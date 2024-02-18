const allSeatsBtn = document.getElementsByClassName("seat-add");

let count = 0;
let totalPrice = 0;
for (const singleSeatBtn of allSeatsBtn) {
  singleSeatBtn.addEventListener("click", function (event) {
    if (count >= 4) {
      return alert("You have already selected four seat. you can't add more");
    }

    const seatEl = event.target;
    seatEl.classList.remove("bg-[#F7F8F8]");
    seatEl.classList.add("bg-[#1DD100]");
    seatEl.classList.add("text-white");

    const seatLeftEl = getElementTextById("seat-left");
    const leftValue = seatLeftEl - 1;
    count = count + 1;

    const seatNumber = event.target.innerText;

    const selectContainer = document.getElementById("select-container");
    const li = document.createElement("li");
    li.classList.add("flex");
    li.classList.add("justify-between");
    li.classList.add("mb-2");

    const p = document.createElement("p");
    p.innerText = seatNumber;
    const p2 = document.createElement("p");
    p2.innerText = "Economoy";
    const p3 = document.createElement("p");
    p3.innerText = 550;

    const price = p3.innerText;
    const priceConvert = parseInt(price);

    totalPrice = totalPrice + priceConvert;
    setInnerText("total-price", totalPrice);

    const gTotalEl = (document.getElementById("grand-total").innerText =
      totalPrice);

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectContainer.appendChild(li);

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

function grandTotal() {
  const applyBtnEl = document.getElementById("apply-btn");
  const couponInput = document.getElementById("coupon-input").value;

  const gradTotalCost = getElementTextById("grand-total");
  const convertGrandTotal = parseInt(gradTotalCost);

  if (couponInput === "NEW15") {
    const fiftyPercentDiscount = (convertGrandTotal * 15) / 100;
    const discountedAmount = convertGrandTotal - fiftyPercentDiscount;
    setInnerText("grand-total", discountedAmount);
    applyBtnEl.setAttribute("disabled", true);
  } else if (couponInput === "Couple 20") {
    const towentyPercentDiscount = (convertGrandTotal * 20) / 100;
    const discountedAmount = convertGrandTotal - towentyPercentDiscount;
    setInnerText("grand-total", discountedAmount);
    applyBtnEl.setAttribute("disabled", true);
  } else {
    return alert("Your coupon code is invalid. please try another coupon");
  }
}
