import styled from 'styled-components'
import { ColorPalette } from '../libs/Colors'
import Icon from './Icon'

const CardWrapper = styled.div`
  background-color: ${ColorPalette.BaseSecondary400};
  padding: 2rem 1rem;
  border-radius: 1.2rem;
  height: ${props => props.fullHeight ? '100%' : 'auto'};
`

const CardTitle = styled.h3`
  margin: 0;
  color: ${ColorPalette.White};
  text-align: center;
  margin-top: ${props => props.hasIcon ? '1.5rem' : 0};
`

const CardBody = styled.div`
  color: ${ColorPalette.WhiteSmoke};
  text-align: center;
  margin-top: 0.5rem;
`

const Card = ({ title, children, icon, fullHeight }) => (
  <CardWrapper fullHeight={fullHeight}>
    <div className="d-flex flex-column align-items-center justify-content-start">
      {icon && (
        <Icon
          icon={icon}
          rounded
          bgColor={ColorPalette.White}
          color={ColorPalette.BaseSecondary400}
        />
      )}
      {title && (
        <CardTitle hasIcon={!!icon}>
          <strong>{title}</strong>
        </CardTitle>
      )}
      <CardBody>
        {children}
      </CardBody>
    </div>
  </CardWrapper>
)

export default Card
