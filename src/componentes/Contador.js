import React from "react";
import '../hojas-de-estilos/Contador.css'

function Contador({ numClic }){
    return (
      <div className="contador">
        {numClic}
      </div>         
    );
}

export default Contador;