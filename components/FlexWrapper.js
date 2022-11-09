import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: center;
  justify-content: center;

  .flex-wrapper-item {
    flex: 1;
    margin: 1rem;
  }

  &.width-by-children .flex-wrapper-item {
    max-width: calc(100% / ${props => props.quantity || props.children?.length});
  }
`

export default FlexWrapper