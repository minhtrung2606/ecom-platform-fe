import styled from 'styled-components'
import { CollorPalette } from '../libs/Colors'

const StyledIconWrapper = styled.span`
  &.rounded {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    position: relative;
    background: ${props => props.bgColor || CollorPalette.BasePrimary900};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledIcon = styled.i`
  color: ${props => props.color || CollorPalette.White};
`

const Icon = ({ icon, color, bgColor, rounded }) => (
  <StyledIconWrapper
    className={rounded && 'rounded'}
    bgColor={bgColor}
  >
    <StyledIcon className={`bi bi-${icon}`} color={color} />
  </StyledIconWrapper>
)

export default Icon
