const countersEl = document.querySelectorAll('.counter');

countersEl.forEach(counterEl =>{
    counterEl.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        const dataceil = counterEl.getAttribute("data-ceil");
        const increment = dataceil / 15;
        currentNum = Math.ceil(currentNum + increment);
        
        if(currentNum < dataceil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 50)
        }else{
            counterEl.innerText = dataceil
        }
    }
})