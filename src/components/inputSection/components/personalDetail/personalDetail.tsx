import { FC } from 'react'
import FieldMap from '@/components/fieldMap'

const personalDetailFields = [
  {
    label: 'Name',
    type: 'text',
    required: true,
  },
  { label: 'Email', type: 'email', required: true },
  { label: 'Phone', type: 'tel', required: true },
  {
    label: 'Address',
    type: 'text',
    placeholder: 'Sydney',
    required: true,
  },
  {
    label: 'LinkedIn',
    type: 'text',
    placeholder: 'https://www.linkedin.com/in/username',
    required: false,
  },
  {
    label: 'GitHub',
    type: 'text',
    placeholder: 'https://github.com/username',
    required: false,
  },
  {
    label: 'Personal Website',
    type: 'text',
    placeholder: 'https://yourwebsite.com',
    required: false,
  },
]

const PersonalDetail: FC = () => {
  return (
    <>
      <FieldMap fields={personalDetailFields} />
    </>
  )
}

export default PersonalDetail
