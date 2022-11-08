import { createBreakpoints } from 'styled-breakpoints'
import _debounce from 'lodash/debounce'

export const breakpoints = {
  // tl;dr Avoid using `from('mobile')` and only use `only('mobile')` as an escape hatch to avoid
  // unnecessary unsetting of styles in a bigger viewport.

  // All CSS here are usually implemented in a mobile-first fashion. Which means that there is
  // really no point in using `from('mobile')` because everything is assumed to for mobile
  // viewport unless scoped with media queries.
  mobile: 1,
  mobileL: 600,
  tablet: 768,
  desktop: 1024,
  hd: 1366,
  uhd: 1440,
  uhdL: 1600,
}

const { above: from, below, only } = createBreakpoints(breakpoints)

const SCREEN_SIZE_NAMES = {
  Mobile: 'mobile',
  MobileL: 'mobileL',
  Tablet: 'tablet',
  Desktop: 'desktop',
  Hd: 'hd',
  Uhd: 'uhd',
  UhdL: 'uhdL',
}

//should NOT make it dynamic and should keep it stable for reference as well as autocompletion
//UHD is possible to apply for "from" merely
export const SCREEN_SIZE = {
  From: {
    MobileL: from(SCREEN_SIZE_NAMES.MobileL),
    Tablet: from(SCREEN_SIZE_NAMES.Tablet),
    Desktop: from(SCREEN_SIZE_NAMES.Desktop),
    Hd: from(SCREEN_SIZE_NAMES.Hd),
    Uhd: from(SCREEN_SIZE_NAMES.Uhd),
    UhdL: from(SCREEN_SIZE_NAMES.UhdL),
  },
  Only: {
    Mobile: only(SCREEN_SIZE_NAMES.Mobile),
    MobileL: only(SCREEN_SIZE_NAMES.MobileL),
    Tablet: only(SCREEN_SIZE_NAMES.Tablet),
    Desktop: only(SCREEN_SIZE_NAMES.Desktop),
    Hd: only(SCREEN_SIZE_NAMES.Hd),
  },
  Below: {
    Mobile: below(SCREEN_SIZE_NAMES.Mobile),
    MobileL: below(SCREEN_SIZE_NAMES.MobileL),
    Tablet: below(SCREEN_SIZE_NAMES.Tablet),
    Desktop: below(SCREEN_SIZE_NAMES.Desktop),
    Hd: below(SCREEN_SIZE_NAMES.Hd),
  },
}
