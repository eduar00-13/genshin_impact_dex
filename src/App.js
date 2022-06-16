import { useEffect, useState } from "react";

const tipos = {
  artifacts: "Artefactos",
  boss: "Jefes",
  characters: "Personajes",
  consumables: "Consumibles",
  domains: "Dominios",
  elements: "Elementos",
  enemies: "Enemigos",
  materials: "Materiales",
  nations: "Naciones",
  weapons: "Armas",
};

function App() {
  const [genshinState, setGenshinInState] = useState ({
    types: [],
  });

  const fetchGenshinApi = async (item, url = "https://api.genshin.dev/") => {
    const respuesta = await fetch(url);
    const respjson  = await respuesta.json();
    if (item === "types") {
      setGenshinInState({
        ...genshinState,
        types: respjson.types,
      });
    } else {
      setGenshinInState({types:[ ...genshinState.types], [item]: respjson});
    }
    console.log(respjson);
  };

  useEffect(() => {
    fetchGenshinApi("types");
  }, []);

 // fetchGenshinApi("types");

  const handleChangeType = ({target}) => {
    const url = `https://api.genshin.dev/${target.value}`
    fetchGenshinApi(target.value, url);
 
  };

  return (
    <div className="App container">
       <div class="position-relative">
          <div class="position-relative top-0 start-50 translate-middle-x" >
            <h1>Genshin Impact - Start the Journey Now OPEN World  <span class="badge bg-success"> GI</span></h1>
          </div>  
       </div>
       <div className="ms-2 me-2 mt-5 row">
           <select name= "types" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example" onChange={handleChangeType}>
             <option value= "">Selecciona un elemento</option>
             {genshinState.types.map((type) => ( 
             <option key={type} value={type}>
              {tipos[type]}
             </option>
             ))}
           </select>
              {
                genshinState.artifacts &&   ( <select name="artifacts" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un set de artefactos</option>
                  {genshinState.artifacts.map((artifact) => ( 
                  <option key={artifact} value={artifact}>
                    {artifact}
                  </option>
                  ) ) }
                </select>
                )
              }
              {
                genshinState.boss &&   ( <select name="boss" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un Jefe</option>
                  {genshinState.boss.map((boss) => ( 
                  <option key={boss} value={boss}>
                    {boss}
                  </option>
                  ) ) }
                </select>
                )
              }
                 {
                genshinState.characters &&   ( <select name="characters" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un Personaje</option>
                  {genshinState.characters.map((characters) => ( 
                  <option key={characters} value={characters}>
                    {characters}
                  </option>
                  ) ) }
                </select>
                )
              }
               
              {
                genshinState.consumables &&   ( <select name="consumables" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un Consumible</option>
                  {genshinState.consumables.map((consumables) => ( 
                  <option key={consumables} value={consumables}>
                    {consumables}
                  </option>
                  ) ) }
                </select>
                )
              }
              {
                genshinState.domains &&   ( <select name="domains" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un Dominio</option>
                  {genshinState.domains.map((domains) => ( 
                  <option key={domains} value={domains}>
                    {domains}
                  </option>
                  ) ) }
                </select>
                )
              }
              {
                genshinState.elements &&   ( <select name="elements" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un elemento</option>
                  {genshinState.elements.map((elements) => ( 
                  <option key={elements} value={elements}>
                    {elements}
                  </option>
                  ) ) }
                </select>
                )
              }
                {
                genshinState.enemies &&   ( <select name="enemies" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un Enemigo</option>
                  {genshinState.enemies.map((enemies) => ( 
                  <option key={enemies} value={enemies}>
                    {enemies}
                  </option>
                  ) ) }
                </select>
                )
              }
               {
                genshinState.materials &&   ( <select name="materials" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un Material</option>
                  {genshinState.materials.map((materials) => ( 
                  <option key={materials} value={materials}>
                    {materials}
                  </option>
                  ) ) }
                </select>
                )
              }
              {
                genshinState.nations &&   ( <select name="nations" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona una Nacion</option>
                  {genshinState.nations.map((nations) => ( 
                  <option key={nations} value={nations}>
                    {nations}
                  </option>
                  ) ) }
                </select>
                )
              }
               {
                genshinState.weapons &&   ( <select name="weapons" class="form-select hadow-lg p-3 mb-5 bg-body rounded" aria-label="Default select example">
                  <option value="">Selecciona un Arma</option>
                  {genshinState.weapons.map((weapons) => ( 
                  <option key={weapons} value={weapons}>
                    {weapons}
                  </option>
                  ) ) }
                </select>
                )
              }
       </div>
    </div>
  );
}

export default App;
