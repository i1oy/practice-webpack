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