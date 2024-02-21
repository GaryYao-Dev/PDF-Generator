import { FC } from 'react'
import ReactQuill from 'react-quill'
import styled from 'styled-components'

interface QuillProps {
  value: string
  setValue?: (value: string) => void
  readOnly?: boolean
}

interface StyledQuillContainerProps {
  readOnly?: boolean
}

const Quill: FC<QuillProps> = (props) => {
  const { value, setValue, readOnly } = props

  return (
    <StyledQuillContainer readOnly={readOnly}>
      <ReactQuill
        readOnly={readOnly}
        modules={{
          toolbar: !readOnly, // or your custom toolbar configuration
        }}
        value={value}
        onChange={setValue}
        bounds={document.body}
      />
    </StyledQuillContainer>
  )
}

export default Quill

const StyledQuillContainer = styled.div<StyledQuillContainerProps>`
  border-radius: 8px;
  padding: 8px;

  .ql-toolbar {
    border-radius: 8px 8px 0 0;
  }
  .ql-container {
    border-radius: ${({ readOnly }) => (readOnly ? '8px' : '0 0 8px 8px')};
    font-size: 18px;
    min-height: 0px;
    border: 1px solid #e5e5e5;
  }
  .ql-editor {
    min-height: ${({ readOnly }) => (readOnly ? 'min-content' : '150px')};
    max-height: 300px;
  }
  .ql-tooltip {
    display: none;
  }
`
