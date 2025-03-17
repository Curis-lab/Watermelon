import { SearchBoxWrapper, StyledInputBase } from "./SearchBox.styled";
import { Search } from "@mui/icons-material";
const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <Search
        sx={{
          mr: 1,
          color: (theme) => theme.palette.action.disabled,
        }}
      />
      <StyledInputBase placeholder="Search..." />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
