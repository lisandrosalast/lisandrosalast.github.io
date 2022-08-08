function calcular_decimal(){
    var hex1 = document.getElementById('hex1').value;
    var hex2 = document.getElementById('hex2').value;
    var hex3 = document.getElementById('hex3').value;
    var dec1 = parseInt(hex1, 16);
    var dec2 = parseInt(hex2, 16);
    var dec3 = parseInt(hex3, 16);
    document.getElementById('color_fondo').innerHTML="#fondo{background:#"+hex1+""+hex2+""+hex3+"}";
    document.getElementById('dec1').value=dec1;
    document.getElementById('dec2').value=dec2;
    document.getElementById('dec3').value=dec3;
}
function calcular_hexadecimal(){
    var dec1 = document.getElementById('dec1').value;
    var dec2 = document.getElementById('dec2').value;
    var dec3 = document.getElementById('dec3').value;
    var hex1 = parseInt(dec1).toString(16);
        if (hex1.length==1){hex1 = "0"+hex1;}
    var hex2 = parseInt(dec2).toString(16);
        if (hex2.length==1){hex2 = "0"+hex2;}
    var hex3 = parseInt(dec3).toString(16);
        if (hex3.length==1){hex3 = "0"+hex3;}
    document.getElementById('color_fondo').innerHTML="#fondo{background:#"+hex1+""+hex2+""+hex3+"}";
    document.getElementById('hex1').value=hex1;
    document.getElementById('hex2').value=hex2;
    document.getElementById('hex3').value=hex3;
}