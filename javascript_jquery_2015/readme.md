Este curso, dictado por Sasha Lifzsyc, creado en diciembre de 2015, pero tomado en mayo de 2016, hace parte del contenido obligatorio para la certificación front-end.

En este aprenderemos javascript en dos variantes: Con una librería como jQuery, y puro javascript, que técnicamente es a veces referenciado como VanillaJS.

Algo de ECMAScript 5 o 6 puede hacer parte del curso.

De paso, este curso me sirve para practicar los conocimientos adquiridos en el curso de Git y Github de 2015, con Mike Nieva.




NOTAS ===

- Si un asset de terceros se puede servir desde un CDN, traerlo de ahí, porque eso libera procesos en nuestro servidor. En cambio, si no, intentar servirlos de la menor cantidad posible de dominios diferentes (Implica en algunos casos crear copias en nuestro servidor).

- Por defecto los navegadores definen el siímbolo $ para interacciones en consola, pero la última línea de jQuery lo sobreescribe.

- El evento ready de jQuery tiene algunas ventajas con respecto al window.load, entre ellas que se ejecuta primero.

- $().ready(function...) es equivalente a $(document).ready(function...) o a jQuery(document).ready(function...) o bien, a jQuery().ready(function...) Pero para simplicidad no hay mejor regla que $(function...), una función que se ejecuta cuando se dispara el evento ready, como en cualquiera de las nomenclaturas anteriores. Y una para evitar conflictos y auto-ejecutable: ¿jQuery(function($)...)()?;

- $.noConflict() previene que choque con cualquier otra librería que redefina el símbolo $ para un bloque interno.

- Las selecciones por VanillaJS retornan el objeto DOM, pero los selectores en jQuery retornan es un jQueryObject, para obtener el objeto DOM corerspondiente se accede llamando al elemento [0] del objeto jQUeryObject

- Por nomenclatura y legibilidad, se recomienda que las variables que almacenen jQueryObjects inicien con el signo "$" en su nombre. Ej: $header, $element, $items, etc.

- $(":input") retorna todos los input, select, textarea, en general cualquier tipo de campo de formulario.

- Los selectores de jQuery están basados en CSS, pero van más allá.

- Al igual que en CSS, entre menos complejos sean los selectores, más rápido se obtienen los resultados. Proveer contextos y apuntar a ids son formas de acelerar las selecciones, en el primer caso se reduce el campo de búsqueda, en el segundo una vez encuentra uno termina la búsqueda.

- $("#app-header").find("h1") es más rápido que $("#app-header h1")

- Las selecciones de jQuery no son dinámicas, es decir no se actualizan a medida que el DOM va cambiando.

- Si se tiene una selección, los setters aplican a todos los elementos de la selección, pero los getters se aplicarán sólo al primer elemento

- Un closure es una característica del lenguaje Javascript, que le permite hacer redifiniciones locales de variables o funciones globales.

- Same Origin Policy es una definición que evita que un sitio web pueda hacerse pasar por otro. Consiste en que todos los requests tengan que hacerse desde el mismo dominio del script que se ejecuta. JSONP y CORS son dos estrategias para lograr superar este inconveniente.

- Hoy día se puede acceder a muchas fuentes de datos a través de APIs, per ejemplo, TVMaze proporciona una API para acceder a datos de series de televisión. En google se pueden buscar.

- Bootstrap es también tiene elementos de Javascript que permite elaborar sitios web responsive.

- Cuando se tienen muchos callbacks anidados, la aplicación crece horizontalmente, un problema típico (Callback Hell) y que causa temas de ilegibilidad y aumento de complejidad. Una de las posibles soluciones son las "Promesas (Promises)"

- Las versiones más recientes de jQuery ya han implementado el uso de Promesas, así se disponen de tres nuevos métodos: done, fail, error para el manejo de las promesas. Equivalentes a tres estados: pendientes, realizadas o con error.

- then() se utiliza para encadenar callbacks.

- fail() permite hacer manejo de error luego de que un bloque de promesas se ejecute.

- LocalStorage es una característica de los navegadores que permite almacenar strings en un lugar particular del disco del usuario (Yendo más allá de las características de las cookies).

- Para implementar AJAX/AJAJ existen librerías como visionmedia-superagent y github-fetch, alternativas a implementaciones con VanillaJS o jQuery.

- Fetch está por convertirse en un estándar, por lo que vale la pena aprenderlo.

- Selective.js: Sugerencias + tags en campos de texto.

- Alternativas a AJAX: Socket.io (Web Sockets), que es más para actividades de tiempo real.

- Firebase es una BD en tiempo real. Funciona con jQUery o Angular. 

- En Javascript se puede hacer Scrapping, existen librerías para ello, algunas en node.js, aunque ojo, no siempre el scrapping es válido, y puede tener incidencias legales.

- 

