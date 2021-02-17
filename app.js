var curpage=0;
            var currentPage=0;
            const myquiz=[["1","1.who has faced most deliveries in Test Cricket?","Dravid","Sangakkara","Pujara","Kallis","2","false","images/dravid.jpg","images/sangatest.webp","images/pujara.jfif","images/kallistest.jfif"],
            ["2","2.who is the highest wicket taker in tests?","kumble","warne","murali","mcgrath","4","false","images/kumble.jpg","images/warne.jpg","images/murali.jpg","images/mcgrath.jpg"],
            ["3","3.Who is the Man Of Tournament of WC 2019?","Stokes","Rohit","Shakib","Williamson","5","false","images/stokes.jpg","images/rohit.jpg","images/shakib.jpg","images/kane.jpg"],
            ["4","4.Who is known as Mr.Cricket?","Steve smith","Mike Hussey","Don Bradman","Raina","3","false","images/stevesmith.jpg","images/hussey.jpg","images/bradman.jfif","images/raina.jpg"],
            ["5","5.who is the highest wicket taker in ODI cricket?","akram","waqar","warne","murali","5","false","images/akram.webp","images/waqar.jpg","images/warneodi.jpg","images/muraliodi.webp"],
            ["6","6.Which bowler has bowled the fastest delivery in Cricket history?","Starc","Akthar","Lee","Tait","3","false","images/starc.jpg","images/shoaib.jpg","images/brett.jfif","images/tait.jfif"],
            ["7","7.Which player has won most test matches as captain?","G Smith","Fleming","C Lloyd","Ponting","2","false","images/g smith.jpg","images/fleming.webp","images/lloyd.jpg","images/pontingcaptain.jpg"],
            ["8","8.Which country holds the record for highest score in T20I's?","Australia","Afganistan","India","West Indies","3","false","images/australia.jpg","images/afg.png","images/india.jfif","images/windies.jpg"],
            ["9","9.Who holds the record for fastest century in IPL?","AB ","McCullum","Russel"," Gayle","5","false","images/AB.jpeg","images/mccullum.jfif","images/russel.jpg","images/Gayle.png"],
            ["10","10.Who won the first ever IPL in 2008?","RR","CSK","KXIP","Deccan Chargers","2","false","images/rajastan.webp","images/chennai.jpg","images/punjab.jpg","images/deccan.jpg"]];

            var wicket=["wicket/dropped1.mp3","wicket/dropped2.mp3","wicket/dropped4.mp3","wicket/dropped6.mp3","wicket/dropped7.mp3","wicket/dropped8.mp3","wicket/dropped9.mp3","wicket/dropped10.mp3","wicket/dropped11.mp3","wicket/dropped12.mp3","wicket/dropped13.mp3","wicket/dropped15.mp3"];
            var audio=["audio/six1.mp3","audio/six3.mp3","audio/six2.mp3","audio/six4.mp3","audio/six5.mp3","audio/six6.mp3","audio/six7.mp3","audio/six9.mp3","audio/six10.mp3","audio/six8.mp3","audio/six11.mp3","audio/six12.mp3","audio/six13.mp3","audio/six14.mp3","audio/six15.mp3","audio/six16.mp3","audio/six17.mp3","audio/six18.mp3"];
            var scores=["ump/mortazafront.jpg","ump/mortaza.jpg","ump/rahul.jpg","ump/rahulback.jpg","ump/bhajjifront.webp","ump/bhajji.jfif","ump/markramfront.jpg","ump/markram.jpg","ump/mortazafront.jpg","ump/dravidfront.jfif","ump/dravid.png","ump/chahalfront.webp","ump/chahal.jpg","ump/dhoni.png","ump/dhoni-back.jpg","ump/jadega.webp","ump/jadega.jpg","ump/andersonfront.jpg","ump/anderson.jpg","ump/sachin.jpg","ump/sachinback.jpg"];
            var boole= "true";
            var index=0;
            var attr;
            var answered=[];
            var suggestions=["Defend it Carefully","Pick the Googly","Play a Elegant drive","Smash it ","Pick the slower one",
            "Duck Under It ","Captain Courageous","Who Smacked'em More","MVP","Beginners Luck?"];
            const header= document.querySelector(".header");
            const underline= document.querySelector(".underline");
            const question= document.querySelector(".question1");
            const next= document.querySelector(".next");
            const prev= document.querySelector(".prev");
            const start= document.querySelector(".start");
            const answer= document.querySelectorAll(".answer");
            const answerBox= document.querySelector(".answer-box");
            const container=document.querySelector(".container");
            const squareConatiner=document.querySelector(".square-container");
            const gridConatiner=document.querySelector(".grid-container");
            const score=document.querySelector(".score");
            const box=document.querySelector(".box");
            var img= document.querySelectorAll(".img");
            const timeCount=document.querySelector(".count");
            var imagefront=document.querySelector(".image1");
            var imageback=document.querySelector(".image");
            var myanswers=0;
            var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
            var audioControl= document.getElementById("myAudio");
            var imgContainer= document.querySelector(".img-container");
            var seconds = 10;
            var index=2;
            var audioPlay;


          function display(currentPage){
            console.log(currentPage);
            question.innerHTML=myquiz[currentPage][1];
            var index=2;
                answer.forEach(function(item){
                   
                    item.innerHTML=myquiz[currentPage][index];
                    index++;
                });
                var index=8;
                    img.forEach(function(item){
                    item.src=myquiz[currentPage][index];
                    index++;
               
                });
          
            }
       

            

            answer.forEach(function(item){
              
                item.addEventListener("click",myfunction);
                  });    
                    
             function myfunction(){
              attr=this.getAttribute("data-id");
              if(myquiz[curpage][6]==attr){
                  myanswers++;
                 playCorrect();
               }else{
                    playWrong();
               }
                answered[curpage]=attr;
                if(answered.length>=10){
                    start.innerHTML="SCORE";
                    start.style.display="block";
                  
                }
                 var bool=myquiz[curpage][7];
                 
                 if(bool=="false"){
                    myquiz[curpage][7]="true";
                    this.classList.add("btn-danger");
                   
                    answer.forEach(function(item){
              
                        var att=item.getAttribute("data-id");
                       
                        if(myquiz[curpage][6]==att){
                        
                          
                            item.classList.remove("btn-danger");
                            item.classList.add("btn-success");
                        }else{
                            
                        }
                          });
           
                    
                 }else{
                    alert("You can answer only once");
                 }
                 

             }

             
           
            

           

            
          

                next.addEventListener("click",function(){
                    if(answered[curpage]){
                        console.log(curpage);
                      audioControl.pause();
                      
                       curpage++;
                        header.innerHTML=suggestions[curpage];
                    var num=1;
                    answer.forEach(function(item){
                        item.classList.remove("btn-success","btn-danger");
                    });
                   
                    prev.style.display="block";
                    if(curpage>=9){
                        next.style.display="none";
                       prev.style.display="none";
                        
                    }
                   
                    display(curpage);
                    }else{
                        alert("You need to answer before going to next question");
                    }
                   
                    });
                prev.addEventListener("click",function(){
                    curpage--;
                    var num=-1;
                    next.style.display="block";
                    if(curpage<=0){
                        prev.style.display="none";
                    }
                    display(curpage);
                    });
                
                start.addEventListener("click",function(){
                   
                   
                   var data=start.innerHTML;
                   if(data=="Start"){
                       
                       header.innerHTML=suggestions[curpage];
                       
                    start.style.display="none";
                    next.style.display="block";
                    answerBox.style.display="grid";
                    display(curpage);
                   }else{
                   
                        endQuiz();
                   }
                    
                    });

                function endQuiz(){
                    if(answered[curpage]){
                        scored();     
                        performance();
                    }else{
                        {
                        alert("You need to answer all questions");
                    } 
                    }
                }
                 function performance(){
                     
                     underline.style.width="5rem";
                     if(myanswers>=9){
                        header.innerHTML="AWESOME";
                     }
                     else if(myanswers>=7){
                        header.innerHTML="Thats a Good innings";
                     }
                     else if(myanswers>=5){
                        header.innerHTML="You Can Do Better";
                     }else{
                        header.innerHTML="POOR";
                     }
                 }
                 
                 function timeUp(){
                     scored();
                     performance();
                     alert("time up");
                 }
                
             function scored(){
                 gridConatiner.style.display="block";
              
             imgContainer.style.display="block";
             myanswers=myanswers%2==0?myanswers:myanswers-1;
             imagefront.setAttribute("src",scores[myanswers]);
             imageback.setAttribute("src",scores[myanswers+1]);
             container.style.display="none";
             
             
             
                gridConatiner.style.display="block";
                squareConatiner.classList.add("display");
              
                score.innerHTML=myanswers-1;  
             }
             //audio effects
             function playCorrect()
             {
               
               audioControl.src=audio[curpage];
               audioControl.play();
             }
             function playWrong(){
                var sound= Math.floor(Math.random()*13);
                audioControl.src=wicket[curpage];
                
                audioControl.play();
             }
           


