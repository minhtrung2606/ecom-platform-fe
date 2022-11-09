import styled from 'styled-components'
import { ColorPalette } from '../libs/Colors'

const StyledIconWrapper = styled.span`
  &.fully-rounded {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    position: relative;
    background: ${props => props.bgColor || ColorPalette.BasePrimary900};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledIcon = styled.i`
  color: ${props => props.color || ColorPalette.White};
`

const Icon = ({ icon, color, bgColor, rounded }) => (
  <StyledIconWrapper
    className={rounded && 'fully-rounded'}
    bgColor={bgColor}
  >
    <StyledIcon className={`bi bi-${icon}`} color={color} />
  </StyledIconWrapper>
)

export default Icon
