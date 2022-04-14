function krediHesapla()
{
    var anaPara,vade;
    var ayliktaksit,toplamtutar;
    anaPara=document.getElementById("txtKrediTutari").value;
    var liste = document.getElementById("vadeListesi") // selecetten gelen değerleri yakaladık
    vade=liste.options[liste.selectedIndex].value;   // yakaladığımız değerlerin seçili olanının valuesini (selectedındex)

    if(vade==12)
    {
        toplamtutar=anaPara*1.1
        ayliktaksit=toplamtutar/vade;
    }
  
    else if (vade==24)
    {

        toplamtutar=anaPara*1.2
        ayliktaksit=toplamtutar/vade;
    }

    else if(vade==36)
    {
        toplamtutar=anaPara*1.3
        ayliktaksit=toplamtutar/vade;
    }

    else
    {
        toplamtutar=anaPara*1.4
        ayliktaksit=toplamtutar/vade;
    }


document.querySelector("#sonuc").innerHTML="Geri Ödenecek Tutar:"+ toplamtutar+"<br>"+"Aylık Taksit:"+ ayliktaksit.toFixed(2);



}