# DIU - Practica 3, entregables

## Análisis de MuseMap   

[MuseMap](https://blog.prototypr.io/musemap-street-art-app-ux-case-study-9bec6a99823b) es una aplicación que pretende dar respuesta a preguntas como *¿Quién es el artista de éste pintura ó escultura?* en referencia a monumentos, obras callejeras y todo tipo de arte urbano. El usuario podría ir caminando por la calle, ver una obra ó mural que le llamara la atención y fotografiarlo, pero *¿Who is the artist?*

Para ello, propusieron un cliente ficticio que les pedía éste tipo de App (La ciudad de Londres fué su cliente ficticio), el cual les indicaba el por qué de realizar la app:
- Incrementar la preocupación de los visitantes y residentes por el arte público.
- Que se mostrar más interés por el arte
- Incrementar la apreciación artística de Londres 
- etc...

En nuestro caso, no hemos tenido en cuenta el encargo de un cliente, cosa que podría ser buena tener en cuenta para fijar un marco de actuación y tener unos requisitos funcionales y no funcionales en mente para más adelante. 

Además, viajaron a Hyde Park para ver cómo la gente interactuaba con el arte urbano.

Siguiendo con el análisis, podemos destacar los siguientes puntos en común entre nuestra propuesta y la de MuseMap:

- [x] Creación de tabla de __análisis de la competencia__. (La nuestra menos elaborada que la de MuseMap)
- [ ] __Mapa de empatía__ para saber qué puntos son clave para las personas, dado que ellos realizaron entrevistas de a pie con diversos individuos para crear personas afines para realizar el posterior Journey Map.
- [ ] __Mapa de afinidad__ en el que sacan conclusiones tras las entrevistas a usuarios y el mapa de empatía.
- [x] Creación de dos __personas__ ficticias para encarar el diseño más adelante, teniendo en cuenta a dichas personas y sus Journey Maps, con el objetivo de ver puntos débiles en el diseño. En nuestro caso las personas no están sujetas al anterior mapa de empatía o mapa de afinidad, por lo que posiblemente sean más imprecisas que las de MuseMap.
- [x] Tras analizar a las personas, realizan un __Journey Map__ para una de ellas (nosotros hicimos un Journey para las dos personas
- [x] Algo que MuseMap no hace es una __revisión de usabilidad__, dado que a pesar de realizar un análisis de la competencia, no seleccionaron un caso específico y le hicieron una revisión de usabilidad.

Posteriormente y tras realizar éste análisis inicial, pasan directamente al diseño, empezando por un *User Flow* de las posibles acciones que podría hacer un usuario al hacer uso de la app. En nuestro caso empezamos realizando una malla receptora de información. Aunque en distinto orden, podemos destacar los siguientes puntos entre la sección de diseño de MuseMap y la nuestra:

- [x] Creación de __Malla receptora de información__. MuseMap no ha realizado una malla receptora de información, aunque sí que han llevado a cabo un __Feature prioritisation__ ó mapa e esfuerzo del usuario, que podría ser una mezcla entre nuestra Malla receptora de información y nuestra __Task Matrix__. Sería también muy interesante que realizárarmos éste paso en nuestro proceso dado que no es muy costos de realizar y provee mucha información valiosa.
- [x] LLevan a cabo 3 *rounds* ó iteraciones sobre el diseño de wireframes, empezando por un boceto en papel, e iterando entre un diseño LOW-FI y el final diseño HIGH-FI. __En nuestro caso hemos desarrollado unos bocetos intermedios entre LOW-FI Y HIGH-FI__, y más cercanos a HIGH-FI.
- [ ] Entre las iteraciones de LOW-FI y HIGH-FI han realizado un __Usability Review__ para pulir problemas de interacción entre el usuario y el diseño, de cara a mejorarlo. En nuestro caso sólo realizamos el Usability review para hacer un análisis sobre la plataforma estudiada comparada (HABITOOM). __Sería MUY INTERESANTE realizar un test de usabilidad sobre nuestra propuesta de Wireframe, de cara a pulir aspectos para desarrollar el producto final.__
- [x] Diseño de un __Sitemap__ y __Labelling__. Aunque en el ecaso de MuseMap no hacen un labelling como tal, si no una __Iconography__. Nosotros hicimos un híbrido entre Labelling y la elección de los iconos que consideramos más completa.
- [x] __Style Guide__. En nuestro caso aún no hemos desarrollado los Guidelines ó claves de diseño ó líneas a seguir en nuestro diseño que cumpla una serie de directrices. Se desarrollarán en ésta sección más adelante, incluyendo tipografía, localización de botones, menús, colores, etc. Destacamos el uso de una __paleta de colores__ de cara a tener un diseño unificado y atractivo.

Finalmente indican los puntos inacabados, así como las mejoras ó funcionalidades a realizar en el proceso de diseño, entre los cuales destacan el __User Testing__, integración con más redes sociales, seguimiento de personas entre ellas dentro de la app, etc. 


__Conclusiones__

Tras analizar el UX-Case Stuy de MuseMap, podemos concluir que durante el desarrollo de nuestro producto hemos seguido una ideas muy similares. Posiblemente estén menos desarrolladas que en la historia de MuseMap, pero la estructura es muy similar, sirviéndonos como "*plantilla*" para futuros proyectos. 

Indicar que se podrían añadir herramientas como __Feature Prioritisation__ y sobre todo una __Usability Review__ para cada iteración del diseño de los wireframes. 



## Propuesta de elementos de diseño o patrones a usar  

FLATS & GO tiene una clara línea minimalista, su iconografía y menús lo desvelan a primera vista.

La interfaz debe ser agradable y el texto fácilmente legible. Hemos decidido usar como fuente, tras buscar y probar con diferentes tipos de Google Fonts, Manrope. 
Además, nos hemos inclinado por un diseño claro, con colores amigables como un azul claro y el blanco. Queremos facilitar al usuario la navegación y que se sienta cómodo usando nuestra aplicación. 

<img src="/img/pantallaColores.png"/>&nbsp;

Aparte de esto, debemos tener en cuenta la guía de [buenas prácticas de Google](https://www.thinkwithgoogle.com/intl/es-419/recursos-y-herramientas/aplicaciones/principles-of-mobile-app-design-download-complete-guide/). Algunos de los principios de diseño de los que dispone la aplicación:


1. NAVEGACIÓN
        
	a. Retroceder en un paso: el usuario puede equivocarse al rellenar el formulario o puede cambiar de intención, por eso, se le permitirá volver hacia atrás. Por ejemplo: retroceder en “Tu agente inmobiliario”.


	b. Cambiar ubicación: es el usuario el que debe elegir el lugar de búsqueda, es por eso que la opción principal en la aplicación es introducir la zona que desea y como segunda opción usar la ubicación actual. Por ejemplo: seleccionar área en “Viviendas por zona”.


2. BÚSQUEDA 

	a. Filtros y ordenación: la aplicación cuenta con un amplio conjunto de filtros disponibles. El sistema de ordenación de búsqueda contiene las opciones usuales. Por ejemplo: filtros en “Búsqueda avanzada”.


	b. Búsquedas anteriores: no debemos obligar al usuario a volver a realizar una búsqueda que ya había hecho. Nuestro sistema le permite guardar una vivienda en la que se encuentra interesado para ver más tarde.


3. COMERCIO

	a. Ver y filtrar opiniones: cada vivienda tiene un conjunto de comentarios que se pueden ver en su página, podemos ordenarlos por tiempo, mejores valoraciones, ascendente o descendentemente.


4. REGISTRO

	a. Utilidad previa la registro: no es necesario tener una cuenta o estar conectado para usar la aplicación, si no que en el momento de guardar un piso en el que estamos interesado o de comunicarnos con el propietario es cuando es obligatorio el registro/login.


	b. Diferenciar registro y acceso: puede dar pie a dudas en el momento de iniciar o registrarse, por lo que el formulario correspondiente marcará claramente cuál es la acción que está realizando el usuario.


5. FORMULARIOS

	a. Facilidad para ingresar datos: nuestros formularios son simples y claros. 


6. USABILIDAD

	a. Vocabulario sencillo: nuestros menús están etiquetados con textos cortos y claros, con verbos acordes a una aplicación.


	b. Etiquetas de texto y teclas visuales: toda nuestra interfaz contiene iconos y texto para que la información visual ofrecida sea lo más clara e intuitiva posible.


	c. Permisos: la aplicación solo solicitará permisos cuando sea necesario. Ejemplos: ubicación cuando solicite buscar por su propia ubicación, contenidos de la galería cuando quiera incluir imágenes a una vivienda en venta.

## Historia en Video del UX Case Study


## Documentación. Valoración del equipo sobre la realización de esta práctica o los problemas surgidos
 
