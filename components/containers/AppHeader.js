import styled from 'styled-components'
import Container from './Container'

const AddHeaderContainer = styled.div`
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
    <AddHeaderContainer>
      <StyledLogo src="/queenflowers-logo.svg" alt="Queen Flowers" />
    </AddHeaderContainer>
  </Container>
)

export default AppHeader
