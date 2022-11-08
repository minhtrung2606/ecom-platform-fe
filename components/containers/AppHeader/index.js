import { Container } from '../../styles'
import { AddHeaderContainer, StyledLogo } from './styles'

const AppHeader = () => (
  <Container data-testid="app-header">
    <AddHeaderContainer>
      <StyledLogo src="/queenflowers-logo.svg" alt="Queen Flowers" />
    </AddHeaderContainer>
  </Container>
)

export default AppHeader
