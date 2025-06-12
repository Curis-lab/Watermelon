import { InputBase, styled } from "@mui/material";

export const SearchBoxWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  border: `1px solid #000`,
  borderRadius: theme.shape.borderRadiusExtraLarge,
  padding: "3px 5px 3px 12px",
  width: "100%",
}));

export const StyledInputBase = styled(
  InputBase,
  {}
)({
  width: "100%",
//   minWidth: "200px",
  backgroundColor: "white",
});
