## React Hooks

### useState

Hook encargado de crear estados en componentes funcionales

### useEffect

Hook encargado de manejar los ciclos de vida de un componente funcional

- Ejecutarse al iniciar el component
- Ejecutarse cada ves que algun valor del arreglo de dependencias del useEffect ha cambiado

En un componente clase los ciclos de vida son los siguientes (metodos)

- componentDidMount
- componentDidUpdated
- componentWillUnmounted

### useMemo

Este hook sirve para memorizar el valor que retorna una funcion

### useCallback && memo

Este hook sirve para memorizar una funcion

### useRef

Este hook sirve para manejar un estado y que este no genere procesos de re-rendering

```jsx
import { useRef } from "react";

function Component() {
  const ref = useRef(null);

  // obtener su valor almacenado
  ref.current;
}
```

### useContext

Este hook sirve para obtener los valores almacenados en un Context

### useReducer

Este hook sirve para creare estados el cual nos devuelve un estado inicial y una funcion dispatch que nos permite modificar nuestro estado
