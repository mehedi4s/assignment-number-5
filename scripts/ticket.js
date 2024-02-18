const allBtn = document.getElementsByClassName("seat");

for (const btn of allBtn) {
  // console.log(btn);
  btn.addEventListener("click", function (e) {
    const selectSeatNumber = getTextElementValue("seat-select");

    if (selectSeatNumber > 3) {
      return alert();
    }

    // coupon

    const btnId = btn.innerText;
    setBackgroundColorById(btnId);

    // append
    const seatClassPrice = document.getElementById("seat-class-price");

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = btnId;

    const td2 = document.createElement("td");
    td2.innerText = "Economoy";

    const td3 = document.createElement("td");
    td3.innerText = 550;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    seatClassPrice.append(tr);

    // total cost
    const perTicketPrice = getTextElementValue("ticket-price");
    const totalCostPrice = getTextElementValue("total-cost");
    const total = totalCostPrice + perTicketPrice;
    setTextElementValue("total-cost", total);

    // grand total
    const grandTotalPrice = getTextElementValue("total-cost");

    setTextElementValue("grand-total", grandTotalPrice);

    // input text

    // seats left
    const currentSeats = getTextElementValue("seats-left");

    const updateSeats = currentSeats - 1;

    setTextElementValue("seats-left", updateSeats);

    // seat select
    const currentSelect = getTextElementValue("seat-select");
    const updateSelect = currentSelect + 1;
    setTextElementValue("seat-select", updateSelect);

    //  coupon

    if (currentSeats == 37) {
      const grandTotalPrice = getTextElementValue("total-cost");

      document
        .getElementById("apply-coupon")
        .addEventListener("click", function (e) {
          const couponText = document.getElementById("coupon-text").value;
          if (couponText == "NEW15") {

            const discountPrice =
              grandTotalPrice - (grandTotalPrice * 15) / 100;
            setTextElementValue("grand-total", discountPrice);
            
            const forHidden = document.getElementById('apply-coupon').parentNode.classList.add("hidden");

          } else if (couponText == "Couple 20") {

            const discountPrice =
              grandTotalPrice - (grandTotalPrice * 20) / 100;
            setTextElementValue("grand-total", discountPrice);
            const forHidden = document.getElementById('apply-coupon').parentNode.classList.add("hidden");
          }
        });
    }
  });
}
