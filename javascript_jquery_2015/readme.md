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

- 