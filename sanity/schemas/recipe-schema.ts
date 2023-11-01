const project = {
    name: "recipe",
    title: "Recipes",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "preptime",
        title: "Prep Time",
        type: "string"
      },
      {
        name: "cooktime",
        title: "Cook Time",
        type: "string"
      },
      {
        name: "totaltime",
        title: "Total Time",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: 'ingredients',
        type: 'array',
        title: 'Ingredients',
        of: [
          {
            type: 'object',
            name: 'ingredient',
            title: 'Ingredient',
            fields: [
              { name: 'name', type: 'string', title: 'Ingredient Name' },
              { name: 'quantityEnglish', type: 'string', title: 'Quantity (English)' },
              { name: 'quantityMetric', type: 'string', title: 'Quantity (Metric)' }
            ]
          }
        ]
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default project;