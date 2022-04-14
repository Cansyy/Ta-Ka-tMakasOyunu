function oyunuBaslat(secim){
    //Kullanıcının seçimini değişkene alalım
    let kullaniciSecimi=secim.id;
   console.log(kullaniciSecimi);


let rastgeleSayi=Math.floor(Math.random()*3);
let bilgisayarSecimi=["tas","kagit","makas"][rastgeleSayi];
console.log(bilgisayarSecimi)

//Puanları obje şeklinde oluşturalım

let oyunPuanlari={
    "tas":{"makas":1,"tas":0.5,"kagit":0},
    "kagit":{"tas":1,"kagit":0.5, "makas":0},
    "makas": {"kagit":1,"makas":0.5,"tas":0}
}
//Objeden seçiminize ait puanı alalım

let kullaniciPuani=oyunPuanlari [kullaniciSecimi][bilgisayarSecimi];
console.log(kullaniciPuani)



// Kayıtlı tüm resimlerin kaynak adreslerini alıp temizleyelim 
//sonuç 
let kayitliResimler={
    "tas":document.getElementById("tas").src,
    "kagit":document.getElementById("kagit").src,
    "makas":document.getElementById("makas").src
}

document.getElementById("tas").remove()
document.getElementById("kagit").remove()
document.getElementById("makas").remove()

let kullaniciResmi=document.createElement("img");
let sonucMesaji=document.createElement("div");
let bilgisayarResmi=document.createElement("img");

kullaniciResmi.src=kayitliResimler[kullaniciSecimi]
bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi]

//Oluşturduğumuz resimleri HTML e Ekleyelim

document.querySelector(".container").appendChild(kullaniciResmi);
document.querySelector(".container").appendChild(sonucMesaji);
document.querySelector(".container").appendChild(bilgisayarResmi);

if(kullaniciPuani==0){
    sonucMesaji.innerHTML="Maalesef Kaybettiniz";
    sonucMesaji.style.color="red";
    sonucMesaji.style.fontSize="4rem"

}
 else if(kullaniciPuani==0.5) {
    sonucMesaji.innerHTML="Berabere";
    sonucMesaji.style.color="orange";
    sonucMesaji.style.fontSize="4rem"

 }
 else 
 {
    sonucMesaji.innerHTML="Tebrikler Kazandınız";
    sonucMesaji.style.color="Green";
    sonucMesaji.style.fontSize="4rem"




}
}