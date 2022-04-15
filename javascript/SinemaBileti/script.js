const container=document.querySelector(".container");
const miktar=document.getElementById("miktar")
const ucret=document.getElementById("ucret")
const select=document.querySelector(".movie")
const koltuklar=document.querySelectorAll( ".koltuk:not(.reserved")

container.addEventListener("click",function(e){
    if(e.target.classList.contains("koltuk")  && !e.target.classList.contains("reserved"))
{
e.target.classList.toggle("selected")
tutarHesapla();
}
})

//Film listesindeki film değiştikçe fiyatın güncellenmesi için 
select.addEventListener("change",function(e)
{

tutarHesapla();

})

function tutarHesapla(){
    const seciliKoltuksayisi= container.querySelectorAll(".koltuk.selected");
    const seciliKoltukDizisi=[];
    const koltukDizisi=[];

    seciliKoltuksayisi.forEach(function(koltuk){
        seciliKoltukDizisi.push(koltuk)

    })
    
    koltuklar.forEach(function(koltuk){
        koltukDizisi.push(koltuk)

    })
    
let seciliKoltukIndexleri= seciliKoltukDizisi.map(function(koltuk){
    return seciliKoltukDizisi.indexOf(koltuk)
})

let seciliKoltukUzunluk=seciliKoltuksayisi.length;
miktar.innerText=seciliKoltukUzunluk;
ucret.innerText=seciliKoltukUzunluk*select.value;
}
