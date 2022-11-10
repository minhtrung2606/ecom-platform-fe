import styled from 'styled-components'

import Container from './Container'

const AddHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 1rem;
`

export const StyledLogo = styled.img`
  display: inline-block;
  width: 10rem;
`

const AppHeader = () => (
  <Container data-testid="app-header">
    <AddHeaderWrapper>
      <StyledLogo src="/queenflowers-logo.svg" alt="Queen Flowers" />
    </AddHeaderWrapper>
  </Container>
)

export default AppHeader
