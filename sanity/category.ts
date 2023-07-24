import { defineType, defineField } from 'sanity'


export const category = defineType(
    {
        name: "category",
        title: "Category",
        type: "document",
        fields: [
         
                {
                    name: "name",
                    title: "Category name",
                    type: "string"

                }

         
              


        ]
    }
)

