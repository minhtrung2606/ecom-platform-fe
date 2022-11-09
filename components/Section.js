import React from 'react'
import styled from "styled-components"
import { ColorPalette } from '../libs/Colors'
import Container from "./containers/Container"

const SectionContainer = styled.section`
  padding: ${props => props.padding || '2.5rem 0'};
  background-color: ${props => props.bgColor || 'inherit'};
`

const SectionHeader = styled.header`
  .title {
    margin-top: 0;
    color: ${props => props.color || ColorPalette.BasePrimary700};
    margin-bottom: 2.5rem;
  }
`

const SectionContent = styled.div`
  color: ${props => props.color || ColorPalette.BaseGray700};
`

const SectionView = ({ title, children, variants }) => (
  <SectionContainer bgColor={variants?.bgColor} padding={variants?.padding}>
    <Container>
      {title && (
        <SectionHeader color={variants?.color}>
          <h2 className="title">{title}</h2>
        </SectionHeader>
      )}
      <SectionContent color={variants?.color}>
        {children}
      </SectionContent>
    </Container>
  </SectionContainer>
)

const Section = React.memo(SectionView)

export default Section
