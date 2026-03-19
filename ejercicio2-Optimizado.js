// Memoization
const memo = {};
function calcularRecursionMemo(n) {
    if (n <= 1) return 1;
    if (memo[n] !== undefined) return memo[n];
    memo[n] = calcularRecursionMemo(n - 1) + calcularRecursionMemo(n - 2);
    return memo[n];
}

function analizarComplejidadOptimizado(datos) {
    let variable = 0;
    let listaResultados = aplicarProceso(datos); // O(n)

    let n = datos.length;
    // Matriz calculada una sola vez
    let matriz = Array.from({ length: n }, () => new Array(n));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matriz[i][j] = calcular(i, j); // O(n²)
        }
    }

    if (listaResultados.length === 0) {
        console.log("Error: No hay datos válidos");
        return null;
    }

    for (let elemento of listaResultados) { // O(n)
        let valor = transformar(elemento);
        variable += 1;

        if (valor > variable) {
            console.log("Advertencia");
        } else {
            // Ya no se recalcula la matriz
            ejecutarAccion(valor);
        }
    }

    let resultado = buscarMaximo(listaResultados); // O(n)
    let variableAuxiliar = calcularRecursionMemo(n); // O(n)
    return resultado;
}
