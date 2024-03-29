import styled from 'styled-components'

const BannersWrapper = styled.section`
  min-height: 45rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('temp-main-banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-size: cover;
`

const Banners = () => (
  <BannersWrapper />
)

export default Banners
