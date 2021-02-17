import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{

  font-family: 'Roboto', sans-serif;
}
`;

export const CategoryWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  // p {
  //   text-align: center;

  //   &.product-price {
  //     color: ${(props) => props.theme.pink};
  //   }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
