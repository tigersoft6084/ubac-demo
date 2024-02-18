import { CollectionConfig } from 'payload/types'
import { canReadEvents, canWriteEvents, canDeleteEvents } from '../access/Events'
const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: canReadEvents,
    create: canWriteEvents,
    update: canWriteEvents,
    delete: canDeleteEvents,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
  ],
}

export default Events
