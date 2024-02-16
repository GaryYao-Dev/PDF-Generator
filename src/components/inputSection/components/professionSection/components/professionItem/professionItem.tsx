import { FC } from 'react'
import FieldMap from '../../../../../fieldMap'
import Quill from '../../../../../quill'

interface ProfessionItemProps {
  fields: {
    label: string
    type: string
    placeholder?: string
    required: boolean
  }[]
}
const ProfessionItem: FC<ProfessionItemProps> = (props) => {
  const { fields } = props
  return (
    <div className="flex flex-col gap-10 border-solid border-2 border-blue-200 p-2 rounded-lg">
      <FieldMap fields={fields} />
      <Quill />
      <div className="flex flex-row justify-end gap-2">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-primary">Save</button>
      </div>
    </div>
  )
}

export default ProfessionItem
