import {
  Box,
  InputAdornment,
  inputBaseClasses,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import SelectWithOptions from "../../atoms/Dropdown/SelectWithOptions/SelectWithOptions";
import HeroHeader from "../../molecules/HeroHeader/HeroHeader";
import { hero, registration } from "../../../contents/onboardingConfig.json";
import {
  StyledContainer,
  StyledSubmitButton,
  StyledForm,
  StyledContent,
} from "./OnboardingTemplate.style";
import TextBox from "../../atoms/TextBox/TextBox/TextBox";
import FormHandler, { IRender } from "../../common/FormHandler";

export interface IBaseFormRegister {
  name: string;
  email: string;
  password: string;
  role: "mentor";
  bio: string;
  availability: boolean;
  expertise: string;
}

const RegisterFormTemplate = ({
  submitHandler,
  inputHandler,
  formData,
}: IRender<IBaseFormRegister>) => (
  <StyledForm onSubmit={submitHandler}>
    <TextBox
      properties={{
        value: formData.name,
        onChange: inputHandler,
        name: "name",
        label: "Name",
        helperText: "Please enter your full name",
        type: "text",
      }}
    />
    <TextField
      type="email"
      name="email"
      label="Email"
      value={formData.email}
      onChange={inputHandler}
      required
      sx={{ minWidth: "100%" }}
      helperText="Please enter a unique email address"
      slotProps={{
        htmlInput: {
          sx: { textAlign: "start" },
        },
        input: {
          endAdornment: (
            <InputAdornment
              position="start"
              sx={{
                alignSelf: "flex",
                margin: 0,
                opacity: 0,
                pointerEvents: "none",
                [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                  opacity: 1,
                },
              }}
            >
              @gmail.com
            </InputAdornment>
          ),
        },
      }}
    />
    <TextBox
      properties={{
        type: "password",
        name: "password",
        label: "Password",
        value: formData.password,
        onChange: inputHandler,
        helperText: "Password must be at least 8 characters long",
      }}
    />
    <SelectWithOptions
      textFieldProperties={{
        name: "role",
        value: formData.role,
        onChange: inputHandler,
        helperText: "Select your role",
      }}
      values={[
        { value: "mentor", label: "Mentor" },
        { value: "member", label: "Member" },
        { value: "organizer", label: "Organizer" },
      ]}
      render={({
        val,
        idx,
      }: {
        val: { value: string; label: string };
        idx: number | string;
      }) => (
        <MenuItem value={val.value} key={idx}>
          {val.label}
        </MenuItem>
      )}
    />
    <SelectWithOptions
      textFieldProperties={{
        name: "expertise",
        value: formData.expertise,
        onChange: inputHandler,
        helperText: "Select your expertise",
      }}
      values={[
        { value: "web-development", label: "Web Development" },
        { value: "data-science", label: "Data Science" },
        { value: "design", label: "Design" },
        { value: "marketing", label: "Marketing" },
        { value: "business", label: "Business" },
      ]}
      render={({
        val,
        idx,
      }: {
        val: { value: string; label: string };
        idx: number | string;
      }) => (
        <MenuItem value={val.value} key={idx}>
          {val.label}
        </MenuItem>
      )}
    />
    <TextBox
      properties={{
        name: "bio",
        label: "Short Bio",
        value: formData.bio,
        onChange: inputHandler,
        helperText: "Tell us about yourself.",
        multiline: true,
        rows: 4,
      }}
    />

    <Typography variant="caption">
      <input
        type="checkbox"
        name="availability"
        checked={formData.availability}
        onChange={inputHandler}
      />
      Available for Mentorship
    </Typography>
    <StyledSubmitButton disabled={false} type="submit">
      Register
    </StyledSubmitButton>
  </StyledForm>
);

function OnboardingTemplate({processHandler} :{processHandler:(data:IBaseFormRegister)=>void}) {
  return (
    <StyledContainer>
      <StyledContent>
        <HeroHeader {...hero} white />
      </StyledContent>
      <Box
        sx={{
          background: "white",
          minWidth: "20rem",
          padding: "2em",
          marginInline: "20px",
          borderRadius: "10px",
        }}
      >
        <HeroHeader {...registration} />
        <FormHandler<IBaseFormRegister>
          initial={{
            name: "",
            email: "",
            password: "",
            role: "mentor",
            bio: "",
            availability: false,
            expertise: "design",
          }}
          process={processHandler}
          render={RegisterFormTemplate}
        />
      </Box>
    </StyledContainer>
  );
}

export default OnboardingTemplate;
