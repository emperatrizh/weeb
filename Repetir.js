
var salario=new Array(5);
        var aumento=new Array(5);     
        var x=0;//inicializando

        while(x<salario.length)//comprobando
        {
            salario[x]=parseFloat(prompt("ingrese el salario"));
           aumento[x]=salario[x]*1.20;
            x++;
        }//fin while

        //mostrar el contenido de los arreglos
        var j=0;
        document.write("_______________________________________________________________<br>");
        document.write("SALARIO-----------------AUMENTO-------------- S.AUMENTADO 35%<br>");
        document.write("_______________________________________________________________<br>");
        
        while(j<salario.length)
        {
         document.write(salario[j]+"--------------------------------"+aumento[j]+"----------"+aumento[j]+"<br>");
         document.write("<br>");
         document.write("<br>");

         j++;
        }

        document.write("__________________________________________________________________");
