    var numero1 = document.getElementById('dado1');
    var numero2 = document.getElementById('dado2');
    var numero3 = document.getElementById('dado3');
    var numero4 = document.getElementById('dado4');
    
 

    var resultado =document.getElementById('resultado');
    var clear =document.getElementById('clear');

    var btn5 =document.getElementById('btn5');

    var btn6 =document.getElementById('btn6');

    var btn7 =document.getElementById('btn7');


    var delta=document.getElementById('delta')

    var coeficiente1=document.getElementById('coeficiente1')

    var coeficiente2=document.getElementById('coeficiente2')

    clear.addEventListener('click',function(){

 

        apagar();

 

    })

    function apagar(){

 

        document.getElementById('dado1').value='';

 

        document.getElementById('dado2').value='';

 

        document.getElementById('dado3').value='';

        document.getElementById('dado4').value='';

 

        document.getElementById('resultado').value='';

 

    }



    btn5.addEventListener('click',function(){

 

        media();
    
    
    })

    function media(){

 

        var soma1val = parseInt(dado1.value);             
        var soma2val = parseInt(dado2.value);       
        var soma3val = parseInt(dado3.value);
        var soma4val = parseInt(dado4.value);
    
     
    
        var media = (soma1val + soma2val + soma3val + soma4val) / 4
    
     
    
        document.getElementById('resultado').value=media;
    
     
    
       
    
     
    
    }

    btn6.addEventListener('click',function(){

 

        bhaskara();
    
    
    })

    function bhaskara(){
        var valor1 = parseInt(dado1.value);
        var valor2 = parseInt(dado2.value);
        var valor3 = parseInt(dado3.value);



        var delta = (valor2 * valor2) - 4 * valor1 * valor3;

        coeficiente1 = (-valor2 + Math.sqrt(delta)) / (2 * valor1);

        coeficiente2 = (-valor2 - Math.sqrt(delta)) / (2 * valor1);

        document.getElementById('delta').value=delta;

        if(delta < 0){
            alert("Para Delta negativo, não existem raízes reais.");  
        } 

        


       document.getElementById('coeficiente1').value=coeficiente1;

       document.getElementById('coeficiente2').value=coeficiente2;
    


    }
    
    btn.addEventListener('click',function(){

 

        somatotal();

 

    })

 

 

 

    function somatotal(){

 

        var soma1val = parseInt(dado1.value);

 

        var soma2val = parseInt(dado2.value);

 

        var soma =soma1val + soma2val;

 

        document.getElementById('resultado').value =soma;

 

    }

 

 

 

 

 

 

 

    btn2.addEventListener('click',function(){

 

        subtotal();

 

    })

 

 

 

    function subtotal(){

 

        var sub1val = parseInt(dado1.value);

 

        var sub2val = parseInt(dado2.value);

 

        var sub = sub1val - sub2val;

 

        document.getElementById('resultado').value=sub;

 

    }

 

 

 

 

 

 

 

    btn3.addEventListener('click',function(){

 

        multtotal();

 

    })

 

 

 

    function multtotal(){

 

        var mult1val = parseInt(dado1.value);

 

        var mult2val = parseInt(dado2.value);

 

        var mult = mult1val * mult2val;

 

        document.getElementById('resultado').value=mult;

 

    }

 

 

 

 

 

    clear.addEventListener('click',function(){

 

        apagar();

 

    })

 

 

 

    function apagar(){

 

        document.getElementById('dado1').value='';

 

        document.getElementById('dado2').value='';

 

        document.getElementById('dado3').value='';

        document.getElementById('dado4').value='';

        document.getElementById('coeficiente1').value=''

        document.getElementById('coeficiente2').value=''

        document.getElementById('delta').value=''

 

        document.getElementById('resultado').value='';

 

    }

 

    btn4.addEventListener('click',function(){

 

        comparar();

 

    })

 

     

 

function comparar(){

 

    var comp1 =parseInt(dado1.value);

 

    var comp2 =parseInt(dado2.value);

 

 

 

    if(comp1==comp2){alert('os dois numeros são iguais')}

 

    else{

 

    if(comp1>comp2){alert('o numero ' + comp1 + ' é maior que o ' + comp2)}

 

else{alert('o numero ' + comp1 + ' é menor que o ' + comp2)}

 

 

 

    }

 

 

 

}

 

btn7.addEventListener('click',function(){

 

    divisão();

 

})


function divisão(){

 

    var mult1val = parseInt(dado1.value);



    var mult2val = parseInt(dado2.value);



    var mult = mult1val / mult2val;



    document.getElementById('resultado').value=mult;



}








