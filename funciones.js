//centido inverso

var inicio=10000;
var fin=100000;

function inverso()
{
    for(let index=fin; index>=inicio; index-=1000){
        document.write(index,"--");
    }
}

//Imprimir la valores de 10000 hasta 100000
var inicio=10000;
var fin=100000;

function serie()
{
    for(let index=inicio; index<=fin; index+=10000){
        document.write(index,"--");
    }
}


//Crear una funcion que imprima 10 veces la misma palabra
var escrito="Buenas";
var k=1;
function frase()
{
while(k<=10)
{
document.write(escrito,"<br>");

    k++;
}
}


var dias=("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo")

function semanita()
{
    for (let index=0; index < dias.length; index++){
    document.write(dias[index]),"<br>";
    }
}

//llamando la funcion
//semanita();


