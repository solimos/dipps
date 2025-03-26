const btn = document.querySelector(".btn");
const park_sec = document.querySelectorAll(".park_sec");

var sendFlag = 0;

btn.addEventListener("click",function(){
    this.classList.toggle("active");

    if(sendFlag === 0){
        sendFlag = 1;
        this.textContent = "Hide";
        park_sec.forEach(function(item){
            item.classList.add("active");
        });
    }
    else{
        sendFlag = 0;
        this.textContent = "Show All";
        park_sec.forEach(function(item){
            item.classList.remove("active");
        });
    }
   
});