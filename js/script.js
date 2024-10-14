//Exercicio 1
function calcularex1(){

    let rex1
    let hex1
    let calex1
    const cstex1 = 2

    rex1 = parseFloat(document.getElementById("rex1").value)
    hex1 = parseFloat(document.getElementById("hex1").value)
    calex1 = Math.PI*(rex1**cstex1)*hex1

    document.getElementById("resex1").innerHTML= "Resultado: " + calex1.toFixed(2)

}

//Exercicio 2
function calcularex2(){

let rex2a 
let rex2v
let calex2a
let calex2v
const cst1ex2 = 2
const cst2ex2 = 3

rex2a = parseFloat(document.getElementById("rex2a").value)
rex2v = parseFloat(document.getElementById("rex2v").value)
calex2a = 4*Math.PI*(rex2a**cst1ex2)
calex2v = (4*Math.PI*(rex2v**cst2ex2))/3

document.getElementById("resex2").innerHTML= "Resultado: Valor de A=" + calex2a.toFixed(2) + " e valor de V= " + calex2v.toFixed(2)
}

//Exercicio 3

function calcularex3(){

    let f1ex3
    let f2ex3
    let sl1ex3
    let sl2ex3
    let ausl1ex3
    let ausl2ex3
    let medslex3
    const aumtex3 = 1.20

    f1ex3 = document.getElementById("f1ex3").value
    f2ex3 = document.getElementById("f2ex3").value
    sl1ex3 = parseFloat(document.getElementById("sl1ex3").value)
    sl2ex3 = parseFloat(document.getElementById("sl2ex3").value)
    ausl1ex3 = sl1ex3*aumtex3
    ausl2ex3 = sl2ex3*aumtex3
    medslex3 = (sl1ex3+sl2ex3)/2

    document.getElementById("resex3").innerHTML = `Resultado: O aumento de salário de ${f1ex3} é de R$ ${ausl1ex3.toFixed(2)}, o aumento de ${f2ex3} é de R$ ${ausl2ex3.toFixed(2)}. A média entre esses dois funcionários é de R$ ${medslex3.toFixed(2)}`;

}

//Exercicio 4
function calcularex4 (){

let al1ex4
let al2ex4
let medalex4
const cst1ex4 = 2

al1ex4 = parseFloat(document.getElementById("al1ex4").value)
al2ex4 = parseFloat(document.getElementById("al2ex4").value)
medalex4 = (al1ex4+al2ex4)/2

document.getElementById("resex4").innerHTML = `Resultado: A média entre os usuários é de ${medalex4.toFixed(2)}`
}

 //Exercicio 5
function calcularex5 (){

 let medex5
 let id1ex5
 let id2ex5
 let id3ex5
 let id4ex5
 const nusex5 = 4

 id1ex5 = parseFloat(document.getElementById("id1ex5").value)
 id2ex5 = parseFloat(document.getElementById("id2ex5").value)
 id3ex5 = parseFloat(document.getElementById("id3ex5").value)
 id4ex5 = parseFloat(document.getElementById("id4ex5").value)
 medex5 = (id1ex5+id2ex5+id3ex5+id4ex5)/nusex5

 document.getElementById("resex5").innerHTML = `Resultado: A média de idade entre os 4 usuários é de ${medex5.toFixed(1)}.`
}