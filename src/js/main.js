setTimeout(()=>{
    const hamburger_btn = document.getElementById("hamburger_btn");
    const hamburger_state = document.getElementById("hamburger-state");
    const hamburger_x_btn = document.getElementById("hamburger_x_btn");
    hamburger_btn.addEventListener("click", ()=>{
        hamburger_btn.style.display="none";
        hamburger_x_btn.style.display="block";
    })

    hamburger_x_btn.addEventListener("click", ()=>{
        hamburger_btn.style.display="block";
        hamburger_x_btn.style.display="none";
    })

},700)
