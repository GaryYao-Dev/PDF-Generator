import { Fields } from '@/types/Fields'

const professionInitData: Fields = {
  data: {
    place: { label: 'Company', type: 'text', required: true, value: '' },
    role: {
      label: 'Position',
      type: 'text',
      required: false,
      value: '',
    },
    department: {
      label: 'Department',
      type: 'text',
      required: false,
      value: '',
    },
    location: {
      label: 'City',
      type: 'text',
      required: false,
      value: '',
    },
    startDate: {
      label: 'Start Date',
      type: 'date',
      required: true,
      value: undefined,
    },
    endDate: {
      label: 'End Date',
      type: 'date',
      required: false,
      value: undefined,
    },
  },
  editMode: true,
  description: '',
}

const educationInitData: Fields = {
  data: {
    place: { label: 'University', type: 'text', required: true, value: '' },
    role: {
      label: 'Degree',
      type: 'text',
      required: false,
      value: '',
    },
    department: {
      label: 'Major',
      type: 'text',
      required: false,
      value: '',
    },
    location: {
      label: 'City',
      type: 'text',
      required: false,
      value: '',
    },
    startDate: {
      label: 'Start Date',
      type: 'date',
      required: true,
      value: undefined,
    },
    endDate: {
      label: 'End Date',
      type: 'date',
      required: false,
      value: undefined,
    },
  },
  editMode: true,
  description: '',
}

export { professionInitData, educationInitData }
