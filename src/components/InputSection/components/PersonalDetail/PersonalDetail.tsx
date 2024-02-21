import { FC, useEffect, useState } from 'react'
import FieldMap from '@/components/FieldMap'
import _ from 'lodash'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { updatePersonalDetail } from '@/store/dataSlice'
import { PersonalDetail as PersonalDetailType } from '@/types/Fields'

const personalDetailFields = {
  data: {
    name: {
      label: 'Name',
      type: 'text',
      required: true,
      value: '',
    },
    email: {
      label: 'Email',
      type: 'email',
      required: true,
      value: '',
    },
    phone: {
      label: 'Phone',
      type: 'tel',
      required: true,
      value: '',
    },
    address: {
      label: 'Address',
      type: 'text',
      placeholder: 'Sydney',
      required: true,
      value: '',
    },
    linkedIn: {
      label: 'LinkedIn',
      type: 'text',
      placeholder: 'https://www.linkedin.com/in/username',
      required: false,
      value: '',
    },
    github: {
      label: 'GitHub',
      type: 'text',
      placeholder: 'https://github.com/username',
      required: false,
      value: '',
    },
    personalWebsite: {
      label: 'Personal Website',
      type: 'text',
      placeholder: 'https://yourwebsite.com',
      required: false,
      value: '',
    },
  },
}
interface PersonalDetailProps {
  title: string
}
const PersonalDetail: FC<PersonalDetailProps> = (props) => {
  const { title } = props
  const dispatch = useAppDispatch()
  const initPersonalDetail = useAppSelector(
    (state) => state.data.personalDetail
  )
  const [fields, setFields] = useState<PersonalDetailType>(personalDetailFields)

  useEffect(() => {
    if (Object.keys(initPersonalDetail).length) {
      setFields(initPersonalDetail)
    }
  }, [initPersonalDetail])

  const handleChange = (index: number, name: string, value: string) => {
    const newFields = _.cloneDeep(fields)
    Object.entries(newFields.data).forEach(([key, field]) => {
      if (key === name) {
        field.value = value
      }
    })
    setFields(newFields)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updatePersonalDetail(fields))
  }
  return (
    <>
      <h2 className="my-4 relative before:content-[''] before:absolute before:-left-2 before:top-1 before:w-[3px] before:h-6 before:bg-blue-500">
        {title}
      </h2>
      <form onSubmit={handleSubmit}>
        <FieldMap fields={fields} setFields={handleChange} />
        <div className="flex justify-end">
          <input type="submit" className="btn-primary" value="Save" />
        </div>
      </form>
    </>
  )
}

export default PersonalDetail
