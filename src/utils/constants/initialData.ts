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
    type: {
      label: 'Type(Full-time, Part-time, etc.)',
      type: 'text',
      required: false,
      value: '',
    },
    startDate: {
      label: 'Start Date',
      type: 'date',
      required: true,
      value: '',
    },
    endDate: {
      label: 'End Date',
      type: 'date',
      required: false,
      value: '',
    },
  },
  editMode: true,
  description: '',
}

const projectInitData: Fields = {
  data: {
    place: { label: 'Name', type: 'text', required: true, value: '' },

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

const skillInitData: Fields = {
  data: {
    place: { label: 'Title', type: 'text', required: true, value: '' },
  },
  editMode: true,
  description: '',
}

export { professionInitData, projectInitData, educationInitData, skillInitData }
