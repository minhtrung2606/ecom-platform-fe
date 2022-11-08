import Link from 'next/link'
import styled from 'styled-components'
import { CollorPalette } from '../../libs/Colors'
import { Categories } from '../../mock_data/categories'
import { Container } from '../styles'

const AppNavContainer = styled.nav`
  background-color: ${CollorPalette.Primary};
  color: #ffffff;
`

const StyledNav = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0 -1rem;
`

const StyledNavItem = styled.li`
  display: inline-block;
  font-weight: 100;
  font-size: 1rem;
  text-transform: uppercase;

  a {
    display: inline-block;
    padding: 1rem;
  }
`

const AppNav = () => (
  <AppNavContainer data-testid="app-nav">
    <Container>
      <StyledNav data-testid="nav">
        {Categories?.map(cat => (
          <StyledNavItem
            key={`${cat.id}-${cat.slug}`}
            data-testid="nav-item"
          >
            <Link href={`/category/${encodeURIComponent(cat.slug)}`}>{cat.name}</Link>
          </StyledNavItem>
        ))}
        {/* <StyledNavItem>Hoa tươi</StyledNavItem>
        <StyledNavItem>Hoa sinh nhật</StyledNavItem>
        <StyledNavItem>Hoa khai trương</StyledNavItem>
        <StyledNavItem>Hoa cưới</StyledNavItem>
        <StyledNavItem>Hoa chia buồn</StyledNavItem>
        <StyledNavItem>Hoa dịp lễ</StyledNavItem>
        <StyledNavItem>Trái cây</StyledNavItem>
        <StyledNavItem>Quà tặng</StyledNavItem> */}
      </StyledNav>
    </Container>
  </AppNavContainer>
)

export default AppNav
