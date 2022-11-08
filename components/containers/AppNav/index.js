import { Container } from '../../styles'
import { AppNavContainer, StyledLi, StyledUl } from './styles'

const AppNav = () => (
  <AppNavContainer>
    <Container>
      <StyledUl>
        <StyledLi>Hoa tươi</StyledLi>
        <StyledLi>Hoa sinh nhật</StyledLi>
        <StyledLi>Hoa khai trương</StyledLi>
        <StyledLi>Hoa cưới</StyledLi>
        <StyledLi>Hoa chia buồn</StyledLi>
        <StyledLi>Hoa dịp lễ</StyledLi>
        <StyledLi>Trái cây</StyledLi>
        <StyledLi>Quà tặng</StyledLi>
      </StyledUl>
    </Container>
  </AppNavContainer>
)

export default AppNav
