import Quill from '@/components/Quill'
import { Fields } from '@/types/Fields'
import titleGenerator from '@/utils/titleGenerator'
import dayjs from 'dayjs'
import { FC } from 'react'

interface DisplayItemProps {
  field: Fields
  openEdit: () => void
}
const DisplayItem: FC<DisplayItemProps> = (props) => {
  const { field, openEdit } = props
  return (
    <div className="w-full">
      <div className="flex items-center gap-10 px-2">
        <div>
          <div className="text-xl font-semibold">{titleGenerator(field)}</div>
          <p>{`${dayjs(field.data.startDate?.value).format('MM/YYYY')} - ${
            field.data.endDate?.value
              ? dayjs(field.data.endDate?.value).format('MM/YYYY')
              : 'current'
          }`}</p>
        </div>
        <img
          className="w-6 h-6"
          src="/src/assets/edit.svg"
          alt="edit"
          onClick={openEdit}
        />
      </div>
      <Quill value={field.description} readOnly={!field.editMode} />
    </div>
  )
}

export default DisplayItem
