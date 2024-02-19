export type Fields = {
  data: {
    place?: Field
    role?: Field
    department?: Field
    location?: Field
    startDate?: Field
    endDate?: Field
  }
  editMode: boolean
  description: string
}

export type Field = {
  label: string
  type: string
  required: boolean
  value: string | undefined
  placeholder?: string
}

export type PersonalDetail = {
  data: {
    name: Field
    email: Field
    phone: Field
    address: Field
    linkedIn: Field
    github: Field
    personalWebsite: Field
  }
}

export type Skill = {
  title: string
  content: string
}
