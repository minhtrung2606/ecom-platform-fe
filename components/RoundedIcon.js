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

const SIZE_MAPPING = {
  sm: '2.4rem',
  md: '3rem',
  lg: '4rem',
}

const RoundedIconWrapper = styled.span`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 100%;
  position: relative;
  background: ${props => props.bgColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const StyledIcon = styled.i`
  color: ${props => props.color};
`

const BaseRoundedIcon = ({ iconName, bgColor, color, size }) => (
  <RoundedIconWrapper bgColor={bgColor} size={size}>
    <StyledIcon className={`bi bi-${iconName}`} color={color} />
  </RoundedIconWrapper>
)

const RoundedIconView = ({
  iconName,
  variant = 'primary',
  inverse = false,
  size = 'md',
}) => {
  const [bgColor, color] = VARIANT_MAPPING[
    `${variant}${inverse ? 'Inverse' : ''}`
  ]
  const s = SIZE_MAPPING[size]
  return (
    <BaseRoundedIcon
      iconName={iconName}
      bgColor={bgColor}
      color={color}
      size={s}
    />
  )
}

const RoundedIcon = React.memo(RoundedIconView)

export default RoundedIcon
