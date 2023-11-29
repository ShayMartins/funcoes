function calcular() {
    var n1 = parseFloat(document.getElementById("primeiro").value);
    var n2 = parseFloat(document.getElementById("segundo").value);
    var n3 = parseFloat(document.getElementById("terceiro").value);
    var n4 = parseFloat(document.getElementById("quarto").value);
    var n5 = parseFloat(document.getElementById("quinto").value);

    console.log((n1+n2+n3)/3);
    alert("A média dos números informados é:  "+ (n1+n2+n3+n4+n5)/5) ;

    

}
