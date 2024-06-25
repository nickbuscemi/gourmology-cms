// schemas/menu.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'menuType',
      title: 'Menu Type',
      type: 'string',
      options: {
        list: [
          { title: 'Catering', value: 'catering' },
          { title: 'Holiday', value: 'holiday' },
          // Add other menu types as needed
        ],
        layout: 'dropdown' // Can also be 'radio'
      }
    }),
    
  ],
});

