import styled from 'styled-components'

import { ColorPalette as CP } from "../libs/Colors"

import Container from "./Container"

const AppFooterWrapper = styled.footer`
  min-height: 30rem;
  padding-bottom: 2rem;
  background-color: ${CP.BasePrimary900};
  color: ${CP.White};
`

const AppFooter = () => (
  <AppFooterWrapper>
    <Container>
      AppFooter
    </Container>
  </AppFooterWrapper>
)

export default AppFooter
