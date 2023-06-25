import React from 'react';

function Boton({ text, esBotonDeClic, manejarClic }) {
  return (
    <button
    className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;