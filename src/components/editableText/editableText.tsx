import { FC, useState } from 'react'
import DeleteIcon from '../deleteIcon/DeleteIcon'

interface EditableTextProps {
  content: string
  setContent: (content: string) => void
  className: string
  title?: boolean
  handleDelete?: () => void
}
const EditableText: FC<EditableTextProps> = (props) => {
  const { content, setContent, className, title, handleDelete } = props
  const [inEditMode, setInEditMode] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInEditMode(false)
  }

  // const handleDelete =
  return (
    <div>
      {inEditMode ? (
        <form onSubmit={handleSubmit}>
          {title ? (
            <input
              className={className + ' p-1 m-0'}
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onBlur={() => {
                console.log('blur')
                setInEditMode(false)
              }}
              autoFocus
            />
          ) : (
            <textarea
              className={className + ' p-1 m-0'}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onBlur={() => setInEditMode(false)}
              autoFocus
            />
          )}
        </form>
      ) : (
        <div className="flex flex-row items-center group ">
          <p
            className={
              className + ` ${!!title ? 'h-9 p-1' : 'px-1 pt-1 pb-2.5'}`
            }
            onClick={() => setInEditMode(true)}
          >
            {content}
          </p>
          <button
            className={`ml-2 hidden ${title ? 'group-hover:block' : ''}`}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  )
}

export default EditableText
