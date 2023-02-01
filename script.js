let formContainer = document.getElementById("formContainer");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let userInfo = document.getElementById("userInfo");
let displayName = document.getElementById("displayName");
let displayUsername = document.getElementById("displayUsername");
let dice = document.getElementById("dice");
let diceImg = document.getElementById("diceImg");
let diceValue = document.getElementById("diceValue");
let errorMsg = document.getElementById("errorMsg");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let coupan = document.getElementById("coupan");
let coupValue = document.getElementById("coupValue");
let congImg   = document.getElementById("congImg");

let clicked = [false, false, false, false];
let roll =0;
let sum = 0;
let attempts = 0;

img1.addEventListener("click", function() {
        if (!clicked[0]) {
            userInfo.style.display = "none";
            dice.style.display = "none";
            formContainer.style.display = "block";
            clicked[0] = true;
        }
});

formContainer.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted");

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;

  displayName.innerHTML = name;
  displayUsername.innerHTML = username;

  formContainer.style.display = "none";
})

img2.addEventListener("click", () => {
    if (clicked[0] && !clicked[1]) {
        dice.style.display = "none";
        formContainer.style.display = "none";
        userInfo.style.display = "block";
        clicked[1] = true;
    }

})

img3.addEventListener("click", diceShow )

function diceShow() {
    if (attempts < 2 && clicked[1] && !clicked[2]) {
        formContainer.style.display = "none";
        userInfo.style.display = "none";
        dice.style.display = "block";
        console.log("diceShow");

        diceImg.addEventListener("click",  diceRoll)

        function diceRoll() {
            if (roll < 3) {
                diceValue.innerHTML = Math.floor(Math.random() * 6 + 1);
                dice.style.display = "block";
                sum += Math.floor(Math.random() * 6 + 1);
                roll++;
                console.log(sum);
            }
            else {
                errorMsg.innerHTML = "Only Three attempts Total Sum: " + sum;
            }  
        }
        attempts++;
        clicked[2] = true;
    }
}

img4.addEventListener("click", CreateCoup)

function CreateCoup() {
        if (clicked[2] && !clicked[3]) {
        formContainer.style.display = "none";
        userInfo.style.display = "none";
        dice.style.display = "none";
        
        if (sum > 10) {
            coupan.style.display = "block";
            var coupon1 = "";
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 12; i++) {
            coupon1 += characters.charAt(Math.floor(Math.random() * characters.length));
            coupValue.innerHTML = coupon1;
            console.log("ok");
            }
        }
        else {
            alert("Bad Luck");
        }
        clicked[3] = true;
    }
}


