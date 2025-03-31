document.addEventListener("DOMContentLoaded", () => {
    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");
    const totalGuests = document.getElementById("total-guests");
    const totalPrice = document.getElementById("total-price");
    
    const prices = {
        adult: 100,
        child: 50,
        baby: 0
    };

    plusButtons.forEach(button => {
        button.addEventListener("click", () => updateCount(button, 1));
    });

    minusButtons.forEach(button => {
        button.addEventListener("click", () => updateCount(button, -1));
    });

    function updateCount(button, change) {
        const guestType = button.parentElement.querySelector(".count").dataset.type;
        let countElement = button.parentElement.querySelector(".count");
        let count = parseInt(countElement.innerText);

        if (count + change >= 0) {
            count += change;
            countElement.innerText = count;
            updateTotal();
        }
    }

    function updateTotal() {
        let adults = parseInt(document.querySelector(".count[data-type='adult']").innerText);
        let children = parseInt(document.querySelector(".count[data-type='child']").innerText);
        let babies = parseInt(document.querySelector(".count[data-type='baby']").innerText);

        let total = (adults * prices.adult) + (children * prices.child) + (babies * prices.baby);
        totalPrice.innerText = "USD " + total;
        totalGuests.innerText = adults + children + babies;
    }
});
