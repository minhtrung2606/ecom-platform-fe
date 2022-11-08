import styled from "styled-components"
import { CollorPalette } from "../../libs/Colors"
import Container from "./Container"

const AppFooterContainer = styled.footer`
  min-height: 30rem;
  padding-bottom: 2rem;
  background-color: ${CollorPalette.Primary};
  color: ${CollorPalette.TextColorOnPrimary};
`

const AppFooter = () => (
  <AppFooterContainer>
    <Container>
      AppFooter
    </Container>
  </AppFooterContainer>
)

export default AppFooter
