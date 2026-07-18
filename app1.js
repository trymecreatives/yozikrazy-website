function showSection(section){

    document.getElementById("albums").style.display="none";

    document.getElementById("singles").style.display="none";

    document.getElementById(section).style.display="flex";



    let tabs=document.querySelectorAll(".music-tab");

    tabs.forEach(tab => {tab.classList.remove("active");});
    
    if(section ==="albums"){
        tabs[0].classList.add("active");
    } else {
           
        tabs[1].classList.add("active");
        }

        showProducer("all",document.querySelector(".producer-tabs .tab"));
    }


    function showProducer(producer ,button) {

        document.querySelectorAll(".producer-tabs .tab").forEach(tab => {
            tab.classList.remove("active");
        });


          button.classList.add("active");

          let visibleSection;
          if
          (document.getElementById("albums").style.display !== "none") {
                    visibleSection = 
            document.getElementById("albums");
          }else{
                visibleSection =
            document.getElementById("singles");
          }


       let cards =
    visibleSection.querySelectorAll(".col");
          
          cards.forEach(card => {

                if (producer === "all") {
                    card.style.display = "block";
                   }

                   else if
                       (card.classList.contains("producer-" + producer)){
                                                card.style.display =
                        "block";
                                }

                                else {
                                        card.style.display =
                                        "none";
                                }
          });
    }
