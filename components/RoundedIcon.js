import React from 'react'

import styled from 'styled-components'

import { ColorPalette as CP } from '../libs/Colors'

const VARIANT_MAPPING = {
  // variantName: [bg color, icon color]
  standard: [CP.BaseGray400, CP.White],
  primary: [CP.BasePrimary400, CP.White],
  secondary: [CP.BaseSecondary400, CP.White],

  standardInverse: [CP.White, CP.BaseGray700],
  primaryInverse: [CP.White, CP.BasePrimary700],
  secondaryInverse: [CP.White, CP.BaseSecondary700],
}

const RoundedIconWrapper = styled.span`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  position: relative;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledIcon = styled.i`
  color: ${props => props.color};
`

const BaseRoundedIcon = ({ iconName, bgColor, color }) => (
  <RoundedIconWrapper bgColor={bgColor}>
    <StyledIcon className={`bi bi-${iconName}`} color={color} />
  </RoundedIconWrapper>
)

const RoundedIconView = ({
  iconName,
  variant = 'primary',
  inverse = false,
}) => {
  const [bgColor, color] = VARIANT_MAPPING[
    `${variant}${inverse ? 'Inverse' : ''}`
  ]
  return (
    <BaseRoundedIcon
      iconName={iconName}
      bgColor={bgColor}
      color={color}
    />
  )
}

const RoundedIcon = React.memo(RoundedIconView)

export default RoundedIcon
