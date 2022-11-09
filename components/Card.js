import styled from 'styled-components'
import { CollorPalette } from '../libs/Colors'
import FlexWrapper from './FlexWrapper'
import Icon from './Icon'

const CardWrapper = styled.div`
  background-color: ${CollorPalette.BaseSecondary400};
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

const Card = ({ title, children, icon }) => (
  <CardWrapper className="flex-wrapper-item">
    <FlexWrapper direction="column">
      {icon && <Icon icon={icon} rounded bgColor={CollorPalette.White} color={CollorPalette.BaseSecondary400} />}
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
