import { FC, useState } from 'react'
import ReactQuill from 'react-quill'
import styled from 'styled-components'

const Quill: FC = () => {
  const [value, setValue] = useState('')

  return (
    <StyledQuillContainer>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </StyledQuillContainer>
  )
}

export default Quill

const StyledQuillContainer = styled.div`
  border-radius: 8px;
  padding: 8px;
  .ql-toolbar {
    border-radius: 8px 8px 0 0;
  }
  .ql-container {
    min-height: 200px;
    border-radius: 0 0 8px 8px;
    font-size: 18px;
  }
`
