{
  document.getElementById("modal").addEventListener("change", ok);
  function ok()
    {
      var data = document.getElementById("Data_in").value;
      document.getElementById("Data_ou").innerHTML = "&nbsp;" + data ;
      document.getElementById("Data_ou_podglad").innerHTML = "&nbsp;" + data ;
      document.getElementById("Data_ou1").innerHTML = "&nbsp;" + data.slice(5,7)+ "&nbsp;" + '/' + "&nbsp;" + data.slice(0,4) ;
  
      let nr_faktury = parseInt(document.getElementById("nr_faktury_in").value);
      if (isNaN(nr_faktury)) {
        document.getElementById("nr_faktury_ou").innerHTML = "&nbsp;" + "1" + "&nbsp;";
        document.getElementById("nr_faktury_in").value = 1;
     }
      else
      document.getElementById("nr_faktury_ou").innerHTML = "&nbsp;" + nr_faktury + "&nbsp;";
      
      var Miejsce = document.getElementById("Miejsce_in");
      var value = Miejsce.options[Miejsce.selectedIndex].value;
      document.getElementById("Miejsce_out").innerHTML = "&nbsp;" + value;
      document.getElementById("Miejsce_out_podglad").innerHTML = "&nbsp;" + value;
  
      var Forma = document.getElementById("Forma_in");
      var value1 = Forma.options[Forma.selectedIndex].value;
      document.getElementById("Forma_ou").innerHTML = "&nbsp;" + value1;
      document.getElementById("Forma_ou_podglad").innerHTML = "&nbsp;" + value1;
    }
  };
  
  document.getElementById("nastepna").addEventListener("change", nastepna);
  
  function nastepna() {
    let nr_faktury = parseInt(document.getElementById("nr_faktury_in").value);
    var ilosc1_in = document.getElementById("ilosc1_in").value = "";
    var stawkavat1_in = document.getElementById("stawkavat1_in").value = "";
    var cena_brutto1_in = document.getElementById("cena_brutto1_in").value = "";
    var cena_brutto2_in = document.getElementById("cena_brutto2_in").value = "";
    var slownie_ou = document.getElementById("slownie_ou").value = "";
    var slownie_gr_ou = document.getElementById("slownie_gr_ou").value = "";
    var nabywca = document.getElementById("nabywca_in").value = "";
    
    

    if(nr_faktury == 1){
    nr_faktury = nr_faktury +1;
  }
    else if(nr_faktury < 999){
      nr_faktury = nr_faktury + 1;
    }
    else if(nr_faktury == 999) {
    nr_faktury = nr_faktury + 0;
    alert("Maksymalna Ilość Faktur")
    }
    
    if (isNaN(nr_faktury)) {
      document.getElementById("nr_faktury_ou").innerHTML = "&nbsp;" + "1" + "&nbsp;";
      document.getElementById("nr_faktury_in").value = 1;
   }
   else {
    document.getElementById("nr_faktury_ou").innerHTML = "&nbsp;" + nr_faktury + "&nbsp;";
    document.getElementById("nr_faktury_in").value = nr_faktury;
   }
  }
  {
     var cena_brutto1_in = document.getElementById("cena_brutto1_in").value;
     var ilosc1_in = document.getElementById("ilosc1_in").value;
     var wartoscbrutto1_ou = document.getElementById("wartoscbrutto1_ou");
     var ilosc1_ou = document.getElementById("ilosc1_ou");
     var stawkavat1_in = document.getElementById("stawkavat1_in").value;
     var stawkavat1_ou = document.getElementById("stawkavat1_ou");
     var cenanetto1_ou = document.getElementById("cenanetto1_ou");
     var wartoscnetto1_ou = document.getElementById("wartoscnetto1_ou");
     var wartoscvat1_ou = document.getElementById("wartoscvat1_ou");
     var stawkavat2_ou = document.getElementById("stawkavat2_ou");
  };
  {

  const btnOpenModal = document.getElementById("open-modal");
  const btnCloseModal = document.getElementById("close-modal");
  const modalElm = document.getElementById("modal");
  
  btnOpenModal.addEventListener("click", 
  function () {
    modalElm.classList.add("open");
  });
  window.addEventListener('keydown', (op1) => {
  
    if(op1.altKey && op1.key === '1'){
      modalElm.classList.add("open");
    }
    
  });
  
  document.addEventListener("keyup", function(enter) {
    if (enter.key === 'Enter') {
      modalElm.classList.remove("open");
    }
  });
  
  btnCloseModal.addEventListener("click", function () {
    modalElm.classList.remove("open");
  
  });
  const btnOpenModal1 = document.getElementById("open-modal1");
  const btnCloseModal1 = document.getElementById("close-modal1");
  const modalElm1 = document.getElementById("modal1");
  
  btnOpenModal1.addEventListener("click", function () {
    modalElm1.classList.add("open1");
  });
  window.addEventListener('keydown', (op2) => {
  
    if(op2.altKey && op2.key === '2'){
      modalElm1.classList.add("open1");
    }
    
  });
  
  window.addEventListener('keydown', function(enter1) {
  if (enter1.key === 'Enter') {
      modalElm1.classList.remove("open1");
    }
    
  });
  btnCloseModal1.addEventListener("click", function () {
    modalElm1.classList.remove("open1");
  });

  function tryb() {
    var element = document.body;
    element.classList.toggle("ciemny");
  }
  
    var myEvent = window.attachEvent || window.addEventListener;
              var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; 
  
              myEvent(chkevent, function(antyreset) {
                  var confirmationMessage = ' ';  
                  (antyreset || window.event).returnValue = confirmationMessage;
                  return confirmationMessage;
              });
 
  document.getElementById("nabywca_in").addEventListener("change", myFunction);

  function myFunction() {

    var checkBox = document.getElementById("stawka_vat_auto");
    var active = document.getElementById("stawkavat1_in");
  
    if (checkBox.checked == true){
      var nabywca = document.getElementById("nabywca_in").value;
  var stawkavat1_in = document.getElementById("stawkavat1_in").value
  active.disabled = true;
  if(nabywca.includes('')){
    stawkavat1_in = document.getElementById("stawkavat1_in").value = "er";
    }
      if(nabywca.includes('Austria')){
      stawkavat1_in = document.getElementById("stawkavat1_in").value = 20;
      }
        else if(nabywca.includes('Belgia')){
        stawkavat1_in = document.getElementById("stawkavat1_in").value = 21;
        }
          if(nabywca.includes('Bułgaria')){
          stawkavat1_in = document.getElementById("stawkavat1_in").value = 20;
          }
            else if(nabywca.includes('Chorwacja')){
            stawkavat1_in = document.getElementById("stawkavat1_in").value = 25;
            }
              if(nabywca.includes('Cypr')){
              stawkavat1_in = document.getElementById("stawkavat1_in").value = 19;
              }
                else if(nabywca.includes('Czechy')){
                  stawkavat1_in = document.getElementById("stawkavat1_in").value = 21;
                  }
                  if(nabywca.includes('Polska')){
                    stawkavat1_in = document.getElementById("stawkavat1_in").value = 23;
                    }
    } else {
      stawkavat1_in = document.getElementById("stawkavat1_in").value = "";
      active.disabled = false;
    }
  } 
  var liczbunia = 0;
  
    document.getElementById("stawka_vat_auto").addEventListener("change", ok1);
    document.getElementById("modal1").addEventListener("change", ok1);
    document.getElementById("nastepna").addEventListener("click", ok1);
  
    function ok1()
    {
      
      var nabywca = document.getElementById("nabywca_in").value;
      document.getElementById("nabywca_ou").innerHTML = nabywca;
      document.getElementById("nabywca_ou_podglad").innerHTML = nabywca;

    var cena_brutto1_in = parseFloat(document.getElementById("cena_brutto1_in").value);
    var ilosc1_in = parseFloat(document.getElementById("ilosc1_in").value);
    var wartoscbrutto1_ou = document.getElementById("wartoscbrutto1_ou");
    var wartoscbrutto1_ou_podglad = document.getElementById("wartoscbrutto1_ou_podglad");
    var wartoscbrutto1_wynik = cena_brutto1_in * ilosc1_in;
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscbrutto1_ou.textContent = "";
   }
   else{
    wartoscbrutto1_ou.textContent = wartoscbrutto1_wynik.toFixed(2) + ' zł';
    wartoscbrutto1_ou_podglad.textContent = wartoscbrutto1_wynik.toFixed(2) + ' zł';
   }
    var ilosc1_ou = document.getElementById("ilosc1_ou");
    var ilosc1_ou_podglad = document.getElementById("ilosc1_ou_podglad");
    
    if (isNaN(wartoscbrutto1_wynik)) {
      ilosc1_ou.textContent = "";
   }
   else{
    ilosc1_ou.textContent = ilosc1_in;
    ilosc1_ou_podglad.textContent = ilosc1_in;
   }
    var stawkavat1_in = document.getElementById("stawkavat1_in").value
    var stawkavat1_ou = document.getElementById("stawkavat1_ou");
    var stawkavat1_ou_podglad = document.getElementById("stawkavat1_ou_podglad");
    
    if (isNaN(wartoscbrutto1_wynik)) {
      stawkavat1_ou.textContent = "";
    }
    else{
      stawkavat1_ou.textContent = stawkavat1_in + '%';
      stawkavat1_ou_podglad.textContent = stawkavat1_in + '%';
    }
    var cenanetto1_ou = document.getElementById("cenanetto1_ou");
    var cenanetto1_ou_podglad = document.getElementById("cenanetto1_ou_podglad");
    var cenanetto1_wynik = (wartoscbrutto1_wynik/(stawkavat1_in/100+1)/ilosc1_in);
    
    if (isNaN(wartoscbrutto1_wynik)) {
      cenanetto1_ou.textContent = "";
    }
    else{
      cenanetto1_ou.textContent = cenanetto1_wynik.toFixed(2) + ' zł';
      cenanetto1_ou_podglad.textContent = cenanetto1_wynik.toFixed(2) + ' zł';
    }
    var wartoscnetto1_ou = document.getElementById("wartoscnetto1_ou");
    var wartoscnetto1_ou_podglad = document.getElementById("wartoscnetto1_ou_podglad");
    var wartoscnetto1_wynik = (wartoscbrutto1_wynik/(stawkavat1_in/100+1));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscnetto1_ou.textContent = "";
    }
    else{
      wartoscnetto1_ou.textContent = wartoscnetto1_wynik.toFixed(2) + ' zł';
      wartoscnetto1_ou_podglad.textContent = wartoscnetto1_wynik.toFixed(2) + ' zł';
    }
    var wartoscvat1_ou = document.getElementById("wartoscvat1_ou");
    var wartoscvat1_ou_podglad = document.getElementById("wartoscvat1_ou_podglad");
    var wartoscvat1_wynik = (wartoscbrutto1_wynik-(cenanetto1_wynik*ilosc1_in));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscvat1_ou.textContent = "";
    }
    else{
      wartoscvat1_ou.textContent = wartoscvat1_wynik.toFixed(2) + ' zł';
      wartoscvat1_ou_podglad.textContent = wartoscvat1_wynik.toFixed(2) + ' zł';
    }

    var stawkavat2_ou = document.getElementById("stawkavat2_ou");
    var stawkavat2_ou_podglad = document.getElementById("stawkavat2_ou_podglad");
    
    if (isNaN(wartoscbrutto1_wynik)) {
      stawkavat2_ou.textContent = "";
    }
    else{
      stawkavat2_ou.textContent = stawkavat1_in + '%';
      stawkavat2_ou_podglad.textContent = stawkavat1_in + '%';
    }
    var cena_brutto2_in = parseFloat(document.getElementById("cena_brutto2_in").value);
    var cena_brutto2_ou = document.getElementById("cena_brutto2_ou");
    var cena_brutto2_ou_podglad = document.getElementById("cena_brutto2_ou_podglad");
    
    if (isNaN(wartoscbrutto1_wynik)) {
      cena_brutto2_ou.textContent = "";
    }
    else{
      cena_brutto2_ou.textContent = cena_brutto2_in.toFixed(2) + ' zł';
      cena_brutto2_ou_podglad.textContent = cena_brutto2_in.toFixed(2) + ' zł';
    }
    var cenanetto2_ou = document.getElementById("cenanetto2_ou");
    var cenanetto2_ou_podglad = document.getElementById("cenanetto2_ou_podglad");
    var cenanetto2_wynik = (cena_brutto2_in/(stawkavat1_in/100+1));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      cenanetto2_ou.textContent = "";
    }
    else{
      cenanetto2_ou.textContent = cenanetto2_wynik.toFixed(2) + ' zł';
      cenanetto2_ou_podglad.textContent = cenanetto2_wynik.toFixed(2) + ' zł';
    }
    var wartoscnetto2_ou = document.getElementById("wartoscnetto2_ou");
    var wartoscnetto2_ou_podglad = document.getElementById("wartoscnetto2_ou_podglad");
    var wartoscnetto2_wynik = (cena_brutto2_in/(stawkavat1_in/100+1));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscnetto2_ou.textContent = "";
    }
    else{
      wartoscnetto2_ou.textContent = wartoscnetto2_wynik.toFixed(2) + ' zł';
      wartoscnetto2_ou_podglad.textContent = wartoscnetto2_wynik.toFixed(2) + ' zł';
    }
    var wartoscvat2_ou = document.getElementById("wartoscvat2_ou");
    var wartoscvat2_ou_podglad = document.getElementById("wartoscvat2_ou_podglad");
    var wartoscvat2_wynik = (cena_brutto2_in-(cenanetto2_wynik));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscvat2_ou.textContent = "";
    }
    else{
      wartoscvat2_ou.textContent = wartoscvat2_wynik.toFixed(2) + ' zł';
      wartoscvat2_ou_podglad.textContent = wartoscvat2_wynik.toFixed(2) + ' zł';
    }

    var stawkavat3_ou = document.getElementById("stawkavat3_ou");
    var stawkavat3_ou_podglad = document.getElementById("stawkavat3_ou_podglad");
    
    if (isNaN(wartoscbrutto1_wynik)) {
      stawkavat3_ou.textContent = "";
    }
    else{
      stawkavat3_ou.textContent = stawkavat1_in + '%';
      stawkavat3_ou_podglad.textContent = stawkavat1_in + '%';
    }
    var wartoscnetto3_ou = document.getElementById("wartoscnetto3_ou");
    var wartoscnetto3_ou_podglad = document.getElementById("wartoscnetto3_ou_podglad");
    var wartoscnetto3_wynik = (wartoscnetto2_wynik+(wartoscnetto1_wynik));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscnetto3_ou.textContent = ""; 
    }
    else{
      wartoscnetto3_ou.textContent = wartoscnetto3_wynik.toFixed(2) + ' zł'; 
      wartoscnetto3_ou_podglad.textContent = wartoscnetto3_wynik.toFixed(2) + ' zł'; 
    } 
    var wartoscvat3_ou = document.getElementById("wartoscvat3_ou");
    var wartoscvat3_ou_podglad = document.getElementById("wartoscvat3_ou_podglad");
    var wartoscvat3_wynik = ((ilosc1_in*wartoscvat1_wynik)+(wartoscvat2_wynik));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscvat3_ou.textContent = "";
    }
    else{
      wartoscvat3_ou.textContent = wartoscvat3_wynik.toFixed(2) + ' zł';
      wartoscvat3_ou_podglad.textContent = wartoscvat3_wynik.toFixed(2) + ' zł';
    }
    var do_zaplaty_ou = document.getElementById("do_zaplaty_ou");
    var do_zaplaty_ou_podglad = document.getElementById("do_zaplaty_ou_podglad");

    var wartoscbrutto3_ou = document.getElementById("wartoscbrutto3_ou");
    var wartoscbrutto3_ou_podglad = document.getElementById("wartoscbrutto3_ou_podglad");

    var wartoscbrutto4_ou = document.getElementById("wartoscbrutto4_ou");
    var wartoscbrutto4_ou_podglad = document.getElementById("wartoscbrutto4_ou_podglad");

    var wartoscbrutto3_wynik = (cena_brutto2_in+(wartoscbrutto1_wynik));
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscbrutto3_ou.textContent = "";
    wartoscbrutto4_ou.textContent = "";
    do_zaplaty_ou.textContent = "";
    liczbunia = parseFloat(wartoscbrutto3_wynik).toFixed(2);
    }
    else{
      wartoscbrutto3_ou.textContent = parseFloat(wartoscbrutto3_wynik).toFixed(2) + ' zł';
      wartoscbrutto3_ou_podglad.textContent = parseFloat(wartoscbrutto3_wynik).toFixed(2) + ' zł';

      wartoscbrutto4_ou.textContent = parseFloat(wartoscbrutto3_wynik).toFixed(2) + ' zł';
      wartoscbrutto4_ou_podglad.textContent = parseFloat(wartoscbrutto3_wynik).toFixed(2) + ' zł';

      do_zaplaty_ou.textContent = parseFloat(wartoscbrutto3_wynik).toFixed(2) + ' zł';
      do_zaplaty_ou_podglad.textContent = parseFloat(wartoscbrutto3_wynik).toFixed(2) + ' zł';

      liczbunia = parseFloat(wartoscbrutto3_wynik).toFixed(2);
    }
    var wartoscnetto4_ou = document.getElementById("wartoscnetto4_ou");
    var wartoscnetto4_ou_podglad = document.getElementById("wartoscnetto4_ou_podglad");
    var wartoscnetto4_wynik = (wartoscnetto2_wynik+(wartoscnetto1_wynik));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscnetto4_ou.textContent = "";  
    }
    else{
      wartoscnetto4_ou.textContent = wartoscnetto4_wynik.toFixed(2) + ' zł';
      wartoscnetto4_ou_podglad.textContent = wartoscnetto4_wynik.toFixed(2) + ' zł';
    }
    var wartoscvat4_ou = document.getElementById("wartoscvat4_ou");
    var wartoscvat4_ou_podglad = document.getElementById("wartoscvat4_ou_podglad");

    var wartoscvat4_wynik = ((ilosc1_in*wartoscvat1_wynik)+(wartoscvat2_wynik));
    
    if (isNaN(wartoscbrutto1_wynik)) {
      wartoscvat4_ou.textContent = "";
    }
    else{
      wartoscvat4_ou.textContent = wartoscvat4_wynik.toFixed(2) + ' zł';
      wartoscvat4_ou_podglad.textContent = wartoscvat4_wynik.toFixed(2) + ' zł';
    }

    }
    
  };

  document.getElementById("modal1").addEventListener("change", slowa);

  function slowa()
{
  var slownie_ou = document.getElementById("slownie_ou");
  var slownie_ou_podglad = document.getElementById("slownie_ou_podglad");
  
   var pole_liczba = liczbunia
   var pole_liczba = Math.floor(pole_liczba)
   
   var liczba = parseInt(pole_liczba);
   
   var jednosci = ["", " jeden", " dwa", " trzy", " cztery", " pięć", " sześć", " siedem", " osiem", " dziewięć"];
   var nascie = ["", " jedenaście", " dwanaście", " trzynaście", " czternaście", " piętnaście", " szesnaście", " siedemnaście", " osiemnaście", " dziewietnaście"];
   var dziesiatki = ["", " dziesięć", " dwadzieścia", " trzydzieści", " czterdzieści", " pięćdziesiąt", " sześćdziesiąt", " siedemdziesiąt", " osiemdziesiąt", " dziewięćdziesiąt"];
   var setki = ["", " sto", " dwieście", " trzysta", " czterysta", " pięćset", " sześćset", " siedemset", " osiemset", " dziewięćset"];
   var grupy = [
      ["" ,"" ,""],
      [" tysiąc" ," tysiące" ," tysięcy"],
      [" milion" ," miliony" ," milionów"],
      [" miliard"," miliardy"," miliardów"],
      [" bilion" ," biliony" ," bilionów"],
      [" biliard"," biliardy"," biliardów"],
      [" trylion"," tryliony"," trylionów"]];
             
   if (pole_liczba == liczba.toString()){
   	
      var wynik = '';
      var znak = '';
      if (liczba == 0)
         wynik = "zero";
      if (liczba < 0) {
         znak = "minus";
         liczba = -liczba;
      }
           
      var g = 0;
      while (liczba > 0) {
         var s = Math.floor((liczba % 1000)/100);
         var n = 0;
         var d = Math.floor((liczba % 100)/10);
         var j = Math.floor(liczba % 10);
              
         if (d == 1 && j>0) {
            n = j;
            d = 0;
            j = 0;
         }

         var k = 2;
         if (j == 1 && s+d+n == 0)
            k = 0;
         if (j == 2 || j == 3 || j == 4)
            k = 1;
         if (s+d+n+j > 0)
            wynik = setki[s]+dziesiatki[d]+nascie[n]+jednosci[j]+grupy[g][k]+wynik;

         g++;
         liczba = Math.floor(liczba/1000);
      }
      var string_wynik = (String(wynik))
      if(string_wynik.includes('zło')){
        slownie_ou.textContent = (znak + wynik);
     }
     else{
      slownie_ou.textContent = (znak + wynik) + ' złotych';
      slownie_ou_podglad.textContent = (znak + wynik) + ' złotych';
     }
   }
   else  {
    if(liczbunia >= 0){
      alert("Podano nieprawidlowa wartosc!");
      pole_liczba.focus();
    }
    else {
      return
    }
  }
  return false;
}

var slownie_gr_ou = document.getElementById("slownie_gr_ou");
var slownie_gr_ou_podglad = document.getElementById("slownie_gr_ou_podglad");
document.getElementById("modal1").addEventListener("change", grosze);

function grosze()
{
  var zl = liczbunia * 100
  zl.toFixed(0)
  
  var gr = Math.floor(liczbunia) * 100
  gr.toFixed(0)
  
  var grosze = zl - gr
  
  slownie_gr_ou.textContent = ' ' + grosze + '/' + "100";
  slownie_gr_ou_podglad.textContent = ' ' + grosze + '/' + "100";

};

document.getElementById("test").addEventListener("click", Convert_HTML_To_PDF);



function Convert_HTML_To_PDF() {
  var elementHTML = document.getElementById('contentToPrint');

  html2canvas(elementHTML, {
    useCORS: true,
    onrendered: function(canvas) {
      var pdf = new jsPDF('p', 'pt', 'letter');

      var pageHeight = 980;
      var pageWidth = 900;
      for (var i = 0; i <= elementHTML.clientHeight / pageHeight; i++) {
        var srcImg = canvas;
        var sX = 0;
        var sY = pageHeight * i;
        var sWidth = pageWidth;
        var sHeight = pageHeight;
        var dX = 0;
        var dY = 0;
        var dWidth = pageWidth;
        var dHeight = pageHeight;

        window.onePageCanvas = document.createElement("canvas");
        onePageCanvas.setAttribute('width', pageWidth);
        onePageCanvas.setAttribute('height', pageHeight);
        var ctx = onePageCanvas.getContext('2d');
        ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

        var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
        var width = onePageCanvas.width;
        var height = onePageCanvas.clientHeight;

        if (i > 0)
          pdf.addPage(612, 864);

        pdf.setPage(i + 1);
        pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62));
      }
			
      pdf.save('document.pdf');
    }
  });
}

document.getElementById("podglad_faktur_disabled").addEventListener("click", podglad_faktur_modal_open);
  
  function podglad_faktur_modal_open() {
    var a = document.getElementById("podglad_faktur_disabled");
    var b = document.getElementById("podglad_faktur_active");
    var c = document.getElementById("podglad_faktur_modal");

    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'block';
  }

  document.getElementById("podglad_faktur_active").addEventListener("click", podglad_faktur_modal_close);
  
  function podglad_faktur_modal_close() {
    var a = document.getElementById("podglad_faktur_disabled");
    var b = document.getElementById("podglad_faktur_active");
    var c = document.getElementById("podglad_faktur_modal");

    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
  }

  document.getElementById("konto").addEventListener("click", konto);
  function displayData() {
{
var nr_faktury_ou = document.getElementById("nr_faktury_ou").value;
var Data_ou1 = document.getElementById("Data_ou1").value;
}
{
  var do_zaplaty_ou = document.getElementById("do_zaplaty_ou").value;
}
{
  var nabywca_ou = document.getElementById("nabywca_ou").value;
  var nabywca_string = (String(nabywca_ou))
}

{
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    const pokaz = document.getElementById("pokaz");
    newDiv.innerHTML = `Numer: ${nr_faktury_ou} | Data: ${Data_ou1} | Dozaplaty: ${do_zaplaty_ou} | Nabywaca: ${nabywca_string}`;
    pokaz.appendChild(newDiv);
    console.log(newDiv);
  
}
}


var printContent = document.getElementById("printContent")

function printDivContent()
{
  setTimeout(() => {
    
    var mywindow = window.open('', 'PRINT', ' width: 21cm; height: 29.7cm');

    mywindow.document.write('<html><head>');
    mywindow.document.write('<link rel="stylesheet" href="./print.css">')
    mywindow.document.write('</head><body onload="window.print()">');
    mywindow.document.write(document.getElementById('printContent').innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();


    setTimeout(function () {
    
    }, 2000)
    return true;
  }, 500);
}

function podgladwydruku() {
  var sidebar_navigation = document.getElementById("sidebar_navigation")
  
  var mydiv = document.getElementById("mydiv")
  var invoice = document.getElementById("invoice")
  sidebar_navigation.style.display = "none"
  invoice.style.display = "none"
  mydiv.style.display = "block"
}
document.getElementById("mydivheader").addEventListener("dblclick", re_zoom);

function re_zoom(){
  document.getElementById("mydiv").style.width = "530px";
  document.getElementById("mydiv").style.height = "749.57px";
}

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.onclick = hideMenu; 
document.oncontextmenu = rightClick; 

 function hideMenu() { 
     document.getElementById("contextMenu") 
             .style.display = "none" 
 } 

 function rightClick(e) { 
     e.preventDefault(); 

     if (document.getElementById("contextMenu") .style.display == "block"){ 
         hideMenu(); 
     }else{ 
         var menu = document.getElementById("contextMenu")      
         menu.style.display = 'block'; 
         menu.style.left = e.pageX + "px"; 
         menu.style.top = e.pageY + "px"; 
     } 
 } 
