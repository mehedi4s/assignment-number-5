 
 const allBtn = document.getElementsByClassName('seat');
    const arraySeat = [];
 for (const btn of allBtn) {
    // console.log(btn);
    btn.addEventListener('click', function(e){
        console.log('shahi click');
        // console.log(btn.innerText)
        const btnId = btn.innerText;
        setBackgroundColorById(btnId);
        arraySeat.push(btnId);
        console.log(arraySeat);

        // seats left
        const currentSeats = getTextElementValue('seats-left');
        // console.log(currentSeats);
        const updateSeats = currentSeats - 1;
        console.log(updateSeats);
        setTextElementValue('seats-left', updateSeats);

        // seat select
        const currentSelect = getTextElementValue('seat-select');
        const updateSelect = currentSelect + 1;
        setTextElementValue('seat-select', updateSelect);
    })
    
 }