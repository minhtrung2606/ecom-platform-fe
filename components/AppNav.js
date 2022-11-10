import Link from 'next/link'

import styled from 'styled-components'

import { ColorPalette as CP } from '../libs/Colors'
import { Categories } from '../mock_data/categories'

import Container from './Container'

const AppTopNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${CP.BasePrimary900};
`

const StyledNav = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0 -1rem;
`

const StyledNavItem = styled.li`
  display: inline-block;
  text-transform: uppercase;

  a {
    display: inline-block;
    padding: 1rem;
    text-decoration: none;
    color: ${CP.White};

    &:hover {
      color: ${CP.White};
    }
  }
`

const StyledNavLink = styled(Link)`
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  color: ${CP.White};

  &:hover {
    color: ${CP.White};
  }
`

const AppNav = () => (
  <AppTopNavWrapper data-testid="app-nav">
    <Container>
      <StyledNav data-testid="nav">
        {Categories?.map(cat => (
          <StyledNavItem
            key={`${cat.id}-${cat.slug}`}
            data-testid="nav-item"
          >
            <StyledNavLink href={`/category/${encodeURIComponent(cat.slug)}`}>
              {cat.name}
            </StyledNavLink>
          </StyledNavItem>
        ))}
      </StyledNav>
    </Container>
  </AppTopNavWrapper>
)

export default AppNav
