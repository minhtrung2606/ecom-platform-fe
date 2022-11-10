import styled from 'styled-components'
import { ColorPalette as CP } from '../libs/Colors'

const DottedSeparatorWrapper = styled.div`
  text-align: center;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  color: ${props => props.color || CP.BasePrimary900};

  i {
    font-size: 1.2rem;
  }
`

const DottedSeparator = ({ color }) => (
  <DottedSeparatorWrapper color={color}>
    <i className="bi bi-dot" />
    <i className="bi bi-dot" />
    <i className="bi bi-dot" />
    <i className="bi bi-dot" />
    <i className="bi bi-dot" />
  </DottedSeparatorWrapper>
)

export default DottedSeparator
