import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function LimitTags({
  tagsValue,
  inputHandler,
}: {
  tagsValue: string[];
  inputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>|React.SyntheticEvent<Element, Event>,
    value?: string[],
    flag?: string
  ) => void;
}) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={tags}
      getOptionLabel={(option) => option}
      defaultValue={[tags[13], tags[12], tags[11]]}
      renderInput={(params) => (
        <TextField
          name="tags"
          {...params}
          label="Tags"
          placeholder="Favorites"
        />
      )}
      fullWidth
      value={tagsValue}
      onChange={(e, value) => inputHandler(e, value, "tags")}
    />
  );
}

const tags = [
  "AI",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Mobile Development",
  "Frontend",
  "Backend",
  "Full Stack",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "Blockchain",
  "Open Source",
  "Software Engineering",

  "UI/UX",
  "Graphic Design",
  "Product Design",
  "Design Thinking",
  "Prototyping",
  "User Research",

  "Startup",
  "Entrepreneurship",
  "Innovation",
  "Leadership",
  "Business Strategy",
  "Product Management",
  "Marketing",
  "Sales",
  "Finance",
  "Investment",
  "Networking",

  "Career Growth",
  "Mentorship",
  "Public Speaking",
  "Personal Branding",
  "Communication Skills",
  "Time Management",
  "Work-Life Balance",
  "Team Building",
  "Remote Work",
  "Productivity",

  "Education",
  "Community Building",
  "Nonprofit",
  "Sustainability",
  "Women in Tech",
  "Diversity & Inclusion",
  "Volunteering",

  "Workshop",
  "Bootcamp",
  "Seminar",
  "Webinar",
  "Panel Discussion",
  "Hackathon",
  "Conference",
  "Meetup",
  "Demo Day",
  "Networking Event",
];
