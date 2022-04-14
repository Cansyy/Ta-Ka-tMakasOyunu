// document.querySelector(".parent").addEventListener("click",function(e){
//     console.log("Parent")
//     e.stopPropagation(); //Event Bubbling i engellemek için gerekli kod
// })

// document.querySelector(".child").addEventListener("click",function(e){
//     console.log("Child")
//     e.stopPropagation(); //Event Bubbling i engellemek için gerekli kod 
// })

// {capture:true} = Sıralamayı Dıştan içe doğru olarak almamıza yarayan kod

//Fonksiyon

//function Hello() {
//    alert("Merhaba")
//}
// Hello();


 //Html e Yazı Gönderen Fonksiyon

//  function YaziGonder(id,mesaj){
//      let gonderilecerYer=document.querySelector(`#${id}`)
//      gonderilecerYer.innerHTML=mesaj

 //}

 //YaziGonder("demo","mesaj")

 //Fat Arrow(=>) Function
 
//  function Hello(name){
//      console.log(`Merhana ${name}`)
//  }
//  Hello("Cansu")

//  //Yeni Tip Fat Arrowla Tanımlama
//   const hellofunc1=(isim)=> {console.log(`Merhaba ${isim}`)}
//   hellofunc1("Cans")

// const hellofunc2=(firstname,secondname)=>{
// let info =`Merhaba 6+${firstname}  ${secondname}`
// alert(info)

// }
// hellofunc2("Cansu","Kalakoğlu")

//Dizi işlemleri Arrays
let domain="@gmail.com"
let isActive=true;
let items =[1,2,3,domain,isActive]



//Dizinin sonna eleman eklemek için push metodunu kullanıyoruz
// items.push(50)
// console.log(items)
//Sondaki elemanı Çıkarmak için pop
items.pop()
console.log(items)

//Baştaki elemanı çıkarmak için shift

items.shift()
console.log(items)

// Array içerisinden öğe ayırmak için splice 

let newitems =items.splice(0,2)
console.log(items)

//Array Kopyalamak için Slice
//1.Yol
let copyitems =items.slice()
console.log(copyitems)

//2.Yol
let kopyaitems=[...items]
console.log(kopyaitems)

//İstediğimiz index e eleman eklemek
items.splice(items.length-1,"Cansu")
console.log(items)

//Array içinden koşula göre eleman çekme Filter ile

const newArray=items.filter(yeniCekilenEleman=>yeniCekilenEleman.length>3)
console.log(newArray)

//Array içinden istediğim elemanları değiştirerek yeni Array a atma (MAP)
const users =["Cansu","Feyza","Zeynep","Sena"]
const newUsers=users.map(users=> users.toLowerCase())
console.log(newUsers)

const sayilar =[2,4,6,8,10]
const yeniSayilar= sayilar.map(sayi=>{return sayi*2})
console.log(sayilar)
console.log(yeniSayilar)

const maaslar=[2000,2500,3500,5000,7500]
const yeniMaaslar= maaslar.map( maas=> {if (maas>4000) return maas*2})
console.log(maaslar)
console.log(yeniMaaslar)