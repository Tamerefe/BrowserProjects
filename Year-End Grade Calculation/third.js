function fm() {

  // Matematik

  var Notm = document.getElementById("Not1").value;
  Notm = parseInt(Notm);
  var Notm1 = document.getElementById("Not1.1").value;
  Notm1 = parseInt(Notm1);
  var Notm2 = document.getElementById("Not1.2").value;
  Notm2 = parseInt(Notm2);
  var Notm3 = document.getElementById("Not1.3").value;
  Notm3 = parseInt(Notm3);  
  var Notm4 = document.getElementById("Not1.4").value;
  Notm4 = parseInt(Notm4);    

  //Notm And Notm2 Compulsory
  var Notmfm = Notm + Notm1 + Notm2 + Notm3 + Notm4;
  if(Notm !== Notm){
    document.getElementById("Notum1").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notm2 !== Notm2){
    document.getElementById("Notum1").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notm1 !== Notm1){
    Notmfm = Notm + Notm2 + Notm3 + Notm4;
    Notmfm = Notmfm/4;
      if(Notm3 !== Notm3){
        Notmfm = Notm + Notm2 + Notm4;
        Notmfm = Notmfm/3;
        if(Notm4 !== Notm4){
          Notmfm = Notm + Notm2;
          Notmfm = Notmfm/2;
        }
      }  
      else if(Notm4 !== Notm4){
        Notmfm = Notm + Notm2 + Notm3;
        Notmfm = Notmfm/3;
      }      
    document.getElementById("Notum1").innerHTML = Notmfm;   
  } else if(Notm3 !== Notm3){
    Notmfm = Notm + Notm1 + Notm2 + Notm4;
    Notmfm = Notmfm/4;
      if(Notm4 !== Notm4){
        Notmfm = Notm + Notm1 + Notm2;
        Notmfm = Notmfm/3;
      }
    document.getElementById("Notum1").innerHTML = Notmfm;
  } else if(Notm4 !== Notm4){
    Notmfm = Notm + Notm1 + Notm2 + Notm3;
    Notmfm = Notmfm/4;
    document.getElementById("Notum1").innerHTML = Notmfm;
  } else{
    Notmfm = Notmfm/5;
    document.getElementById("Notum1").innerHTML = Notmfm;
  }

  // Edebiyat

  var Note = document.getElementById("Not2").value;
  Note = parseInt(Note);
  var Note1 = document.getElementById("Not2.1").value;
  Note1 = parseInt(Note1);
  var Note2 = document.getElementById("Not2.2").value;
  Note2 = parseInt(Note2);
  var Note3 = document.getElementById("Not2.3").value;
  Note3 = parseInt(Note3);  
  var Note4 = document.getElementById("Not2.4").value;
  Note4 = parseInt(Note4);    

  //Note And Note2 Compulsory
  var Notefm = Note + Note1 + Note2 + Note3 + Note4;
  if(Note !== Note){
    document.getElementById("Notum2").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Note2 !== Note2){
    document.getElementById("Notum2").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Note1 !== Note1){
    Notefm = Note + Note2 + Note3 + Note4;
    Notefm = Notefm/4;
      if(Note3 !== Note3){
        Notefm = Note + Note2 + Note4;
        Notefm = Notefm/3;
        if(Note4 !== Note4){
          Notefm = Note + Note2;
          Notefm = Notefm/2;
        }
      }  
      else if(Note4 !== Note4){
        Notefm = Note + Note2 + Note3;
        Notefm = Notefm/3;
      }      
    document.getElementById("Notum2").innerHTML = Notefm;   
  } else if(Note3 !== Note3){
    Notefm = Note + Note1 + Note2 + Note4;
    Notefm = Notefm/4;
      if(Note4 !== Note4){
        Notefm = Note + Note1 + Note2;
        Notefm = Notefm/3;
      }
    document.getElementById("Notum2").innerHTML = Notefm;
  } else if(Note4 !== Note4){
    Notefm = Note + Note1 + Note2 + Note3;
    Notefm = Notefm/4;
    document.getElementById("Notum2").innerHTML = Notefm;
  } else{
    Notefm = Notefm/5;
    document.getElementById("Notum2").innerHTML = Notefm;
  }  

  // Kimya

  var Notk = document.getElementById("Not3").value;
  Notk = parseInt(Notk);
  var Notk1 = document.getElementById("Not3.1").value;
  Notk1 = parseInt(Notk1);
  var Notk2 = document.getElementById("Not3.2").value;
  Notk2 = parseInt(Notk2);
  var Notk3 = document.getElementById("Not3.3").value;
  Notk3 = parseInt(Notk3);  
  var Notk4 = document.getElementById("Not3.4").value;
  Notk4 = parseInt(Notk4);    

  //Notk And Notk2 Compulsory
  var Notkfm = Notk + Notk1 + Notk2 + Notk3 + Notk4;
  if(Notk !== Notk){
    document.getElementById("Notum3").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notk2 !== Notk2){
    document.getElementById("Notum3").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notk1 !== Notk1){
    Notkfm = Notk + Notk2 + Notk3 + Notk4;
    Notkfm = Notkfm/4;
      if(Notk3 !== Notk3){
        Notkfm = Notk + Notk2 + Notk4;
        Notkfm = Notkfm/3;
        if(Notk4 !== Notk4){
          Notkfm = Notk + Notk2;
          Notkfm = Notkfm/2;
        }
      }  
      else if(Notk4 !== Notk4){
        Notkfm = Notk + Notk2 + Notk3;
        Notkfm = Notkfm/3;
      }      
    document.getElementById("Notum3").innerHTML = Notkfm;   
  } else if(Notk3 !== Notk3){
    Notkfm = Notk + Notk1 + Notk2 + Notk4;
    Notkfm = Notkfm/4;
      if(Notk4 !== Notk4){
        Notkfm = Notk + Notk1 + Notk2;
        Notkfm = Notkfm/3;
      }
    document.getElementById("Notum3").innerHTML = Notkfm;
  } else if(Notk4 !== Notk4){
    Notkfm = Notk + Notk1 + Notk2 + Notk3;
    Notkfm = Notkfm/4;
    document.getElementById("Notum3").innerHTML = Notkfm;
  } else{
    Notkfm = Notkfm/5;
    document.getElementById("Notum3").innerHTML = Notkfm;
  }  

  // Fizik

  var Notf = document.getElementById("Not4").value;
  Notf = parseInt(Notf);
  var Notf1 = document.getElementById("Not4.1").value;
  Notf1 = parseInt(Notf1);
  var Notf2 = document.getElementById("Not4.2").value;
  Notf2 = parseInt(Notf2);
  var Notf3 = document.getElementById("Not4.3").value;
  Notf3 = parseInt(Notf3);  
  var Notf4 = document.getElementById("Not4.4").value;
  Notf4 = parseInt(Notf4);    

  //Notf And Notf2 Compulsory
  var Notffm = Notf + Notf1 + Notf2 + Notf3 + Notf4;
  if(Notf !== Notf){
    document.getElementById("Notum4").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notf2 !== Notf2){
    document.getElementById("Notum4").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notf1 !== Notf1){
    Notffm = Notf + Notf2 + Notf3 + Notf4;
    Notffm = Notffm/4;
      if(Notf3 !== Notf3){
        Notffm = Notf + Notf2 + Notf4;
        Notffm = Notffm/3;
        if(Notf4 !== Notf4){
          Notffm = Notf + Notf2;
          Notffm = Notffm/2;
        }
      }  
      else if(Notf4 !== Notf4){
        Notffm = Notf + Notf2 + Notf3;
        Notffm = Notffm/3;
      }      
    document.getElementById("Notum4").innerHTML = Notffm;   
  } else if(Notf3 !== Notf3){
    Notffm = Notf + Notf1 + Notf2 + Notf4;
    Notffm = Notffm/4;
      if(Notf4 !== Notf4){
        Notffm = Notf + Notf1 + Notf2;
        Notffm = Notffm/3;
      }
    document.getElementById("Notum4").innerHTML = Notffm;
  } else if(Notf4 !== Notf4){
    Notffm = Notf + Notf1 + Notf2 + Notf3;
    Notffm = Notffm/4;
    document.getElementById("Notum4").innerHTML = Notffm;
  } else{
    Notffm = Notffm/5;
    document.getElementById("Notum4").innerHTML = Notffm;
  }

  // Biyoloji

  var Notb = document.getElementById("Not5").value;
  Notb = parseInt(Notb);
  var Notb1 = document.getElementById("Not5.1").value;
  Notb1 = parseInt(Notb1);
  var Notb2 = document.getElementById("Not5.2").value;
  Notb2 = parseInt(Notb2);
  var Notb3 = document.getElementById("Not5.3").value;
  Notb3 = parseInt(Notb3);  
  var Notb4 = document.getElementById("Not5.4").value;
  Notb4 = parseInt(Notb4);    

  //Notb And Notb2 Compulsory
  var Notbfm = Notb + Notb1 + Notb2 + Notb3 + Notb4;
  if(Notb !== Notb){
    document.getElementById("Notum5").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notb2 !== Notb2){
    document.getElementById("Notum5").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notb1 !== Notb1){
    Notbfm = Notb + Notb2 + Notb3 + Notb4;
    Notbfm = Notbfm/4;
      if(Notb3 !== Notb3){
        Notbfm = Notb + Notb2 + Notb4;
        Notbfm = Notbfm/3;
        if(Notb4 !== Notb4){
          Notbfm = Notb + Notb2;
          Notbfm = Notbfm/2;
        }
      }  
      else if(Notb4 !== Notb4){
        Notbfm = Notb + Notb2 + Notb3;
        Notbfm = Notbfm/3;
      }      
    document.getElementById("Notum5").innerHTML = Notbfm;   
  } else if(Notb3 !== Notb3){
    Notbfm = Notb + Notb1 + Notb2 + Notb4;
    Notbfm = Notbfm/4;
      if(Notb4 !== Notb4){
        Notbfm = Notb + Notb1 + Notb2;
        Notbfm = Notbfm/3;
      }
    document.getElementById("Notum5").innerHTML = Notbfm;
  } else if(Notb4 !== Notb4){
    Notbfm = Notb + Notb1 + Notb2 + Notb3;
    Notbfm = Notbfm/4;
    document.getElementById("Notum5").innerHTML = Notbfm;
  } else{
    Notbfm = Notbfm/5;
    document.getElementById("Notum5").innerHTML = Notbfm;
  }  

  // Tarih

  var Nott = document.getElementById("Not6").value;
  Nott = parseInt(Nott);
  var Nott1 = document.getElementById("Not6.1").value;
  Nott1 = parseInt(Nott1);
  var Nott2 = document.getElementById("Not6.2").value;
  Nott2 = parseInt(Nott2);
  var Nott3 = document.getElementById("Not6.3").value;
  Nott3 = parseInt(Nott3);  
  var Nott4 = document.getElementById("Not6.4").value;
  Nott4 = parseInt(Nott4);    

  //Nott And Nott2 Compulsory
  var Nottfm = Nott + Nott1 + Nott2 + Nott3 + Nott4;
  if(Nott !== Nott){
    document.getElementById("Notum6").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Nott2 !== Nott2){
    document.getElementById("Notum6").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Nott1 !== Nott1){
    Nottfm = Nott + Nott2 + Nott3 + Nott4;
    Nottfm = Nottfm/4;
      if(Nott3 !== Nott3){
        Nottfm = Nott + Nott2 + Nott4;
        Nottfm = Nottfm/3;
        if(Nott4 !== Nott4){
          Nottfm = Nott + Nott2;
          Nottfm = Nottfm/2;
        }
      }  
      else if(Nott4 !== Nott4){
        Nottfm = Nott + Nott2 + Nott3;
        Nottfm = Nottfm/3;
      }      
    document.getElementById("Notum6").innerHTML = Nottfm;   
  } else if(Nott3 !== Nott3){
    Nottfm = Nott + Nott1 + Nott2 + Nott4;
    Nottfm = Nottfm/4;
      if(Nott4 !== Nott4){
        Nottfm = Nott + Nott1 + Nott2;
        Nottfm = Nottfm/3;
      }
    document.getElementById("Notum6").innerHTML = Nottfm;
  } else if(Nott4 !== Nott4){
    Nottfm = Nott + Nott1 + Nott2 + Nott3;
    Nottfm = Nottfm/4;
    document.getElementById("Notum6").innerHTML = Nottfm;
  } else{
    Nottfm = Nottfm/5;
    document.getElementById("Notum6").innerHTML = Nottfm;
  }   

  // Çoğrafya

  var Notc = document.getElementById("Not7").value;
  Notc = parseInt(Notc);
  var Notc1 = document.getElementById("Not7.1").value;
  Notc1 = parseInt(Notc1);
  var Notc2 = document.getElementById("Not7.2").value;
  Notc2 = parseInt(Notc2);
  var Notc3 = document.getElementById("Not7.3").value;
  Notc3 = parseInt(Notc3);  
  var Notc4 = document.getElementById("Not7.4").value;
  Notc4 = parseInt(Notc4);    

  //Notc And Notc2 Compulsory
  var Notcfm = Notc + Notc1 + Notc2 + Notc3 + Notc4;
  if(Notc !== Notc){
    document.getElementById("Notum7").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notc2 !== Notc2){
    document.getElementById("Notum7").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notc1 !== Notc1){
    Notcfm = Notc + Notc2 + Notc3 + Notc4;
    Notcfm = Notcfm/4;
      if(Notc3 !== Notc3){
        Notcfm = Notc + Notc2 + Notc4;
        Notcfm = Notcfm/3;
        if(Notc4 !== Notc4){
          Notcfm = Notc + Notc2;
          Notcfm = Notcfm/2;
        }
      }  
      else if(Notc4 !== Notc4){
        Notcfm = Notc + Notc2 + Notc3;
        Notcfm = Notcfm/3;
      }      
    document.getElementById("Notum7").innerHTML = Notcfm;   
  } else if(Notc3 !== Notc3){
    Notcfm = Notc + Notc1 + Notc2 + Notc4;
    Notcfm = Notcfm/4;
      if(Notc4 !== Notc4){
        Notcfm = Notc + Notc1 + Notc2;
        Notcfm = Notcfm/3;
      }
    document.getElementById("Notum7").innerHTML = Notcfm;
  } else if(Notc4 !== Notc4){
    Notcfm = Notc + Notc1 + Notc2 + Notc3;
    Notcfm = Notcfm/4;
    document.getElementById("Notum7").innerHTML = Notcfm;
  } else{
    Notcfm = Notcfm/5;
    document.getElementById("Notum7").innerHTML = Notcfm;
  }  

  // İngilizce

  var Noti = document.getElementById("Not8").value;
  Noti = parseInt(Noti);
  var Noti1 = document.getElementById("Not8.1").value;
  Noti1 = parseInt(Noti1);
  var Noti2 = document.getElementById("Not8.2").value;
  Noti2 = parseInt(Noti2);
  var Noti3 = document.getElementById("Not8.3").value;
  Noti3 = parseInt(Noti3);  
  var Noti4 = document.getElementById("Not8.4").value;
  Noti4 = parseInt(Noti4);    

  //Noti And Noti2 Compulsory
  var Notifm = Noti + Noti1 + Noti2 + Noti3 + Noti4;
  if(Noti !== Noti){
    document.getElementById("Notum8").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Noti2 !== Noti2){
    document.getElementById("Notum8").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Noti1 !== Noti1){
    Notifm = Noti + Noti2 + Noti3 + Noti4;
    Notifm = Notifm/4;
      if(Noti3 !== Noti3){
        Notifm = Noti + Noti2 + Noti4;
        Notifm = Notifm/3;
        if(Noti4 !== Noti4){
          Notifm = Noti + Noti2;
          Notifm = Notifm/2;
        }
      }  
      else if(Noti4 !== Noti4){
        Notifm = Noti + Noti2 + Noti3;
        Notifm = Notifm/3;
      }      
    document.getElementById("Notum8").innerHTML = Notifm;   
  } else if(Noti3 !== Noti3){
    Notifm = Noti + Noti1 + Noti2 + Noti4;
    Notifm = Notifm/4;
      if(Noti4 !== Noti4){
        Notifm = Noti + Noti1 + Noti2;
        Notifm = Notifm/3;
      }
    document.getElementById("Notum8").innerHTML = Notifm;
  } else if(Noti4 !== Noti4){
    Notifm = Noti + Noti1 + Noti2 + Noti3;
    Notifm = Notifm/4;
    document.getElementById("Notum8").innerHTML = Notifm;
  } else{
    Notifm = Notifm/5;
    document.getElementById("Notum8").innerHTML = Notifm;
  }

  // Almanca

  var Nota = document.getElementById("Not9").value;
  Nota = parseInt(Nota);
  var Nota1 = document.getElementById("Not9.1").value;
  Nota1 = parseInt(Nota1);
  var Nota2 = document.getElementById("Not9.2").value;
  Nota2 = parseInt(Nota2);
  var Nota3 = document.getElementById("Not9.3").value;
  Nota3 = parseInt(Nota3);  
  var Nota4 = document.getElementById("Not9.4").value;
  Nota4 = parseInt(Nota4);    

  //Nota And Nota2 Compulsory
  var Notafm = Nota + Nota1 + Nota2 + Nota3 + Nota4;
  if(Nota !== Nota){
    document.getElementById("Notum9").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Nota2 !== Nota2){
    document.getElementById("Notum9").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Nota1 !== Nota1){
    Notafm = Nota + Nota2 + Nota3 + Nota4;
    Notafm = Notafm/4;
      if(Nota3 !== Nota3){
        Notafm = Nota + Nota2 + Nota4;
        Notafm = Notafm/3;
        if(Nota4 !== Nota4){
          Notafm = Nota + Nota2;
          Notafm = Notafm/2;
        }
      }  
      else if(Nota4 !== Nota4){
        Notafm = Nota + Nota2 + Nota3;
        Notafm = Notafm/3;
      }      
    document.getElementById("Notum9").innerHTML = Notafm;   
  } else if(Nota3 !== Nota3){
    Notafm = Nota + Nota1 + Nota2 + Nota4;
    Notafm = Notafm/4;
      if(Nota4 !== Nota4){
        Notafm = Nota + Nota1 + Nota2;
        Notafm = Notafm/3;
      }
    document.getElementById("Notum9").innerHTML = Notafm;
  } else if(Nota4 !== Nota4){
    Notafm = Nota + Nota1 + Nota2 + Nota3;
    Notafm = Notafm/4;
    document.getElementById("Notum9").innerHTML = Notafm;
  } else{
    Notafm = Notafm/5;
    document.getElementById("Notum9").innerHTML = Notafm;
  }  

  // Din

  var Notd = document.getElementById("Not10").value;
  Notd = parseInt(Notd);
  var Notd1 = document.getElementById("Not10.1").value;
  Notd1 = parseInt(Notd1);
  var Notd2 = document.getElementById("Not10.2").value;
  Notd2 = parseInt(Notd2);
  var Notd3 = document.getElementById("Not10.3").value;
  Notd3 = parseInt(Notd3);  
  var Notd4 = document.getElementById("Not10.4").value;
  Notd4 = parseInt(Notd4);    

  //Notd And Notd2 Compulsory
  var Notdfm = Notd + Notd1 + Notd2 + Notd3 + Notd4;
  if(Notd !== Notd){
    document.getElementById("Notum10").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notd2 !== Notd2){
    document.getElementById("Notum10").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notd1 !== Notd1){
    Notdfm = Notd + Notd2 + Notd3 + Notd4;
    Notdfm = Notdfm/4;
      if(Notd3 !== Notd3){
        Notdfm = Notd + Notd2 + Notd4;
        Notdfm = Notdfm/3;
        if(Notd4 !== Notd4){
          Notdfm = Notd + Notd2;
          Notdfm = Notdfm/2;
        }
      }  
      else if(Notd4 !== Notd4){
        Notdfm = Notd + Notd2 + Notd3;
        Notdfm = Notdfm/3;
      }      
    document.getElementById("Notum10").innerHTML = Notdfm;   
  } else if(Notd3 !== Notd3){
    Notdfm = Notd + Notd1 + Notd2 + Notd4;
    Notdfm = Notdfm/4;
      if(Notd4 !== Notd4){
        Notdfm = Notd + Notd1 + Notd2;
        Notdfm = Notdfm/3;
      }
    document.getElementById("Notum10").innerHTML = Notdfm;
  } else if(Notd4 !== Notd4){
    Notdfm = Notd + Notd1 + Notd2 + Notd3;
    Notdfm = Notdfm/4;
    document.getElementById("Notum10").innerHTML = Notdfm;
  } else{
    Notdfm = Notdfm/5;
    document.getElementById("Notum10").innerHTML = Notdfm;
  } 
  
  // Beden

  var Notbb = document.getElementById("Not11").value;
  Notbb = parseInt(Notbb);
  var Notbb1 = document.getElementById("Not11.1").value;
  Notbb1 = parseInt(Notbb1);
  var Notbb2 = document.getElementById("Not11.2").value;
  Notbb2 = parseInt(Notbb2);
  var Notbb3 = document.getElementById("Not11.3").value;
  Notbb3 = parseInt(Notbb3);  
  var Notbb4 = document.getElementById("Not11.4").value;
  Notbb4 = parseInt(Notbb4);    

  //Notbb And Notbb2 Compulsory
  var Notbbfm = Notbb + Notbb1 + Notbb2 + Notbb3 + Notbb4;
  if(Notbb !== Notbb){
    document.getElementById("Notum11").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notbb2 !== Notbb2){
    document.getElementById("Notum11").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notbb1 !== Notbb1){
    Notbbfm = Notbb + Notbb2 + Notbb3 + Notbb4;
    Notbbfm = Notbbfm/4;
      if(Notbb3 !== Notbb3){
        Notbbfm = Notbb + Notbb2 + Notbb4;
        Notbbfm = Notbbfm/3;
        if(Notbb4 !== Notbb4){
          Notbbfm = Notbb + Notbb2;
          Notbbfm = Notbbfm/2;
        }
      }  
      else if(Notbb4 !== Notbb4){
        Notbbfm = Notbb + Notbb2 + Notbb3;
        Notbbfm = Notbbfm/3;
      }      
    document.getElementById("Notum11").innerHTML = Notbbfm;   
  } else if(Notbb3 !== Notbb3){
    Notbbfm = Notbb + Notbb1 + Notbb2 + Notbb4;
    Notbbfm = Notbbfm/4;
      if(Notbb4 !== Notbb4){
        Notbbfm = Notbb + Notbb1 + Notbb2;
        Notbbfm = Notbbfm/3;
      }
    document.getElementById("Notum11").innerHTML = Notbbfm;
  } else if(Notbb4 !== Notbb4){
    Notbbfm = Notbb + Notbb1 + Notbb2 + Notbb3;
    Notbbfm = Notbbfm/4;
    document.getElementById("Notum11").innerHTML = Notbbfm;
  } else{
    Notbbfm = Notbbfm/5;
    document.getElementById("Notum11").innerHTML = Notbbfm;
  } 

  // Resim / Müzik

  var Notrm = document.getElementById("Not12").value;
  Notrm = parseInt(Notrm);
  var Notrm1 = document.getElementById("Not12.1").value;
  Notrm1 = parseInt(Notrm1);
  var Notrm2 = document.getElementById("Not12.2").value;
  Notrm2 = parseInt(Notrm2);
  var Notrm3 = document.getElementById("Not12.3").value;
  Notrm3 = parseInt(Notrm3);  
  var Notrm4 = document.getElementById("Not12.4").value;
  Notrm4 = parseInt(Notrm4);    

  //Notrm And Notrm2 Compulsory
  var Notrmfm = Notrm + Notrm1 + Notrm2 + Notrm3 + Notrm4;
  if(Notrm !== Notrm){
    document.getElementById("Notum12").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notrm2 !== Notrm2){
    document.getElementById("Notum12").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notrm1 !== Notrm1){
    Notrmfm = Notrm + Notrm2 + Notrm3 + Notrm4;
    Notrmfm = Notrmfm/4;
      if(Notrm3 !== Notrm3){
        Notrmfm = Notrm + Notrm2 + Notrm4;
        Notrmfm = Notrmfm/3;
        if(Notrm4 !== Notrm4){
          Notrmfm = Notrm + Notrm2;
          Notrmfm = Notrmfm/2;
        }
      }  
      else if(Notrm4 !== Notrm4){
        Notrmfm = Notrm + Notrm2 + Notrm3;
        Notrmfm = Notrmfm/3;
      }      
    document.getElementById("Notum12").innerHTML = Notrmfm;   
  } else if(Notrm3 !== Notrm3){
    Notrmfm = Notrm + Notrm1 + Notrm2 + Notrm4;
    Notrmfm = Notrmfm/4;
      if(Notrm4 !== Notrm4){
        Notrmfm = Notrm + Notrm1 + Notrm2;
        Notrmfm = Notrmfm/3;
      }
    document.getElementById("Notum12").innerHTML = Notrmfm;
  } else if(Notrm4 !== Notrm4){
    Notrmfm = Notrm + Notrm1 + Notrm2 + Notrm3;
    Notrmfm = Notrmfm/4;
    document.getElementById("Notum12").innerHTML = Notrmfm;
  } else{
    Notrmfm = Notrmfm/5;
    document.getElementById("Notum12").innerHTML = Notrmfm;
  }   

  // Felsefe

  var Notft = document.getElementById("Not13").value;
  Notft = parseInt(Notft);
  var Notft1 = document.getElementById("Not13.1").value;
  Notft1 = parseInt(Notft1);
  var Notft2 = document.getElementById("Not13.2").value;
  Notft2 = parseInt(Notft2);
  var Notft3 = document.getElementById("Not13.3").value;
  Notft3 = parseInt(Notft3);  
  var Notft4 = document.getElementById("Not13.4").value;
  Notft4 = parseInt(Notft4);    

  //Notft And Notft2 Compulsory
  var Notftfm = Notft + Notft1 + Notft2 + Notft3 + Notft4;
  if(Notft !== Notft){
    document.getElementById("Notum13").innerHTML = "Lütfen 1. Sınav Notunuzu Giriniz";
  } else if(Notft2 !== Notft2){
    document.getElementById("Notum13").innerHTML = "Lütfen 1. Sözlü Notunuzu Giriniz";
  } else if(Notft1 !== Notft1){
    Notftfm = Notft + Notft2 + Notft3 + Notft4;
    Notftfm = Notftfm/4;
      if(Notft3 !== Notft3){
        Notftfm = Notft + Notft2 + Notft4;
        Notftfm = Notftfm/3;
        if(Notft4 !== Notft4){
          Notftfm = Notft + Notft2;
          Notftfm = Notftfm/2;
        }
      }  
      else if(Notft4 !== Notft4){
        Notftfm = Notft + Notft2 + Notft3;
        Notftfm = Notftfm/3;
      }      
    document.getElementById("Notum13").innerHTML = Notftfm;   
  } else if(Notft3 !== Notft3){
    Notftfm = Notft + Notft1 + Notft2 + Notft4;
    Notftfm = Notftfm/4;
      if(Notft4 !== Notft4){
        Notftfm = Notft + Notft1 + Notft2;
        Notftfm = Notftfm/3;
      }
    document.getElementById("Notum13").innerHTML = Notftfm;
  } else if(Notft4 !== Notft4){
    Notftfm = Notft + Notft1 + Notft2 + Notft3;
    Notftfm = Notftfm/4;
    document.getElementById("Notum13").innerHTML = Notftfm;
  } else{
    Notftfm = Notftfm/5;
    document.getElementById("Notum13").innerHTML = Notftfm;
  }

  

  var r1 = document.getElementById("R1").checked;
  var r2 = document.getElementById("R2").checked;
  var r3 = document.getElementById("R3").checked;

  console.log(r1);
  console.log(r2);
  console.log(r3);

  if(r1 == true){
    document.getElementById("Ananot").innerHTML = Notm*6/35 + Note*5/35 + Notf*2/35 + Notk*2/35 + Notb*2/35 + Nott*2/35 
  + Notc*2/35 + Noti*4/35 + Nota*2/35 + Notd*2/35 + Notbb*2/35 + Notrm*2/35 + Notft*2/35;
  }
  else if(r2 == true){
    document.getElementById("Ananot").innerHTML = Notm*6/39 + Note*5/39 + Notf*4/39 + Notk*4/39 + Notb*4/39 + Nott*2/39 
  + Noti*4/39 + Nota*2/39 + Notd*2/39 + Notbb*2/39 + Notrm*2/39 + Notft*2/39;
  }
  else if(r3 == true){
    document.getElementById("7d").style.display = "none";
    document.getElementById("7d").style.display = "none";
    document.getElementById("Ananot").innerHTML = Notm*6/37 + Note*5/37 + Notf*4/37 + Notk*4/37 + Notb*4/37 + Noti*4/37 
    + Nota*2/37 + Notd*2/37 + Notbb*2/37 + Notrm*2/37 + Notft*2/37;
  }
}


