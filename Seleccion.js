 //declarando las varibales
 let servicio, forma, costo;
 //Captura de datos
 alert("Servicios disponibles");
 servicio=parseInt(prompt("Ingrese \n1-para el alisado \n2-uñas \n3-tinte \n4-corte de cabello"));

 while(servicio<1 || servicio>4)
     {
         servicio=parseInt(prompt("Ingrese \n1-para el alisado \n2-uñas \n3-tinte \n4-arreglo de cejas"));
     };

     forma=parseInt(prompt("Ingrese la forma de pago \n 1-credito\n 2-efectivo"));
     while(forma<1 || forma>2)
         {
             forma=parseInt(prompt("Ingrese la forma de pago \n 1-credito \n efectivo"));
         };
         //procesos
         switch(servicio){
             case 1:
                 costo=50;
                 break;
                 
             case 2:
                 costo=25;
                 break; 
              
             case 3:
                 costo=35;
                 break;  
                 
             case 4:
                 costo=27;
                 break;  
         
             case 5:
                 costo=17;
                 break;       
         };

         //impresion
         
         if(forma==1 && servicio==1)
         {
             document.write ("Usted se hizo un alisado <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write  ("El costo inicial del servicio es de"+costo+"<br>");  
             document.write ("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");  
             document.write ("El pago total sera de"+(costo*1.10));
             }
             else if(forma==1 && servicio==2)
             {
             document.write ("Usted se hizo uñas <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write  ("El costo inicial del servicio es de"+costo+"<br>");  
             document.write ("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");  
             document.write ("El pago total sera de"+(costo*1.10));
             }
             else if(forma==1 && servicio==3){
             document.write ("Usted se hizo un tinte <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write  ("El costo inicial del servicio es de"+costo+"<br>");  
             document.write ("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");  
             document.write ("El pago total sera de"+(costo*1.10));
             }
             else if(forma==1 && servicio==4){
             document.write ("Usted se hizo un corte de cabello <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write  ("El costo inicial del servicio es de"+costo+"<br>");  
             document.write ("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");  
             document.write ("El pago total sera de"+(costo*1.10));
             }
             else if(forma==2 && servicio==1){
             document.write ("Usted se hizo un alisado <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write ("El pago total sera de"+(costo));
             }
             else if(forma==2 && servicio==2){
             document.write ("Usted se hizo uñas <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write ("El pago total sera de"+(costo));
             }
             else if(forma==2 && servicio==3){
             document.write ("Usted se hizo un tinte <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write ("El pago total sera de"+(costo));
             }
             else if(forma==2 && servicio==4){
             document.write ("Usted se hizo un corte de cabello <br>");
             document.write  ("Usted a canselado con tarjeta de credito <br>");
             document.write  ("El costo inicial del servicio es de"+costo+"<br>");  
             document.write ("Se le hara un recargo del 10%"+(costo*0.10)+"<br>");  
             document.write ("El pago total sera de"+(costo*1.10));
             }
         