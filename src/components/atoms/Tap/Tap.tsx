import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, minHeight: '400px' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MUITabs({
  props,
  isVertical,
}: {
  props: Record<string, React.ReactNode>;
  isVertical?: boolean;
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <Box
      sx={{
        width: "100%",
        ...(isVertical && {
          display: "flex",
        }),
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          minWidth: "20%",
          borderColor: "divider",
          ...(isVertical && {
            display: "flex",
            flexDirection: "column",
          }),
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          orientation={isVertical ? "vertical" : "horizontal"}
          variant="scrollable"
        >
          {Object.keys({ ...props }).map((label, idx) => (
            <Tab
              label={label}
              key={idx}
              {...a11yProps(idx)}
              sx={{
                textTransform: "capitalize",
                letterSpacing: "0.5px",
                fontSize: "15px",
                fontWeight: "500",
                color: "#333",
                ...(isVertical && {
                  alignItems: "flex-start",
                }),
              }}
            />
          ))}
        </Tabs>
      </Box>
      {Object.values({ ...props }).map((children, idx) => (
        <CustomTabPanel key={idx} value={value} index={idx} >
          {children}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
