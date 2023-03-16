import styled from "styled-components";
export const CardsContainer = styled.div`
@media screen and (orientation: landscape) {
display:flex;
flex-direction:row;
justify-content:space-between;
gap: 5%;
}
@media screen and (orientation: portrait) {
display:flex;
flex-direction:column;
justify-content:space-between;
gap: 5%;
  }
`
