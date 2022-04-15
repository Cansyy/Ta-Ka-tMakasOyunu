//Localde veri tutmak için kullanılır
//oluşturmak için

localStorage.setItem("myCat","KodKedisi");

//Çağırmak için

localStorage.getItem("myCat");


//Silmek için
localStorage.removeItem("myCat")

//Ls içindeki veriler "Key:Value" şeklinde string türünde saklanır.
//İçinde birden fazla değer barındıran değişkenler OBJE olarak görülür
//Bunu önlemek için bu objeleri STRİNG e çevirmemiz gerekir.
let user={ name: "Cansu", secondName:"Kalakoğlu" }

localStorage.setItem("userInfo",JSON .stringify(user))

var user2=JSON.parse(userInfo)