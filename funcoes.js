function chamaRa() {
    var ra = prompt("Digite seu RA:", "");
    var nomePop = prompt("Digite seu Nome:", "");
    
    var nomepic=new String(nomePop);
    var mininome= nomepic.toLocaleLowerCase();
    for (var i=0;i<mininome.length;i++){
        if (mininome[i]=="a" || mininome[i]=="e"|| mininome[i]=="i"|| mininome[i]=="o"|| mininome[i]=="u" ){
            alert(mininome[i]);
        }
    } 
    var raString = new String(ra);
    tamanho =raString.length
    var num1 = parseInt(raString[tamanho-1]);
    var num2 = parseInt(raString[tamanho-2]);
    var soma = num1 + num2
    console.log(num1);
    console.log(num2);
    console.log(soma);
    if(soma%2 === 0){
        alert('A soma é par');    
    }else{
        alert('A soma é impar');
}}

function ValidaTextos(obj_form) {
    for (var i = 0; i < obj_form.elements.length; i++) {
        if (obj_form.elements[i].type == "text") {
            if (obj_form.elements[i].value == "") {
                alert("Por favor, Preencha o Campo vazio: ");
                //      + obj_form.elements[i].name);
                obj_form.elements[i].focus();
                return false;
            }
        }
    }
    return true;
}



    function hora(){
        var hora = new Date();
        var hatual = hora.getHours();
        

        if (hatual < 12) {document.write("Bom dia");}        
        else
        if (hatual <= 18)
        {document.write("Boa tarde");}
        else
        {document.write("Boa Noite");}

        var dia = hora.getDay();
        var mes = hora.getMonth();
        var ano = hora.getFullYear();
        mes++;

        document.write("<br>" + dia + "/" + mes + "/" + ano );
    }