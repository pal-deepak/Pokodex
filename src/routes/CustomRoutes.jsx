import { Routes,Route } from "react-router-dom";
import Pokedex from "../component/Pokedex/pokedex";
import PokemonProperties from "../component/PokemonProperties/PokemonProperties";
function CustomRoutes()
{
   return (
    <Routes>
        <Route path="/" element={<Pokedex/>}/>
        <Route path="/Pokemon/:id" element={<PokemonProperties/>}/>
    </Routes>
   )
}
export default CustomRoutes