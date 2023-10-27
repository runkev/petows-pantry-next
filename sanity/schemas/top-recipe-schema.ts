const toprecipe = {
    name: 'toprecipe',
    title: 'Top Recipes',
    type: 'document',
    fields: [
        {
            name: 'recipe',
            title: 'Recipe',
            type: 'reference',
            to: [{ type: 'recipe' }]
        }
    ]
}

export default toprecipe;
