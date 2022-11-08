import styled from 'styled-components'
import { CollorPalette } from '../../../libs/Colors'

export const AppNavContainer = styled.div`
  background-color: ${CollorPalette.Primary};
  color: #ffffff;
`

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin: 0 -1rem;
`

export const StyledLi = styled.li`
  display: inline-block;
  padding: 1rem;
  font-weight: 100;
  font-size: 1.25rem;
`
