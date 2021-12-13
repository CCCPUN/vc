# Binary Space Partitioning

Es un método para subdividir recursivamente un espacio en dos conjuntos convexos utilizando hiperplanos como particiones. Este proceso de subdivisión da lugar a una representación de los objetos dentro del espacio en forma de una estructura de datos en forma de árbol conocida como árbol BSP.

Es un proceso genérico que consiste en dividir recursivamente una escena en dos hasta que la partición satisfaga uno o más requisitos. Puede considerarse una generalización de otras estructuras espaciales en forma de árbol, en las que los hiperplanos que dividen el espacio pueden tener cualquier orientación, en lugar de estar alineados con los ejes de coordenadas. Cuando se utiliza en gráficos para representar escenas compuestas por polígonos planos, los planos de partición se eligen frecuentemente para que coincidan con los planos definidos por los polígonos de la escena.

<div style="text-align:center">
<img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Binary_space_partition.png"
     alt="Markdown Monster icon"
     style="width: 100hv;margin-bottom: 1s0px"
     />
</div>

# Generacion 

El uso canónico de un árbol BSP es para renderizar polígonos (que son de doble cara, es decir, sin eliminación de la cara posterior) con el algoritmo del pintor. Cada polígono se designa con una cara frontal y una cara trasera que puede elegirse arbitrariamente y que sólo afecta a la estructura del árbol, pero no al resultado requerido. Dicho árbol se construye a partir de una lista no ordenada de todos los polígonos de una escena. El algoritmo recursivo para la construcción de un árbol BSP a partir de esa lista de polígonos es:

1. Elijir un polígono P de la lista.
2. Haz un nodo N en el árbol BSP, y añade P a la lista de polígonos en ese nodo.
3. Para cada otro polígono de la lista:
    1. Si ese polígono está totalmente delante del plano que contiene a P, mueva ese polígono a la lista de nodos delante de P.
    2. Si ese polígono está completamente detrás del plano que contiene a P, mueva ese polígono a la lista de nodos detrás de P.
    3. Si ese polígono es intersecado por el plano que contiene a P, dividirlo en dos polígonos y moverlos a las respectivas listas de polígonos detrás y delante de P.
4. Si ese polígono se encuentra en el plano que contiene a P, añádalo a la lista de polígonos en el nodo N.
5. Aplique este algoritmo a la lista de polígonos delante de P.
6. Aplicar este algoritmo a la lista de polígonos detrás de P.

# Referencias

1. [Binary Space Parition](https://en.wikipedia.org/wiki/Binary_space_partitioning).
