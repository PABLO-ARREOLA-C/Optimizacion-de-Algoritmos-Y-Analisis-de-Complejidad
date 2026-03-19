function analizarEficienciaOptimizado(datos) {
    let variable = 5;
    let listaResultados = [];

    for (let elemento of datos) { // Único recorrido O(n)
        let valorProcesado = elemento * 2;
        let valorTransformado = valorProcesado + 10;

        listaResultados.push(valorTransformado);
        variable += 1;

        if (valorTransformado >= variable + 5) {
            console.log("Advertencia");
        } else {
            ejecutarAccion(valorTransformado);
        }
    }

    if (listaResultados.length === 0) {
        console.log("Error: No hay datos válidos");
        return null;
    }

    return listaResultados;
}
