let price =10;
let stringPrice="10";
let hasTrue=true;
console.log(typeof(price));
console.log(typeof(stringPrice));
console.log(typeof(hasTrue));
//Template Literals Kullanımı(çok Satırlı Dize)
//Win için AltGR+,
// Mac için option +,

let eskiString ="En sevdiğim yemekler: \n iskender \n mantı"
console.log(eskiString)

let yeniString=`En Sevdiğim Yemekler
İskender
Mantı
`
console.log(yeniString)

//Interpolasyon
//Metin içerisinde değişken tanımlamak için kullanılır
let ad="Furkan";
let soyad="taşçı";
console.log("Benim Adım "+ad+" "+soyad);
console.log(`Benim Adım ${ad} ${soyad}`)

//String Veri Türü İşlemleri 
//Search= String içinde istediğimiz bilgiyi aratmak ve
//yerini bulmak için kullanılır

let email="aliveli@gmail.com"
console.log(email.search("@"))

//Slice = belli bir yere kadar al 

console.log(email.slice(0,7))
console.log(email.slice(email.search("@")+1))

//Replace= Değiştirme 
email=email.replace("gmail.com","hotmail.com")
console.log(email)

//İncludes = İstediğim bilgi var mı? Evet/Hayır

console.log(email.includes("@"))

//let fullname= prompt("İsminizi Giriniz");
//console.log(fullname)

//Karşılaştırma ve Mantıksal Operatörler

let price2="100";
let user="Guest";
console.log(price2==1)
console.log(price2===100)

console.log(price2!=1)

//Ternary Operatör 
// Koşul ? Doğruysa Olacaklar: Yanlışsa Yapılacaklar

var money=40;
var canbuy=(money<17)? "Satın Alamazsın": (money>30)? "Satın Alabilirsin" :"Para miktarını girin"
console.log(canbuy)

//Document Object Model
//getElementById ve querySelector metodları en sık kullanılandır

let deneme =document.getElementById("deneme");
deneme.innerHTML="Deneme Yazısı"
