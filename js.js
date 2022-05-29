var z

function baslat() {
    z = setInterval(function() {
            var sonuc = document.getElementById("sonuc")
            var z = Math.round(Math.random() * 16)
            console.log(z)

            if (z == 0) {
                document.getElementById("sonuc").innerHTML = "Çikolata 🍫"
            }
            if (z == 1) {
                document.getEle12mentById("sonuc").innerHTML = "Balık 🐟"
            }
            if (z == 2) {
                document.getElementById("sonuc").innerHTML = "Sosisli 🌭"
            }

            if (z == 3) {
                document.getElementById("sonuc").innerHTML = "Çiğ köfte 🌯"
            }
            if (z == 4) {
                document.getElementById("sonuc").innerHTML = "Hamburger 🍔"
            }
            if (z == 5) {
                document.getElementById("sonuc").innerHTML = "Pizza 🍕"
            }
            if (z == 6) {
                document.getElementById("sonuc").innerHTML = "Tavuk 🍗"
            }
            if (z == 7) {
                document.getElementById("sonuc").innerHTML = "Et 🍖"
            }
            if (z == 8) {
                document.getElementById("sonuc").innerHTML = "Makarna 🍝"
            }
            if (z == 9) {
                document.getElementById("sonuc").innerHTML = "Sandiviç 🥪"
            }
            if (z == 10) {
                document.getElementById("sonuc").innerHTML = "Şeker 🍬"
            }
            if (z == 11) {
                document.getElementById("sonuc").innerHTML = "Dondurma 🍦"
            }
            if (z == 12) {
                document.getElementById("sonuc").innerHTML = "Çorba 🍲"
            }
            if (z == 13) {
                document.getElementById("sonuc").innerHTML = "Pasta 🍰"
            }
            if (z == 14) {
                document.getElementById("sonuc").innerHTML = "Salata 🥗"
            }
            if (z == 15) {
                document.getElementById("sonuc").innerHTML = "Brokoli 🥦"
            }

            if (z == 16) {
                document.getElementById("sonuc").innerHTML = "Kurabiye 🍪"
            }

        }



        , 10)
}

function durdur() {
    clearInterval(z)
}