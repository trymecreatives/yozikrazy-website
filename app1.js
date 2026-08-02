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

          const info =
          document.getElementById("producerInfo");
          const social =
          document.querySelector(".producer-social");

          const name =
          document.getElementById("producerName");
          const country =
          document.getElementById("producerCountry");
          const role =
          document.getElementById("producerRole");
          const stats =
          document.getElementById("producerStats");
          const bio =
          document.getElementById("producerBio");

          const instagram =
          document.getElementById("producerInstagram");
          const facebook =
          document.getElementById("producerFacebook");
          const Youtube =
          document.getElementById("producerYoutube");

          if (producer === "all") {
                info.style.display = "none";
                social.style.display = "none";
          }

          else if (producer === "tryme") {
                info.style.display = "block";
                social.style.display = "block";

                name.innerHTML =
            "TrymeCreatives";

                country.innerHTML = "Kenya";
                
                role.innerHTML = "Producer - Mixing and Mastering Engineer";

                stats.innerHTML = "Produced - 4 Albums - 2 Singles";

                bio.innerHTML = 
                "Tryme Creatives is known for creative arts for Album Covers and sound mastering";
                 

                  instagram.href =
                "https://www.instagram.com/mistarimrree";
                  facebook.href =
                "https://www.facebook.com/mistarimrree";
                  Youtube.href =
                "https://www.youtube.com/@mistarimrree";

          }


          else if (producer === "mapema") {
                info.style.display = "block";
                social.style.display = "block";

                name.innerHTML =
            "Mr. Mapema";

                country.innerHTML = "Kenya";
                
                role.innerHTML = "Producer - Mixing and Mastering Engineer";

                stats.innerHTML = "Produced - 2 Albums - 2 Singles";

                bio.innerHTML = 
                "Mr. Mapema is known for Sound mastering and beat making. He has worked with bigger names in the industry.";
                 

                  instagram.href =
                "https://www.instagram.com/mr.mapema/";
                  facebook.href =
                "https://www.facebook.com/mr.mapema";
                  Youtube.href =
                "https://www.youtube.com/@mr.mapema254";

          }

           else if (producer === "undefeatedBeatz") {
                info.style.display = "block";
                social.style.display = "block";

                name.innerHTML =
            "UndefeatedBeatz";

                country.innerHTML = "Kenya";
                
                role.innerHTML = "Producer - Mixing and Mastering Engineer";

                stats.innerHTML = "Produced - O Albums - 10 Singles";

                bio.innerHTML = 
                "UndefeatedBeatz is known for Sound mastering and beat making.";
                 

                  instagram.href =
                "https://www.instagram.com/undefeatedbeatz/";
                  facebook.href =
                "https://www.facebook.com/undefeatedbeatz";
                  Youtube.href =
                "https://www.youtube.com/@undefeatedbeatz_ke3415";

          }

          else if (producer === "jong") {
                info.style.display = "block";
                social.style.display = "block";

                name.innerHTML =
            "Jonga";

                country.innerHTML = "Kenya";
                
                role.innerHTML = "Producer - Mixing and Mastering Engineer";

                stats.innerHTML = "Produced - 0 Albums - 1 Singles";

                bio.innerHTML = 
                "Jonga is known for Sound recording and mastering.";
                 

                  instagram.href =
                "https://www.instagram.com/jonga";
                  facebook.href =
                "https://www.facebook.com/jonga";
                  Youtube.href =
                "https://www.youtube.com/jonga";

          }

          else if (producer === "isablack") {
                info.style.display = "block";
                social.style.display = "block";

                name.innerHTML =
            "Isa Black";

                country.innerHTML = "Kenya";
                
                role.innerHTML = "Producer - Mixing and Mastering Engineer";

                stats.innerHTML = "Produced - 0 Albums - 1 Singles";

                bio.innerHTML = 
                "Isa Black is known for Sound mastering and beat making.";
                 

                  instagram.href =
                "https://www.instagram.com/isa Black";
                  facebook.href =
                "https://www.facebook.com/isa Black";
                  Youtube.href =
                "https://www.youtube.com/isa Black";

          }


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
