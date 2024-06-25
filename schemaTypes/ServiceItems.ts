import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'serviceItems',
  title: 'Service Items ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content1',
      title: 'Content',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image', // Use 'image' type if you want to upload images directly to Sanity
      options: {
        hotspot: true, // Enables hotspot functionality for better image cropping
      },
    }),
  ],
});
