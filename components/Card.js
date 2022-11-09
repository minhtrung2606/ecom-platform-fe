import styled from 'styled-components'
import { CollorPalette } from '../libs/Colors'
import FlexWrapper from './FlexWrapper'

const CardWrapper = styled.div`
  background-color: ${CollorPalette.BaseSecondary500};
  padding: 2rem 1rem;
  border-radius: 1.2rem;
`

const CardTitle = styled.h2`
  margin: 0;
  color: ${CollorPalette.White};
`

const CardBody = styled.div`
  color: ${CollorPalette.White};
`

const Card = ({ title, children }) => (
  <CardWrapper className="flex-wrapper-item">
    <FlexWrapper direction="column">
      {title && (
        <CardTitle>{title}</CardTitle>
      )}
      <CardBody>
        {children}
      </CardBody>
    </FlexWrapper>
  </CardWrapper>
)

export default Card
