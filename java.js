let denemeSayisi = 10;
let rastgeleSayi = 0;
let tahminEt = document.getElementById("tahminEt");
let yeniOyun = document.getElementById("yeniOyun");
let sonuc = document.getElementById("sonuc");
let sayi = document.getElementById("sayi");

yeniOyun.onclick = yeni;
tahminEt.onclick = tahmin;

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

// function randomInt(min, max) {
//     return parseInt(Math.random() * (max - min + 1)) + min;
// }

function yeni() {
  rastgeleSayi = randomNumber;
  sonuc.innerHTML = "";
  sayi.value = "";
  tahminEt.disabled = false;
  yeniOyun.disabled = true;
}

function tahmin() {
  let girilenSayi = parseInt(sayi.value);
  let mesaj = "";
  if (isNaN(girilenSayi)) return;

  if (rastgeleSayi > girilenSayi) {
    mesaj = "<h3>Daha büyük değer deneyin</h3>";
  } else if (girilenSayi > rastgeleSayi) {
    mesaj = "<h3>Daha küçük değer deneyin</h3>";
  } else {
    mesaj = "<h2>TEBRİKLER</h2>";
    tahminEt.disabled = true;
    yeniOyun.disabled = false;
    document.querySelector("body").style.backgroundColor = "green";
  }

  denemeSayisi--;
  sonuc.innerHTML = mesaj;
  sonuc.innerHTML += "Yapılan Deneme : " + denemeSayisi;
  sonuc.innerHTML += "<br / >";
}
