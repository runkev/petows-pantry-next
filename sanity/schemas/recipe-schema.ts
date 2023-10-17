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
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default project;