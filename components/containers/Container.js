import styled from 'styled-components'
import { SCREEN_SIZE } from '../../libs/Media'

const Container = styled.div`
  padding: 0 2rem;

  ${SCREEN_SIZE.From.Hd} {
    max-width: 100rem;
    margin-left: auto;
    margin-right: auto;
  }
`

export default Container
