import React from 'react'

import styled from 'styled-components'

import { ColorPalette as CP } from '../libs/Colors'

import Container from './Container'

const VARIANT_MAPPING = {
  // variantName: [bg color]
  standardLight: CP.BaseGray300,
  standard: CP.BaseGray500,
  primaryLight: CP.BasePrimary300,
  primary: CP.BasePrimary500,
  secondaryLight: CP.BaseSecondary300,
  secondary: CP.BaseSecondary500,
}

const SIZE_MAPPING = {
  sm: '1rem 0',
  md: '2rem 0',
  lg: '3rem 0',
  xl: '5rem 0',
  xxl: '8rem 0',
}

const SectionWrapper = styled.section`
  padding: ${props => props.padding};
  background-color: ${props => props.bgColor};
`

const BlankSectionView = ({
  children,
  variant = 'primary',
  size = 'md',
  withContainer = true,
}) =>{
  const bgColor = VARIANT_MAPPING[variant]
  const padding = SIZE_MAPPING[size]

  return  (
    <SectionWrapper bgColor={bgColor} padding={padding}>
      {withContainer ? (
        <Container>
          {children}
        </Container>
      ) : children}
    </SectionWrapper>
  )
}

const BlankSection = React.memo(BlankSectionView)

export default BlankSection
