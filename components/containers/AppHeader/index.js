import { Image } from '../../base'
import { Container } from '../../styles'
import { AddHeaderContainer, StyledLogo } from './styles'

const AppHeader = () => (
  <Container data-testid="app-header">
    <AddHeaderContainer>
      <StyledLogo>
        <Image src="/queenflowers-logo.svg" alt="Queen Flowers" />
      </StyledLogo>
    </AddHeaderContainer>
  </Container>
)

export default AppHeader
