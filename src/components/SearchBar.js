// Styling
import {
  SearchBarStyled,
  SearchBarWrap,
  SearchContainer,
  SearchButton,
} from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  return (
    <>
      <SearchBarWrap>
        <SearchContainer>
          <SearchBarStyled
            placeholder="Search for a ... "
            onChange={(event) => props.setQuery(event.target.value)}
          />
          <SearchButton type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchContainer>
      </SearchBarWrap>
    </>
  );
};

export default SearchBar;
