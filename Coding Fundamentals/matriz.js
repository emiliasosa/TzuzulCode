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

    while(contador <= (Math.pow(numero,2))){
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

    let generarTabla = () =>{
        let body = document.getElementsByClassName("tabla2")[0];
        let tabla   = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
        for(let i = 0; i < numero; i++){
            let hilera = document.createElement("tr");
            for(let j = 0; j < numero; j++){
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(matriz2[i][j]);
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

