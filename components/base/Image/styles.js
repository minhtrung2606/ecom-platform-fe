import Image from 'next/image'
import styled from 'styled-components'
import { CollorPalette } from '../../../libs/Colors'

export const StyledImage = styled(Image)`
  background-color: ${CollorPalette.BackgroundColor};
  object-fit: ${({ objectfit }) =>
    objectfit === 'true' ? 'contain' : 'cover'};
`
