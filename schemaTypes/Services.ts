import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content1',
      title: 'Content 1',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'imageUrl',
          title: 'Image URL',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageAlt',
          title: 'Image Alt',
          type: 'string',
        }),
        defineField({
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'content2',
      title: 'Content 2',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'imageUrl',
          title: 'Image URL',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageAlt',
          title: 'Image Alt',
          type: 'string',
        }),
        defineField({
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
        }),
      ],
    }),
  ],
});
