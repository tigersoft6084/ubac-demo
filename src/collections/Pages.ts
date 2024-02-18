import { CollectionConfig } from 'payload/types'
import { canReadPages, canWritePages, canDeletePages } from '../access/Pages'
const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: canReadPages,
    create: canWritePages,
    update: canWritePages,
    delete: canDeletePages,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'published',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
  ],
}

export default Pages
