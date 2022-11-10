import Image from 'next/image'
import styled from 'styled-components'

import Container from './Container'

const AddHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const AppHeader = () => (
  <Container data-testid="app-header">
    <AddHeaderWrapper>
      <Image
        src="/queenflowers-logo.svg"
        alt="Queen Flowers"
        width={120}
        height={100}
      />
    </AddHeaderWrapper>
  </Container>
)

export default AppHeader
