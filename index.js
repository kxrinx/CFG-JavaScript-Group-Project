
function aboutUsText() {
    document.getElementById("paragraph1").innerHTML="This is new text";
    }
    function aboutMission() {
    document.getElementById("paragraph1").innerHTML="This is entirely different text"
    }
    
    function WorkLifeBalance() {
      const x = document.querySelector(".workLifeTips")
      console.log("x ===", x);
      x.classList.toggle("hide-text");
    }

    function selfCare() {
     const x = document.querySelector(".selfCareTips")
     console.log("x ===", x);
     x.classList.toggle("hide-text");
    }

    function sleepTips() {
      const x = document.querySelector(".sleepTips")
      console.log("x ===", x);
      x.classList.toggle("hide-text");
    }
    function anxietyTips() {
      const x = document.querySelector(".anxietyTips")
      console.log("x ===", x);
      x.classList.toggle("hide-text");
     }
    
    const tips = [
        'Reframe unhelpful thoughts',
        'Be in the present',
        'Get good sleep',
        'Connect with others',
        'Live a healthy life',
        'Do something for yourself',
        'Write a letter to future you'
      ];
    
    
    const rdmbtn = document.getElementById("rdmbtn");
    const tipsElement = document.getElementById("tips");
    rdmbtn.addEventListener("click", generateRandomTip);
    function generateRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipsElement.textContent = tips[randomIndex];
    }