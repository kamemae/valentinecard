const btn = document.getElementById("btn");
const img = document.getElementById("image");
const yes = document.getElementById("yes");

var wasClicked = false;
function runaway() {
    if(!wasClicked) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = btn.offsetWidth;
        const buttonHeight = btn.offsetHeight;
        const newX = Math.random() * (windowWidth - buttonWidth);
        const newY = Math.random() * (windowHeight - buttonHeight);
        btn.style.left = `${newX}px`;
        btn.style.top = `${newY}px`;

        btn.innerHTML="NIE MA TAK ŁATWO >:3";
    }
}
function shetriedtosayno() {
    btn.innerHTML = "I tak to nie dziala :3";
    wasClicked = true;
}

var isMusicPlaying = false;
function shesaidyes() {
    var imgString= "./images/cats/" + Math.floor(((Math.random() * 7)+1)) + ".gif";
    img.src = imgString;

    var textArray = [
        "Te amo",
        "Je t'aime", 
        "Ti amo", 
        "Eu te amo",
        "Ich liebe dich",
        "Ik hou van je", 
        "Jag älskar dig", 
        "Jeg elsker deg", 
        "Jeg elsker dig",
        "Rakastan sinua", 
        "Я тебя люблю", 
        "我爱你", 
        "愛してる",
        "사랑해", 
        "أحبك",
        "Szeretlek",
        "Volim te", 
        "Te iubesc",
        "Σ' αγαπώ",
        "ฉันรักคุณ", 
        "Tôi yêu bạn", 
        "Mahal kita",
        "I love you",
        "Wo ai ni", 
        "Ana ahbek", 
        "Nakupenda", 
        "Is breá liom tú",
        "Të dua", 
        "Mina armastan sind",
        "Es mīlu tevi",
        "Aš tave myliu", 
        "Kocham cię",
        "Miluji tě", 
        "Ľúbim ťa", 
        "Ljubim te"
    ];
        var randomIndex = Math.floor(Math.random() * textArray.length);
        yes.innerHTML=textArray[randomIndex];

    if(!isMusicPlaying) {
        alert("tez cie kocham <33");
        {
            document.getElementById("bdy").style = "background-image: url(./images/bg.gif)";
            document.getElementById("title").innerHTML="<3";
            document.getElementById("title").style = "color: white;";
            img.style = "border: 0";
            btn.style = "display: none";
        }

        isMusicPlaying = true;
        var backgroundMusic = document.getElementById("bgmusic");
        backgroundMusic.muted = false;
        backgroundMusic.play();
        backgroundMusic.volume = 0.25;
    } else { }
}