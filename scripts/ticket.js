 
 const allBtn = document.getElementsByClassName('seat');
    
 for (const btn of allBtn) {
    // console.log(btn);
    btn.addEventListener('click', function(e){

        const selectSeatNumber = getTextElementValue('seat-select');
        console.log(selectSeatNumber);

        if(selectSeatNumber >= 4){
            return alert();
        }
        const btnId = btn.innerText;
        setBackgroundColorById(btnId);
        
        // append
        const seatClassPrice = document.getElementById('seat-class-price');

        const tr = document.createElement('tr')

        const td1 = document.createElement('td');
        td1.innerText = btnId;

        const td2 = document.createElement('td');
        td2.innerText = "Economoy";

        const td3 = document.createElement('td');
        td3.innerText = 550;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        seatClassPrice.append(tr);

         // seats left
         const currentSeats = getTextElementValue('seats-left');
         // console.log(currentSeats);
         const updateSeats = currentSeats - 1;
        //  console.log(updateSeats);
         setTextElementValue('seats-left', updateSeats);
 
         // seat select
         const currentSelect = getTextElementValue('seat-select');
         const updateSelect = currentSelect + 1;
         setTextElementValue('seat-select', updateSelect);

        // array check
        
              

       

    })
    
 }