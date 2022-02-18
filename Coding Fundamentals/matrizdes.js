let numero  = parseInt(prompt("Ingrese numero"));
let inicio = 0;
let nlimite = numero-1;
let contador = numero * numero;
let num = 1
//let contador = 1

let matrizdes = [];
for(let i = 0; i <= numero; i++){
    matrizdes[i] =[];
}

for(let i = 0; i < numero; i++){
    for(let j = 0; j < numero; j++){
        matrizdes[i][j] = 0;
    }
}

while(contador > num){
   for(let i = contador; i <= nlimite; i++){
        matrizdes[inicio][i] = contador;
        contador--;
    }

    /*for(let i = inicio+1; i <= nlimite; i++){
        matrizdes[i][nlimite] = contador;
        contador--;
    }

    for(let i = nlimite -1; i >= inicio; i--){
        matrizdes[nlimite][i] = contador;
        contador--;
    }

    for(let i = nlimite-1; i>=inicio+1; i--){
        matrizdes[i][inicio] = contador;
        contador--;
    }

    inicio = inicio + 1;
    nlimite = nlimite -1;*/
}

/*document.write("<table>")
for(let i = 0; i < numero; i++){
    document.write("<tr>")
    for(let j = 0; j < numero; j++){
        document.write("<td align='center'>" + matrizdes[i][j]+ "</td>");
    }
    document.write("</tr>")
}
document.write("</table>")*/

