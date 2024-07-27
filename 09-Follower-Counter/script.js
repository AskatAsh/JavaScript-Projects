const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.textContent = '0';
    const target = +counter.getAttribute('data-target');
    console.log(target);
    let count = 0;
    function incrementCounter(){
        if(count < target){
            // count++;
            count += 10;
            counter.innerText = count;
            // setInterval(incrementCounter, 100);
        }else{
            counter.innerText = target;
        }
    }
    setInterval(incrementCounter, 1);
    // incrementCounter();
})