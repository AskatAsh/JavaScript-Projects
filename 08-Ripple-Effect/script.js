const btn = document.querySelector('.button');

btn.addEventListener('click', function(event){
    console.log("Event", event.clientX, event.clientY);
    const rect = btn.getBoundingClientRect();
    console.log(rect);
    let ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.height = ripple.style.width = `${rect.width}px`;
    ripple.style.left = `${event.clientX - rect.left - rect.width/2}px`;
    ripple.style.top = `${event.clientY - rect.top - rect.width/2}px`;
    btn.appendChild(ripple);
})