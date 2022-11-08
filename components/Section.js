import React from 'react'
import styled from "styled-components"
import { CollorPalette } from '../libs/Colors'
import Container from "./containers/Container"

const SectionContainer = styled.section`
  padding: 2rem 0;
`

const SectionHeader = styled.header`
  .title {
    color: ${CollorPalette.Primary};
    font-size: 2rem;
  }
`

const SectionContent = styled.div`
  font-size: 1.125rem;
  color: #333333;
`

const SectionView = ({ title, children }) => (
  <Container>
    <SectionContainer>
      <SectionHeader>
        <h1 className="title">{title}</h1>
      </SectionHeader>
      <SectionContent>
        {children}
      </SectionContent>
    </SectionContainer>
  </Container>
)

const Section = React.memo(SectionView)

export default Section
