import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
  font-family: 'Roboto', sans-serif;
}
`;
export const Title = styled.h2`
  text-align: center;
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }
  text-align: center;
`;
export const IngredientWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }
  text-align: center;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const UpdateButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #2d5631;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;

export const DeleteButtonStyled = styled.p`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: #8f0000;
  text-decoration: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;

export const AddButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  color: #000;
  background-color: #00af91;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
