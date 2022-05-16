import { useState } from "react";
const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 5,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 3,
    refinedMoonstone: 6
}
console.log(elvenGauntletsRecipe);
console.log(elvenShieldRecipe);

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gauntlet Recipe</button>
            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes;