import { FC } from 'react'

interface FieldMapProps {
  fields: {
    label: string
    type: string
    placeholder?: string
    required: boolean
  }[]
}
const FieldMap: FC<FieldMapProps> = (props) => {
  const { fields } = props
  return (
    <div
      className={`px-2 grid gap-y-3 gap-x-4 grid-cols-1 laptop:grid-cols-2`}
    >
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col">
          <label
            className="my-2"
            style={{ color: '#6A7391', fontSize: '18px' }}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            className="bg-gray-100 rounded-md p-3"
          />
        </div>
      ))}
    </div>
  )
}

export default FieldMap
