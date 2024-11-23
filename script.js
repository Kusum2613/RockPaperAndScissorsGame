let con = document.querySelectorAll(".con")
let pc =document.querySelectorAll(".pc")
let random= Math.floor(Math.random()*3)
let tri=document.querySelector(".tri")
let user=document.querySelector(".users")
let pcp =document.querySelector(".pcp")
let win =document.querySelector(".win")

let res1= document.querySelector(".res1")
let res2= document.querySelector(".res2")
let res3= document.querySelector(".res3")

let score1 = parseInt(localStorage.getItem("sc1")) || 0; 
let score2 = parseInt(localStorage.getItem("sc2")) || 0; 
let sc1 = document.querySelector(".sc1");
let sc2 = document.querySelector(".sc2");
let game = document.querySelector(".game");
let rule=document.querySelector(".rule")
let btn=document.querySelector(".btn")
let close = document.querySelector(".close");
let nextButton = document.querySelector(".next-btn");
let container=document.querySelector(".container")
let div=document.querySelector(".btn-div")
let option=document.querySelector(".option")
let body = document.getElementsByTagName('body')[0];
let main=document.querySelector(".main")
let playButtons = document.querySelectorAll(".play");
let play2= document.querySelector(".play2")
let play3= document.querySelector(".play3")


sc1.innerText = score1;
sc2.innerText = score2;

con.forEach((element,index)=>{
    element.addEventListener("click", ()=>{
        user.style.opacity="1"
        
        
       
        tri.style.display="none"
        con.forEach(item =>{
            item.style.display="none"
        })
        element.style.display ="block"
        element.classList.add("show")
        element.classList.add("active")
        setTimeout(()=>{
            pcp.style.opacity="1"
            setTimeout(()=>{
                const pcChoice = con[random];
                pcChoice.style.display = "block";
                pcChoice.classList.add("right");
                pcChoice.classList.add("active");
                setTimeout(() => {
                    pcChoice.classList.remove("active");
                }, 1500);
                
            },500)
           
        },300)
        setTimeout(()=>{
            if(index==0 && random==2 ||index==1 && random==0|| index==2 && random==1){
                        res1.style.display="block"
                        res1.classList.add("view1")
                       
                        
                       
                        score2++;
                        sc2.innerText = score2;
                        sc1.innerText = score1;
                        localStorage.setItem("sc2",JSON.stringify(score2))
                        localStorage.setItem("sc1",JSON.stringify(score1))
                        document.querySelector(".next-btn").style.display = "inline-block";
                        document.addEventListener("click", (event) => {
                            if (event.target.classList.contains("play3")) {
                                location.reload();
                            }
                        })
                        
                        


            } else if(index===random){
                          
                       res3.style.display="block"
                       res3.classList.add("view3")
                       setTimeout(()=>{
                        con[random].style.display="block"
                        con[random].classList.add("right")
                        
                    },1000)
                       
                       
                      
                       sc2.innerText = score2;
                       sc1.innerText = score1;
                        localStorage.setItem("sc2",JSON.stringify(score2))
                        localStorage.setItem("sc1",JSON.stringify(score1))
                        play2.style.display="block"
                        document.addEventListener("click", (event) => {
                            if (event.target.classList.contains("play2")) {
                                location.reload();
                            }
                        })
                        
                        
                        



            }else{
                     res2.style.display="block"
                     res2.classList.add("view2")
                    
                     
                     score1++;
                sc1.innerText = score1;
                sc2.innerText = score2;
                        localStorage.setItem("sc1",JSON.stringify(score1))
                        localStorage.setItem("sc2",JSON.stringify(score2))
                        
                       
                       
            }
            playButtons.forEach(button => {
                button.style.display = "block"; });
                
       },800)
    })
})

btn.addEventListener("click",()=>{
    
    rule.style.display="block";
  
});
close.addEventListener("click", () => {
    
    rule.style.display = "none";
});

nextButton.addEventListener("click", () => {   
    res1.style.display = "none";
    res2.style.display = "none";
    res3.style.display = "none";
    win.style.display = "flex";
    game.style.display = "none";
    tri.style.display = "none";
    rule.style.display="none";
    container.style.display="none";
    div.style.display="none";
    btn.style.display="block"
    nextButton.style.display="block"

    con.forEach(item => item.style.display = "block");
    pcp.style.opacity = "0";
    user.style.opacity = "0";
    document.querySelector(".next-btn").style.display = "none"; });
    playButtons.forEach((button) => {
        button.addEventListener("click", () => {
            location.reload(); 
        });
    });
    play2.forEach((button) => {
        button.addEventListener("click", () => {
            location.reload(); 
        });
    });
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("play3")) {
            location.reload();
        }
    })