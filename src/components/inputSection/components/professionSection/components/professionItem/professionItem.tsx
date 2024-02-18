import { FC } from 'react'
import FieldMap from '@/components/fieldMap'
import Quill from '@/components/quill'
import { Fields } from '@/types/Fields'

interface ProfessionItemProps {
  item: Fields
  operation: { delete: () => void; save: () => void; cancel: () => void }
  setItem: (index: number, name: string, value: string) => void
  index: number
}
const ProfessionItem: FC<ProfessionItemProps> = (props) => {
  const { item, operation, setItem, index } = props
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    operation.save()
  }
  return (
    <div className="flex flex-col gap-2 border-solid border-2 border-blue-200 p-2 rounded-lg">
      <form onSubmit={handleSubmit}>
        <FieldMap fields={item} setFields={setItem} index={index} />
        <Quill />
        <div className="flex flex-row justify-end gap-2">
          <button className="btn-delete" onClick={operation.delete}>
            Delete
          </button>
          <button className="btn-cancel" onClick={operation.cancel}>
            Cancel
          </button>
          <input type="submit" className="btn-primary" value="Save" />
        </div>
      </form>
    </div>
  )
}

export default ProfessionItem
