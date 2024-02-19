import { FC } from 'react'
import { Fields, PersonalDetail } from '@/types/Fields'
interface FieldMapProps {
  fields: Fields | PersonalDetail
  setFields: (index: number, name: string, value: string) => void
  index?: number
  setState?: () => void
}
const FieldMap: FC<FieldMapProps> = (props) => {
  const { fields, setFields, index } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFields(index ?? 0, name, value)
  }
  return (
    <div className={`px-2 grid gap-y-3 gap-x-4 grid-cols-1 laptop:grid-cols-2`}>
      {Object.entries(fields.data).map(([key, field], index) => {
        const { label, type, required, value, placeholder } = field
        return (
          <div key={index} className="flex flex-col">
            <label
              className="my-2"
              style={{ color: '#6A7391', fontSize: '18px' }}>
              {label}
            </label>
            <input
              type={type}
              required={required}
              value={value as string}
              className="bg-gray-100 rounded-md p-3"
              onChange={handleChange}
              name={key}
              placeholder={placeholder}
            />
          </div>
        )
      })}
    </div>
  )
}

export default FieldMap
