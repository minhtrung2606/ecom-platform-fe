import { StyledImage } from './styles'

const Image = ({
  src,
  alt,
  title,
}) => {
  return (
    <StyledImage
      objectfit="true"
      src={src}
      alt={alt || `Image(${src})`}
      title={title}
      layout="fill"
      onLoad={() => {/** TODO: add handler later */}}
      onError={() => {/** TODO: add handler later */}}
    />
  )
}

export default Image
