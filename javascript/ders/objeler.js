//Object (Nesne) "Key:Value" yapısıyla çalışır
//KEy: Value yapısına Property denir

//Object Oluşturma yolları
// let item={}
// let item1= new Object();
// let item2= Object.create(null); // Boş obje herhangi bir değer almaz
// let item3= Object.create(Object.prototype) // Standart obje kalıtımıdır.
// let item4= Object.create(item) // Daha önce oluşturduğumuz item objesini aldı. 
//                                //Onun içinde ne varsa 

                               
//   let car ={
//       name:"BMW",
//       model:"i320"

//   }        //car isminde bir obje oluşturduk. İçinde name ve model adında 2 adet KEY var.       
//   console.log(car.name);    // Bize BMW çıktısını verir yani objenin içindeki proplara ulaşabiliriz

//   //Objeye yeni key ekleme
//   car.km=50000; //KM isminde yeni bir key ekledik içine de 50000 değerinde bir value ekledikc
//   console.log(car.km)
//   console.log(car)
   
//   //Objeden prop kaldırma
//   delete car.km; // Objeden KM propunu kaldırdık
//   console.log(car) 

//   //objenin sadece keylerine ulaşma
//   console.log(Object.keys(car)) //1.Yol

//   keys=Object.keys(car) //2. Yol
//   console.log(keys)

//   //Objenin value lerine ulaşma
//   console.log(Object.values(car))  //1.yol
  
// values=Object.values(car) //2. yol
// console.log(values)

// let info ={
//     name: "Cansu",
//     secondName: "Kalakoğlu",
//     job:"student",
//     age:"27",
//     city:"İstanbul",
//     introduce: function(){
//         console.log(`My name is ${this.name} ${this.secondName} ,
//         I'm ${this.age} yo. I live in ${this.city} `)
//     }

// }
// info.introduce();

// //Objeye sonradan fonksiyon ekleme

// info.myHobbies=function(){
//     console.log("Müzik,Spor,Video Oyunları")
// }

// info.myHobbies();

//JavaScript Objec Constructor
//Fonksiyon yöntemiyle OBJE oluşturma.Artık "new" anahtar kelimesiyle 
//belirttiğimiz şablonda bir obje oluşturabiliriz.

