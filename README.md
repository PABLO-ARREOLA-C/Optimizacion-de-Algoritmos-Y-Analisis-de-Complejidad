# Optimizacion de Algoritmos Y Analisis de Complejidad
Tarea 3 
# 📊 Optimización de Algoritmos y Complejidad Computacional

## 📌 Descripción del Proyecto

Este repositorio contiene la solución a una tarea académica sobre análisis y optimización de algoritmos, correspondiente a la clase de Inteligencia Artificial impartida por el Ing.Carmelo Estuardo Mayen Monterroso. El objetivo es evaluar la eficiencia de dos algoritmos, identificar sus puntos críticos y proponer mejoras que reduzcan su complejidad temporal.

Se trabajan dos casos principales:

* Algoritmo con listas y condiciones
* Algoritmo con recursión y matrices

Se identifican problemas de rendimiento y se aplican técnicas de optimización para mejorar la eficiencia.

---

## 🎯 Objetivo

Analizar la eficiencia de los algoritmos, identificar puntos críticos y aplicar mejoras que reduzcan su complejidad y tiempo de ejecución.

---

## 🧠 Tecnologías Utilizadas

* JavaScript
* Node.js para ejecución
* Consola del navegador para ejecion en el navegador 

---

## 📂 Estructura del Proyecto

```
📁 Tarea 3 
│── 📄 ejercicio1.js
│── 📄 ejercicio2.js
│── 📄 ejercicio1-Optimizado.js
│── 📄 ejercicio2-Optimizado.js
│── 📄 README.md
```

---

## ⚙️ Ejercicio 1: Listas y Condiciones

### 🔍 Problema

El algoritmo recorre una lista y ejecuta una función costosa dentro de un ciclo.

### ❌ Complejidad Original

O(n²)

### ✅ Solución

* Reducción de llamadas repetitivas
* Agrupación de operaciones
* Eliminación de cálculos innecesarios

### 🚀 Complejidad Optimizada

O(n)

---

## ⚙️ Ejercicio 2: Recursión y Matriz

### 🔍 Problema

Uso de recursión exponencial (tipo Fibonacci) y estructuras innecesarias.

### ❌ Complejidad Original

O(2ⁿ)

### ✅ Solución

* Implementación de memoization
* Eliminación de recursión redundante
* Simplificación de estructuras

### 🚀 Complejidad Optimizada

O(n)

---

## ⏱️ Medición de Rendimiento

Se utilizó:

```javascript
console.time("Original");
analizarEficiencia(datos);
console.timeEnd("Original");

console.time("Optimizado");
analizarEficienciaOptimizado(datos);
console.timeEnd("Optimizado");
```

### 📊 Resultados

| Tamaño (n) | Original | Optimizado |
| ---------- | -------- | ---------- |
| 5          | Bajo     | Bajo       |
| 10         | Medio    | Bajo       |
| 20         | Alto     | Bajo       |

---

## 📈 Resultados Experimentales

* El algoritmo original presenta crecimiento cuadrático y exponencial.
* El algoritmo optimizado mantiene crecimiento lineal.
* Se reduce significativamente el tiempo de ejecución.

---

## 🎥 Video Explicativo

👉 

---

## 💻 Repositorio

👉  https://github.com/PABLO-ARREOLA-C/Optimizacion-de-Algoritmos-Y-Analisis-de-Complejidad.git

---

## 🚀 Cómo Ejecutar

### Opción 1: Navegador

1. Copiar el código en la consola del navegador
2. Ejecutar las funciones

### Opción 2: Node.js

```bash
node ejercicio1.js
node optimizado1.js
```

---

## 🧾 Conclusión

Las optimizaciones aplicadas permiten reducir significativamente la complejidad de los algoritmos, mejorando su rendimiento y escalabilidad. El uso de técnicas como memoization y reducción de iteraciones innecesarias es clave en el desarrollo eficiente de software.



## 📅 Fecha de Entrega

20/03/2026
