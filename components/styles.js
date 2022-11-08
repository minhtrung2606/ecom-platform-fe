import styled from 'styled-components'
import { SCREEN_SIZE } from '../libs/Media'

export const Container = styled.div`
  ${SCREEN_SIZE.From.UhdL} {
    max-width: 100rem;
    margin-left: auto;
    margin-right: auto;
  }
`
