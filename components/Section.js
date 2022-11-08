import React from 'react'
import styled from "styled-components"
import { CollorPalette } from '../libs/Colors'
import Container from "./containers/Container"

const SectionContainer = styled.section`
  padding: 2rem 0;
  background-color: ${props => props.bgColor || 'inherit'};
  font-weight: 100;
`

const SectionHeader = styled.header`
  .title {
    margin-top: 0;
    color: ${props => props.color || CollorPalette.Primary};
    font-size: 2rem;
  }
`

const SectionContent = styled.div`
  font-size: 1.125rem;
  color: ${props => props.color || CollorPalette.TextColorOnWhite};
`

const SectionView = ({ title, children, variants }) => (
  <SectionContainer bgColor={variants?.bgColor}>
    <Container>
      {title && (
        <SectionHeader color={variants?.color}>
          <h1 className="title">{title}</h1>
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
