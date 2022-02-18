
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

    
    let generarTabla = () =>{
        let body = document.getElementsByClassName("cardmatriz")[0];
        let tabla   = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
        for(let i = 0; i < fila; i++){
            let hilera = document.createElement("tr");
            for(let j = 0; j < columna; j++){
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(matriz[i][j]);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
            tblBody.appendChild(hilera);
        }
        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("width", "400")
        tabla.setAttribute("style", "margin-bottom: 20px")
    }

    return generarTabla()
}


let body = document.getElementById("matr")
body.innerHTML = `
    <div class="cardmatriz">
        <h2>MATRIZ VARIABLE</h2>
        <button onclick=matrizIngreso()> Probar</button>
        <div class="tabla1">
        </div>
    </div>
    <div class="cardmatriz">
        <h2>MATRIZ CUADRADA</h2>
        <button onclick=matrizCuadrada()> Probar</button>
        <div class="tabla2">
        </div>
    </div>`