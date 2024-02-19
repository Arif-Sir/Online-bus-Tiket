

const seats = document.querySelectorAll('.btn');
let countBtns = 0;
// ------ foe 4 seat
for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (countBtns >= 4) {
            alert('You cannot select more than 4 seats.');
            return;
        }
        countBtns++;
        // ------- clicked color
        seat.classList.remove('bg-gray-100');
        seat.classList.add('bg-green-400');

        // === ticket Details
        const booking=document.getElementById('tDetail');
        let div=document.createElement('div');
        let list1=document.createElement('li');
        list1.innerText=seat.innerText;
        let list2=document.createElement('li');
        list2.innerText="Economy";
        let list3=document.createElement('li');
        list3.innerText="550";

        div.appendChild(list1);
        div.appendChild(list2);
        div.appendChild(list3);

        div.classList.add('flex','justify-between');

        booking.appendChild(div);

        // ==== seat sell
        const seat_sell=document.getElementById('seat-sell');
        const countSell=parseInt(seat_sell.innerText);
        const counted=countSell + 1;
        seat_sell.innerText=counted;

        // -------seat reamin
        const seat_reamin=document.getElementById('sReamain');
        const countReamin=parseInt(seat_reamin.innerText);
        const less=countReamin - 1;
        seat_reamin.innerText=less;
// ===== totall price
        const totallPrice=document.getElementById('total-price');
        const countTotall=parseInt(totallPrice.innerText);
        const Totall=countTotall + 550;
        totallPrice.innerText=Totall;

        // ------ grand price
        const gPrice=document.getElementById('grand-price');
        
        gPrice.innerText=Totall
// -------next btn
        const phnNumber=document.getElementById('ph-number');
        const nextBtn=document.getElementById('next-btn');
        phnNumber.addEventListener('keyup',function(){
            nextBtn.removeAttribute('disabled');
            nextBtn.classList.remove('bg-gray-400');
            nextBtn.classList.add('bg-green-400');
        })
    });
}

// -------cupon------

const cupponBtn=document.getElementById('coupon-apply-btn');
        let cuponText=document.getElementById('coupon');
        cuponText.addEventListener('keyup',function(){
            cupponBtn.removeAttribute('disabled');
            cupponBtn.classList.remove('bg-gray-400');
            cupponBtn.classList.add('bg-green-400');

        } )

        cupponBtn.addEventListener('click',function(){
            let cuponText=document.getElementById('coupon');
            const gPrice=document.getElementById('grand-price');
            const totallPrice=document.getElementById('total-price');

            if (cuponText.value==="Couple 20"){
                const totallPrice=document.getElementById('total-price');
        const countTotall=parseInt(totallPrice.innerText);
        const Totall=countTotall - countTotall*0.20;
        gPrice.innerText=Totall;
            }

            else if(cuponText.value==="NEW15"){
                const totallPrice=document.getElementById('total-price');
        const countTotall=parseInt(totallPrice.innerText);
        const Totall=countTotall - countTotall*0.15;
        gPrice.innerText=Totall;
            }

            else{
                return alert('Invalid Cupon Code');
            }

        })
// -----modal
const nextBtn=document.getElementById('next-btn');
const congrates=document.getElementById('congrates');
nextBtn.addEventListener('click',function(){
    congrates.classList.remove('hidden');
    congrates.scrollIntoView();
})
// ------------------------------------------Continue
document.getElementById('continue').addEventListener('click',function(){
    document.getElementById('congrates').classList.add('hidden');
})