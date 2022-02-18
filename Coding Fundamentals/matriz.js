let matrizCuadrada = () => {
    let numero  = parseInt(prompt("Ingrese numero"));
    let inicio = 0;
    let contador = 1;
    let nlimite = numero-1;

    let matriz2 = [];
    for(let i = 0; i <= numero; i++){
        matriz2[i] =[];
    }

    for(let i = 0; i < numero; i++){
        for(let j = 0; j < numero; j++){
            matriz2[i][j] = 0;
        }
    }

    while(contador < (Math.pow(numero,2))){
    for(let i = inicio; i <= nlimite; i++){
            matriz2[inicio][i] = contador;
            contador++;
        }

        for(let i = inicio+1; i <= nlimite; i++){
            matriz2[i][nlimite] = contador;
            contador++;
        }

        for(let i = nlimite -1; i >= inicio; i--){
            matriz2[nlimite][i] = contador;
            contador++;
        }

        for(let i = nlimite-1; i>=inicio+1; i--){
            matriz2[i][inicio] = contador;
            contador++;
        }

        inicio = inicio + 1;
        nlimite = nlimite -1;
    }

    document.write("<table>")
    for(let i = 0; i < numero; i++){
        document.write("<tr>")
        for(let j = 0; j < numero; j++){
            document.write("<td align='center'>" + matriz2[i][j]+ "</td>");
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

