import { defineType, defineField } from "sanity";

export const imageGallerySchema = defineType({
  name: "imageGallery",
  title: "Image Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Gallery Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "categoryTitle",
              title: "Category Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "title",
                      title: "Image Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }
                  ]
                }
              ],
              validation: (Rule) => Rule.required().min(1),
            }
          ]
        }
      ],
      validation: (Rule) => Rule.required().min(1),
    })
  ],
});
