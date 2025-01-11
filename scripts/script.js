// seat btn selection
const seats = document.getElementsByClassName('btn-seat');
let clickCount = 0;
let totalPrice = 0;
// getelementbyid
function element(elementId) {
    const el = document.getElementById(elementId);
    return el;
}


for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (seat.classList.contains('bg-[#1dd100]')) {
            seat.classList.remove('bg-[#1dd100]');
            seat.classList.remove('text-white');
            clickCount--;
        } else if (clickCount < 4) {
            seat.classList.add('bg-[#1dd100]');
            seat.classList.add('text-white');
            clickCount++;
        } else {
            alert('You can only select up to 4 seats.');
        }

        const seatCountElement = document.getElementById('seat-count');
        const defaultSeatCount = 40;
        const seatCount = defaultSeatCount - clickCount;
        seatCountElement.innerText = seatCount;
        const seatNum = document.getElementById('seat-num');
        seatNum.innerText = clickCount;
        seatNum.classList.remove('hidden');
        const table = document.getElementById('table')
        // c1 economy 550tk
        const seatId = seat.innerText;
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        cell1.innerText = seatId;
        cell2.innerText = 'Economy';
        cell3.innerText = '550tk';
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        // deselect 
        if (seat.classList.contains('bg-[#1dd100]')) {
            table.appendChild(row);
        } else {
            const rows = table.getElementsByTagName('tr');
            for (const r of rows) {
                if (r.firstChild.innerText === seatId) {
                    table.removeChild(r);
                    break;
                }
            }
        }

        if (clickCount === 0) {
            seatNum.classList.add('hidden');
            seatId.innerText = '';
        }

        const totalPriceElement = document.getElementById('total');
        let totalPriceInt = 550; // fixed price for economy class

        if (seat.classList.contains('bg-[#1dd100]')) {
            totalPrice += totalPriceInt;
        }
        else {
            totalPrice -= totalPriceInt;
        }
        totalPriceElement.innerText = totalPrice;
        // enable coupon button
        // enable coupon button
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPrice;
    });
}
const couBtn = document.getElementById('coupon-btn');
const coupInput = document.getElementById('coupon-input');
const grandTotal = document.getElementById('grand-total');

grandTotal.innerText = totalPrice;
coupInput.addEventListener('input', function () {
    if (coupInput.value === 'NEW15' || coupInput.value === 'COUPLE20') {
        couBtn.disabled = false;
    } else {
        couBtn.disabled = true;
    }
});


couBtn.addEventListener('click', function () {
    if (coupInput.value === 'NEW15') {
        const dis15 = 15 / 100;
        const discount = totalPrice * dis15;
        const discountedPrice = totalPrice - discount;
        grandTotal.innerText = discountedPrice;
    }
    else if (coupInput.value === 'COUPLE20') {
        const dis20 = 20 / 100;
        const discount2 = totalPrice * dis20;
        const disPrice2 = totalPrice - discount2;
        grandTotal.innerText = disPrice2;
    }
});
const numberInput = document.getElementById('pas-num');
const nextBtn = document.getElementById('next-btn');


numberInput.addEventListener('input', function () {
    if (numberInput.value.trim() !== '' && !isNaN(numberInput.value) && clickCount !== 0) {
        nextBtn.disabled = false;
        nextBtn.addEventListener('click', function () {
            const head = element('head');
            const main = element('main');
            const foot = element('foot');
            head.classList.add('hidden');
            main.classList.add('hidden');
            foot.classList.add('hidden');

            const contSec = element('cont-section');
            contSec.classList.remove('hidden');
        })
    } else {
        nextBtn.disabled = true;
    }
});
// continue button onclick function
function btnOnclick(){
    const head = element('head');
    const main = element('main');
    const foot = element('foot');
    head.classList.remove('hidden');
    main.classList.remove('hidden');
    foot.classList.remove('hidden');

    const contSec = element('cont-section');
    contSec.classList.add('hidden');
}


