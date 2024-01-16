
function aboutUsText() {
    document.getElementById("paragraph1").innerHTML="This is new text";
    }
    function aboutMission() {
    document.getElementById("paragraph1").innerHTML="This is entirely different text"
    }
    
    function WorkLifeBalance() {
      let x = document.getElementById("workLifeTips")
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    function selfCare() {
     let x = document.getElementById("selfCareTips")
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    function sleepTips() {
     let x = document.getElementById("sleepTips")
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    function anxietyTips() {
     let x = document.getElementById("anxietyTips")
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
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