document.addEventListener("DOMContentLoaded", function() {
    var dialog = document.getElementById('dialog');
    var closeBtn = document.getElementById('closeBtn');  
    var Title = document.getElementById('name');  
    var Score = document.getElementById('dec'); 
    var classicButton = document.getElementById('classic'); 
    var flameButton = document.getElementById('flame'); 
    var neonButton = document.getElementById('neon'); 
    var themebutton = document.getElementById("theme");
    var cls = document.getElementById("close");
    var themedialog = document.getElementById("theme_menu");
    var image = document.getElementById("powerup");
    var alertElements = document.getElementById("alert");
    var Deceptrion = document.getElementById('decept');  
    const colors = ["red", "yellow", "green"];
    let color_codes = ["#cd6d6e","#f7dc6f","#8acd6c"];
    const powerups = ["time","2x","shield"];
    let double = false;
    let shield = false;
    let timer_down = false;
    let timer_tiklandi = true;
    let skor = 0;
    let timer = 20;
    const sasirtmaca = ["var","var","var","yok","yok","yok","yok","yok","yok","yok"];
    let zamanlayici;
    let progressGenislik = 100; // progress bar'ın başlangıç genişliği
    let oyun = true;
    const progress = document.getElementById("myBar");

    // Elementleri seç
    const skorElement = document.getElementById("skor");
    const redButton = document.getElementById("red");
    const yellowButton = document.getElementById("yellow");
    const greenButton = document.getElementById("green");

    // Yeni renk oluştur
    function yeniRenk() {
        const secilenRenk = colors[Math.floor(Math.random() * colors.length)];
        if (skor % 50 === 0 && skor != 0) {
            progressGenislik = 100;
            progress.style.width = progressGenislik + "%";
            dialog.style.display = "block";
            Score.textContent = "Bravo, you reached " + skor + " points! Now you can be relaxed.";
            const current_powerup = powerups[Math.floor(Math.random() * powerups.length)];
            if (current_powerup === "time") {
                Title.textContent = "Stop Timer";
                Deceptrion.textContent = "Timer stops for 5 seconds.";
                image.src = "https://cdn.glitch.global/aed1e798-d668-4241-a8a1-4aeb8554c7c2/TIME_POWERUP-removebg-preview.png?v=1717922338494";
                oyun = false;
                timer_down = true;
                timer_tiklandi = false;
                }
            else if (current_powerup == "2x") {
                Title.textContent = "2X Points";
                Deceptrion.textContent = "2x Points per click for 5 seconds.";
                image.src = "https://cdn.glitch.global/aed1e798-d668-4241-a8a1-4aeb8554c7c2/2X_POWERUP-removebg-preview.png?v=1717922335353";
                double = true;
                setTimeout(function() {
                    double = false;
                  }, 5000);
            }
            else {
                Title.textContent = "Shield";
                Deceptrion.textContent = "You can make a mistake.";
                image.src = "https://cdn.glitch.global/aed1e798-d668-4241-a8a1-4aeb8554c7c2/SHIELD_POWERUP-removebg-preview.png?v=1717922341495";
                shield = true;
            }
            oyun = false;
        }
        if (skor >= 30) {
            timer = 15;
            const sasirtmacavar = sasirtmaca[Math.floor(Math.random() * sasirtmaca.length)];
            if (sasirtmacavar === "var") {
                const current = color_codes[Math.floor(Math.random() * color_codes.length)];
                progress.style.backgroundColor = current;
                document.getElementById("color").style.color = current;
            }
            else {
                if (secilenRenk == "red") {
                    progress.style.backgroundColor = color_codes[0];
                    document.getElementById("color").style.color = color_codes[0];
                } else if (secilenRenk == "yellow") {
                    progress.style.backgroundColor = color_codes[1];
                    document.getElementById("color").style.color = color_codes[1];
                } else {
                    progress.style.backgroundColor = color_codes[2];
                    document.getElementById("color").style.color = color_codes[2];
                }
            }
        }
        else {
            if (secilenRenk == "red") {
                progress.style.backgroundColor = color_codes[0];
                document.getElementById("color").style.color = color_codes[0];
            } else if (secilenRenk == "yellow") {
                progress.style.backgroundColor = color_codes[1];
                document.getElementById("color").style.color = color_codes[1];
            } else {
                progress.style.backgroundColor = color_codes[2];
                document.getElementById("color").style.color = color_codes[2];
            }
        }
        document.getElementById("color").textContent = secilenRenk;
        return secilenRenk;
    }

    // Yeni renk ekrana yansıt
    yeniRenk();

    // Butonlara tıklama olayları ekle
    redButton.addEventListener("click", function() {
        if(timer_down != true){
            oyun = true;
        }
        tıklama("red");
        baslat();
    });

    yellowButton.addEventListener("click", function() {
        if(timer_down != true){
            oyun = true;
        }
        tıklama("yellow");
        baslat();
    });

    greenButton.addEventListener("click", function() {
        if(timer_down != true){
            oyun = true;
        }
        tıklama("green");
        baslat();
    });

    function restart(){
        oyun = false;
        timer = 20;
        skor = 0;
        document.getElementById("skor").textContent =  skor;
        progressGenislik = 100;
        progress.style.width = "100%";
        double = false;
        shield = false;
        timer_down = false;
        timer_tiklandi = true;
        yeniRenk();
    }
    // Butonlara tıklandığında gerçekleşecek işlemler
    function tıklama(renk) {
        const secilenRenk = document.getElementById("color").textContent;
        if(timer_tiklandi === false){
                    timer_tiklandi = true;
                    setTimeout(function() {
                        timer_down = false;
                      }, 5000);
                   }
        if (renk != secilenRenk) {
            skor++;
            if (double) {
                skor++; // 2x puan
            }
            skorElement.textContent = skor;
            yeniRenk();
        } 
        else {
            if (shield) {
                progressGenislik = 100;
                progress.style.width = progressGenislik + "%";
                shield = false; // Kalkanı kullan
                oyun = false;
                alertElements.style.display = "block";
            } else {
                // Hata durumu, istediğiniz gibi işleyebilirsiniz
                alert("Wrong Color!");
                restart();
            }
        }
    }

    // ProgressBar güncelleme işlevi
    function progressBarGuncelle() {
        if (oyun) {
            if (progressGenislik <= 0) {
                oyunuBitir();
            } 
            else {
                progressGenislik--;
                progress.style.width = progressGenislik + "%";
                zamanlayici = setTimeout(progressBarGuncelle, timer); // Her timer ms'de bir progressBar'ı güncelle
            }
        }
    }

    // Oyunu bitirme işlevi
    function oyunuBitir() {
        alert("Time is over!");
        restart();
    }

    // Zamanlayıcıyı başlatma işlevi
    function baslat() {
        clearTimeout(zamanlayici);
        progressGenislik = 100; // progress bar'ın başlangıç genişliği
        progressBarGuncelle();
    }

    closeBtn.addEventListener('click', function() {
        dialog.style.display = 'none';
    });    

    var close = document.getElementsByClassName("closebtn");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
      }
    }

    classicButton.addEventListener("click", function() {
        classicButton.style.backgroundImage = "linear-gradient(to right, #333, #666, #333)";
        flameButton.style.backgroundImage = "linear-gradient(to right, #c50f04, #dfa11a, #009788)";
        neonButton.style.backgroundImage = "linear-gradient(to right, #fa0240, #edcc01, #34d970)";
        colors_codes=["#cd6d6e", "#cdc16d", "#8acd6c"];
        cls.style.backgroundColor = "#cd6d6e";
        greenButton.style.backgroundColor = "#8acd6c";
        yellowButton.style.backgroundColor = "#cdc16d";
        redButton.style.backgroundColor = "#cd6d6e";
        const secilenRenk = document.getElementById("color").textContent;
        if(secilenRenk === "red"){
            document.getElementById("color").style.color = "#cd6d6e";
            progress.style.backgroundColor = "#cd6d6e";
        }
        else if(secilenRenk==="yellow"){
            document.getElementById("color").style.color = "#cdc16d";
            progress.style.backgroundColor = "#cdc16d";
        }
        else{
            document.getElementById("color").style.color = "#8acd6c";
            progress.style.backgroundColor = "#8acd6c";
        }
    });

    flameButton.addEventListener("click", function() {
        classicButton.style.backgroundImage = "linear-gradient(to right, #cd6d6e, #cdc16d, #8acd6c)";
        flameButton.style.backgroundImage = "linear-gradient(to right, #333, #666, #333)";
        neonButton.style.backgroundImage = "linear-gradient(to right, #fa0240, #edcc01, #34d970)";
        color_codes=["#c50f04", "#dfa11a", "#009788"];
        cls.style.backgroundColor = "#c50f04";
        const secilenRenk = document.getElementById("color").textContent;
        if(secilenRenk === "red"){
            document.getElementById("color").style.color = "#c50f04";
            progress.style.backgroundColor = "#c50f04";
        }
        else if(secilenRenk==="yellow"){
            document.getElementById("color").style.color = "#dfa11a";
            progress.style.backgroundColor = "#dfa11a";
        }
        else{
            document.getElementById("color").style.color = "#009788";
            progress.style.backgroundColor = "#009788";
        }
        greenButton.style.backgroundColor = "#009788";
        yellowButton.style.backgroundColor = "#dfa11a";
        redButton.style.backgroundColor = "#c50f04";
    });

    neonButton.addEventListener("click", function() {
        classicButton.style.backgroundImage = "linear-gradient(to right, #cd6d6e, #cdc16d, #8acd6c)";
        flameButton.style.backgroundImage = "linear-gradient(to right, #c50f04, #dfa11a, #009788)";
        neonButton.style.backgroundImage = "linear-gradient(to right, #333, #666, #333)";
        color_codes=["#fa0240", "#edcc01", "#34d970"];
        greenButton.style.backgroundColor = "#34d970";
        yellowButton.style.backgroundColor = "#edcc01";
        redButton.style.backgroundColor = "#fa0240";
        cls.style.backgroundColor = "#fa0240";
        const secilenRenk = document.getElementById("color").textContent;
        if(secilenRenk === "red"){
            document.getElementById("color").style.color = "#fa0240";
            progress.style.backgroundColor = "#fa0240";
        }
        else if(secilenRenk==="yellow"){
            document.getElementById("color").style.color = "#edcc01";
            progress.style.backgroundColor = "#edcc01";
        }
        else{
            document.getElementById("color").style.color = "#34d970";
            progress.style.backgroundColor = "#34d970";
        }
    });

    cls.addEventListener("click", function() {
        themedialog.style.display = "none";
    });
    themebutton.addEventListener("click", function() {
        themedialog.style.display = "block";
    });
  });