import React from 'react'

import styled from 'styled-components'

import { ColorPalette as CP } from '../libs/Colors'

import Container from './Container'
import DottedSeparator from './DottedSeparator'

const VARIANT_MAPPING = {
  // variantName: [title color, text color]
  standard: [CP.BaseGray700, CP.BaseGray500],
  primary: [CP.BasePrimary700, CP.BasePrimary500],
  secondary: [CP.BaseSecondary700, CP.BaseSecondary500],
}

const SIZE_MAPPING = {
  sm: '1rem 0',
  md: '2rem 0',
  lg: '3rem 0',
  xl: '5rem 0',
}

const SectionWrapper = styled.section`
  padding: ${props => props.padding};
  background-color: ${CP.BaseGray200};
  text-align: center;
  padding-bottom: 5rem;
`

const StyledTitle = styled.h1`
  margin-top: 0;
  color: ${props => props.color || CP.BasePrimary700};
  margin-bottom: 2.5rem;
`

const SectionBody = styled.div`
  color: ${CP.BaseGray900};
`

const SectionView = ({ title, children, variant = 'primary', size = 'md' }) =>{
  const [titleColor, textColor] = VARIANT_MAPPING[variant]
  const padding = SIZE_MAPPING[size]

  return  (
    <SectionWrapper padding={padding}>
      <Container>
        {title && (
          <header>
            <StyledTitle
              className="title"
              color={titleColor}
            >
              {title}
            </StyledTitle>
            <DottedSeparator />
          </header>
        )}
        <SectionBody color={textColor}>
          {children}
        </SectionBody>
      </Container>
    </SectionWrapper>
  )
}

const Section = React.memo(SectionView)

export default Section
