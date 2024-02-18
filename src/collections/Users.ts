import { CollectionConfig } from 'payload/types'
import { isOwner, isOwnerFieldLevel } from '../access/isOwner'
import { isOwnerOrSelf } from '../access/isOwnerOrSelf'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // Only owners can create users
    create: isOwner,
    // Owners can read all, but any other logged in user can only read themselves
    read: isOwnerOrSelf,
    // Owners can update all, but any other logged in user can only update themselves
    update: isOwnerOrSelf,
    // Only owners can delete
    delete: isOwner,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'role',
      type: 'select',
      access: {
        create: isOwnerFieldLevel,
        update: isOwnerFieldLevel
      },
      options: [
        {
          label: 'Owner',
          value: 'owner',
        },
        {
          label: 'Staff',
          value: 'staff',
        },
      ],
      defaultValue: 'staff'
    },
    {
      name: 'permissions',
      type: 'group',
      access: {
        create: isOwnerFieldLevel,
        update: isOwnerFieldLevel
      },
      fields: [
        {
          label: 'Events',
          type: 'collapsible',
          fields: [
            {
              name: 'readEvents',
              label: 'Read',
              type: 'checkbox',
              defaultValue: false
            },
            {
              name: 'writeEvents',
              label: 'Create and edit',
              type: 'checkbox',
              defaultValue: false
            },
            {
              name: 'deleteEvents',
              label: 'Delete',
              type: 'checkbox',
              defaultValue: false
            }
          ]
        },
        {
          label: 'Pages',
          type: 'collapsible',
          fields: [
            {
              name: 'readPages',
              label: 'Read',
              type: 'checkbox',
              defaultValue: false
            },
            {
              name: 'writePages',
              label: 'Create and edit',
              type: 'checkbox',
              defaultValue: false
            },
            {
              name: 'deletePages',
              label: 'Delete',
              type: 'checkbox',
              defaultValue: false
            }
          ]
        }
      ]
    }
  ],
}

export default Users
