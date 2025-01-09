// seat btn selection
const seats = document.getElementsByClassName('btn-seat');
let clickCount = 0;

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
        console.log(clickCount);
        const seatCountElement = document.getElementById('seat-count');
        const defaultSeatCount = 40;
        const seatCount = defaultSeatCount - clickCount;
        seatCountElement.innerText = seatCount;
        const seatNum = document.getElementById('seat-num');
        seatNum.innerText = clickCount;
        seatNum.classList.remove('hidden');
        if(clickCount ===0){
            seatNum.classList.add('hidden');
        }
    });
}
