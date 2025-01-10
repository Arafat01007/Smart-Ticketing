// seat btn selection
const seats = document.getElementsByClassName('btn-seat');
let clickCount = 0;
let totalPrice = 0;


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
        let totalPriceText = cell3.innerText;
        let totalPriceInt = parseInt(totalPriceText.replace('tk', ''));
        totalPrice += totalPriceInt;
        totalPriceElement.innerText = totalPrice + 'tk';
        console.log(totalPrice);


    });
}
