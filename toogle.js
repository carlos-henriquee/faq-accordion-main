document.querySelectorAll(".question").forEach(currentButton=>{
    currentButton.addEventListener("click",()=>{
        const currentAnswer = currentButton.nextElementSibling;
        const card = document.querySelector(".card-container");
     

        document.querySelectorAll(".answer").forEach(otherAnswer=>{
            if(otherAnswer!==currentAnswer){
                otherAnswer.style.display = 'none'
            }
        });
        document.querySelectorAll(".question").forEach(btn=>{
            if(btn!==currentButton){
                btn.classList.remove("active");
                
            }
        })
        
        currentButton.classList.toggle("active");

        

        if(currentButton.classList.contains("active")){
            card.classList.add("expand");
            setTimeout(()=>{
                currentAnswer.style.display = 'block';
            },100)
            
            
        }else{
            card.classList.remove("expand")
            currentAnswer.style.display= 'none';  
        }
        
    })
})

