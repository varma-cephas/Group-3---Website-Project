setTimeout(()=>{
   const hamburger_btn = document.getElementById("hamburger_btn");
    const hamburger_x_btn = document.getElementById("hamburger_x_btn");
    const mobile_nav = document.getElementById("mobile_nav");
    const hero_section = document.getElementById("hero");
    const nav_header = document.getElementById("nav");

    hamburger_btn.addEventListener("click", ()=>{
        hamburger_btn.style.display="none";
        hamburger_x_btn.style.display="block";
        mobile_nav.style.display="block";
        nav_header.style.backgroundColor="white";
        hero_section.style.display="none"
    })
    
    hamburger_x_btn.addEventListener("click", ()=>{
        hamburger_btn.style.display="block";
        hamburger_x_btn.style.display="none";
        mobile_nav.style.display="none";
        nav_header.style.backgroundColor="transparent";
        hero_section.style.display="block";
    })

},700)
