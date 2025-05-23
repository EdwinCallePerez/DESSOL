export default function Logo() {
  return (
    <a href={`${import.meta.env.BASE_URL}`} className="flex items-center space-x-1">

      {/* Columna izquierda: Logo */}
      <img
      src={`${import.meta.env.BASE_URL}images/FundacionDessol.png`}
    
        alt="Logo de Fundación DESSOL"
        className="h-15 w-20 object-contain"
      />
 
      {/* Columna derecha: Texto en varias líneas */}
    <div className="flex flex-col items-center justify-center">
 
</div>

<img
 src={`${import.meta.env.BASE_URL}images/white.png`}
    
        alt="Logo de Fundación DESSOL"
        className="h-12 w-15 object-contain"
      />

    </a>
  );
}

