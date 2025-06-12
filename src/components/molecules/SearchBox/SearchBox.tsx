import { SearchBoxWrapper, StyledInputBase } from "./SearchBox.styled";
import { Search } from "@mui/icons-material";
const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <Search
        sx={{
          mr: 1,
          color: '#000',
        }}
      />
      <StyledInputBase placeholder="Search..." />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
