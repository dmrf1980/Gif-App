
### Estructura de archivos

https://es.reactjs.org/docs/faq-structure.html

https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76



## useEfect

Permite ejecutar cierto codigo de manera condicional
el componenete se renderiza solo por primera vez


***

### encodeURI

Codifica un Identificador de Recurso Uniforme (Uniform Resource Identifier, URI) reemplazando cada instancia de ciertos carácteres por uno, dos o tres secuencias de escape representando el carácter codificado en UTF-8.

encodeURI(URI) 

***

## Helpers

Van a ser funciones que hacen un cierto trabajo en específico, pueden recibir unos argumentos, lo procesan y hacen algún return que no hace falta que redibujar en el estáte o algo así.

***


### Animate.css 

https://animate.style/

is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.


Installation and usage
Installing
Install with npm:

>$ npm install animate.css --save

Or install with Yarn (this will only work with appropriate tooling like Webpack, Parcel, etc. If you are not using any tool for packing or bundling your code, you can simply use the CDN method below):

>$ yarn add animate.css

Import it into your file:
>import 'animate.css';


Or add it directly to your webpage using a CDN:

### En React: Se coloca en el index.html de la carpeta public
```

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

```
Basic usage
After installing Animate.css, add the class animate__animated to an element, along with any of the animation names (don't forget the animate__ prefix!):
```
<h1 class="animate__animated animate__bounce">An animated element</h1>
```



***




## Errores

>Warning: Each child in a list should have a unique "key" prop.
>Check the render method of GiftExpertApp. See https://reactjs.org/link/>warning-keys for more information.
>    at li
>    at GiftExpertApp

se arregla poniendo la key dentro del etiqueta html:

```
    return <li key = { category }>Hola</li>

```

***

>Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

#### se arregla poniendo string vacio '' en useStates()

```
   const [inputValue, setInputValue] = useState( '' )

```

***
## Codigo de la seccion 6 - app 04 GifExpertApp
https://github.com/Klerith/react-giphy-app/releases/tag/v0.6.0


## http-server: a simple static HTTP server

http-server is a simple, zero-configuration command-line static HTTP server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development and learning.

https://www.npmjs.com/package/http-server

> npm i http-server

o

> npm install --global http-server

Usage:

> http-server [path] [options]

> http-server -o


[path] defaults to ./public if the folder exists, and ./ otherwise.