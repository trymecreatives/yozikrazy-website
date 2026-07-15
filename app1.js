function showSection(section){

    document.getElementById("albums").style.display="none";

    document.getElementById("singles").style.display="none";

    document.getElementById(section).style.display="flex";

    let tabs=document.querySelectorAll(".music-tab");

    tabs.forEach(tab =>tab.classList.remove("active"));
    
    if(section ==="albums"){
        tabs[0].classList.add("active");
    }else{
           
        tabs[1].classList.add("active");
        }
    }
