import React from 'react'

import styled from 'styled-components'

import { ColorPalette as CP } from '../libs/Colors'

import RoundedIconView from './RoundedIcon'

const VARIANT_MAPPING = {
  // variantName: [<bg color>, <title color>, <text color>]
  standard: [CP.BaseGray400, CP.White, CP.WhiteSmoke],
  primary: [CP.BasePrimary400, CP.White, CP.WhiteSmoke],
  secondary: [CP.BaseSecondary400, CP.White, CP.WhiteSmoke],

  standardInverse: [CP.White, CP.BaseGray700, CP.BaseGray500],
  primaryInverse: [CP.White, CP.BasePrimary700, CP.BasePrimary500],
  secondaryInverse: [CP.White, CP.BaseSecondary400, CP.BaseSecondary500],
}

const CardWrapper = styled.div`
  background-color: ${props => props.bgColor};
  padding: 2rem 1rem;
  border-radius: 1.2rem;
  height: ${props => props.fullHeight ? '100%' : 'auto'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

const RoundedIconWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const CardTitle = styled.h3`
  margin: 0;
  color: ${props => props.color};
  text-align: center;
`

const CardBody = styled.div`
  color: ${props => props.color};
  text-align: center;
  margin-top: 0.5rem;
`

const CardView = ({
  title,
  children,
  iconName = '',
  fullHeight = false,
  variant = 'standard',
  inverse = false,
}) => {
  const [bgColor, titleColor, textColor] = VARIANT_MAPPING[
    `${variant}${inverse ? 'Inverse' : ''}`
  ]

  return (
    <CardWrapper fullHeight={fullHeight} bgColor={bgColor}>
      {iconName && (
        <RoundedIconWrapper>
          <RoundedIconView
            iconName={iconName}
            variant={variant}
            inverse
            size="lg"
          />
        </RoundedIconWrapper>
      )}
      {title && (
        <CardTitle color={titleColor}>
          <strong>{title}</strong>
        </CardTitle>
      )}
      <CardBody color={textColor}>
        {children}
      </CardBody>
    </CardWrapper>
  )
}

const Card = React.memo(CardView)

export default Card
