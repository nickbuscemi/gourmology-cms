import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          { title: 'About1', value: 'about1' },
          { title: 'About2', value: 'about2' },
          { title: 'About3', value: 'about3' },
          { title: 'About4', value: 'about4' },
          { title: 'AboutAnna', value: 'aboutAnna' },
          { title: 'AboutSammy', value: 'aboutSammy' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
    defineField({
      name: 'imageSrc',
      title: 'Image Source',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
    }),
  ],
});
