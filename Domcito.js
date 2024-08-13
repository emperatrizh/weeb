function calcular()
{
    let nombre=document.getElementById('name1').ariaValueMax;
    let edad=parseInt(document.getElementById('edad1').value);
    //Obteniendo el genero
    var genero=document.querySelector('input[name="sexo"]:checked').value;
    let aumento;
    aumento=edad+10;
    //Imprimiendo la edad de acuerdo al genero
    if(genero=="masculino")
    {
        alert("Excelente caballero, su edad aumentada es" +aumento);
    }
    else{
        alert("Excelente señorita, su edad aumentada es" +aumento);
    }

}//fin calcular