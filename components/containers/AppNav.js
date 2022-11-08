import Link from 'next/link'
import styled from 'styled-components'
import { CollorPalette } from '../../libs/Colors'
import { Categories } from '../../mock_data/categories'
import Container from './Container'

const AppNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${CollorPalette.Primary};
  color: ${CollorPalette.TextColorOnPrimary};
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
            <Link href={`/category/${encodeURIComponent(cat.slug)}`}>
              {cat.name}
            </Link>
          </StyledNavItem>
        ))}
      </StyledNav>
    </Container>
  </AppNavContainer>
)

export default AppNav
