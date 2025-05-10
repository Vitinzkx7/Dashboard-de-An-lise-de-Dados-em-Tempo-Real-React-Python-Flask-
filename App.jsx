import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p>Valor recebido: {data ? data.valor : "Carregando..."}</p>
    </div>
  );
}

export default App;
