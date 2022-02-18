
let matrizIngreso = () => {
    let fila  = parseInt(prompt("Ingrese numero de filas"));
    let columna = parseInt(prompt("Ingrese numero de columnas"))
    let inicio = 0;
    let numero = fila * columna
    let contador = 1;
    let columnalim = columna-1;
    let filalim = fila-1;

    let matriz = [];
    for(let i = 0; i <fila; i++){
        matriz[i] =[];
    }

    for(let i = 0; i < fila; i++){
        for(let j = 0; j < columna; j++){
            matriz[i][j] = 0;
        }
    }

    while(contador < numero){
        for(let i = inicio; i<=columnalim; i++){
            matriz[inicio][i] = contador;
            contador++;
        }
        
        for(let i = inicio+1; i < filalim; i++){
            matriz[i][columnalim] = contador;
            contador++;
        }
    
        for(let i = columna-1; i >= inicio; i--){
            matriz[filalim][i] = contador;
            contador++;
        }

        for(let i = filalim-1; i>=inicio+1; i--){
            matriz[i][inicio] = contador;
            contador++;
        }

        inicio = inicio + 1;
        filalim = filalim -1;
        columnalim = columnalim -1
    }

    document.write("<table style = 'border: 1px solid #999;'>")
    for(let i = 0; i < fila; i++){
        document.write("<tr  style = 'border: 1px solid #999;'>")
        for(let j = 0; j < columna; j++){
            document.write("<td align='center'  style = 'border: 1px solid #999;'>" + matriz[i][j]+ "</td>");
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

//matrizIngreso()

let body = document.getElementById("matr")
body.innerHTML = `
    <div class="cardmatriz">
        <h2>MATRIZ VARIABLE</h2>
        <button onclick=matrizIngreso()> Probar</button>
    </div>
    <div class="cardmatriz">
        <h2>MATRIZ CUADRADA</h2>
        <button onclick=matrizCuadrada()> Probar</button>
    </div>`