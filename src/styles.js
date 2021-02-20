import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const Logo = styled(Link)`
  padding: "0.25em 1em";
  color: ${(props) => props.theme.blue} !important;
  img {
    width: 200px;
  }
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: "0.25em 1em";
  &.active {
    color: blue;
  }
  text-decoration: none;
`;
export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
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
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CategoryWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  text-align: center;
`;

export const RecipeWrapper = styled.div`
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
  // padding: 0.5rem;
  // margin: 1rem auto;
  // display: block;
  // width: 40%;
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  &:focus {
    background: #00b4cc;
  }
`;

export const SearchBarWrap = styled.div`
  width: 30%;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

export const InputFieldStyled = styled.input`
  font-family: Georgia, "Times New Roman", Times, serif;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 18px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  color: #8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
`;
export const FormStyled = styled.div`
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 10px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
`;
export const FieldSetStyled = styled.fieldset`
  border: none;
`;
export const LegendStyled = styled.legend`
  font-size: 1.4em;
  margin-bottom: 10px;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
`;

// export const SearchBarButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 60px;
//   height: 60px;
//   background: #28d7d7;
//   border: none;
//   border-radius: 30px;
//   color: #fff;
//   font-size: 1.3em;
//   outline: none;
//   cursor: pointer;
// `;

// export const UpdateButtonStyled = styled.button`
//   display: inline-block;
//   border: none;
//   padding: 10px 20px;
//   margin: 5px;
//   border-radius: 5px;
//   color: #fff;
//   background-color: #2d5631;
//   text-decoration: none;
//   font-size: 15px;
//   font-family: "Roboto", sans-serif;
// `;

// export const DeleteButtonStyled = styled.p`
//   display: inline-block;
//   border: none;
//   padding: 10px 20px;
//   margin: 5px;
//   border-radius: 5px;
//   color: #fff;
//   background-color: #8f0000;
//   text-decoration: none;
//   font-size: 15px;
//   font-family: "Roboto", sans-serif;
// `;

export const AddButtonStyled = styled.button`
  // display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  background-color: #00af91;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
  display: flex;
  align-items: flex-start;
  // align-items: center;
  justify-content: center;
  block {
    display: block;
    width: 100%;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
`;
export const FormAddButtonStyled = styled.button`
  position: relative;
  display: block;
  padding: 19px 39px 18px 39px;
  color: #fff;
  margin: 0 auto;
  background: #1abc9c;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid #16a085;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  &:hover {
    background: #109177;
  }
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
