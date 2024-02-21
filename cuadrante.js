
const my_coordenadas = [[-5,9], [-3,-2], [1,9], [2, -4]];

function cuadrante(a_coordenadas){

    for(let i = 0; i < a_coordenadas.length; i++){
        let coordenadas = a_coordenadas[i];

        let x = coordenadas[0];
        let y = coordenadas[1];

        if (x > 0){
            if (y > 0){
                console.log("Tu coordenada [" + a_coordenadas[i] + "] se encuentra en el primer cuadrante\n");
            }
        } else if(y < 0){
            console.log("Tu coordenada [" + a_coordenadas[i] + "] se encuentra en el tercer cuadrante\n");
        }
    }

}

cuadrante(my_coordenadas);

