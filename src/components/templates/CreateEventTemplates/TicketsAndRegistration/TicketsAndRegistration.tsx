import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";

function TicketsAndRegistration() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Typography variant="h6">Ticket Type</Typography>
        <FormControlLabel control={<Switch />} label="Paid Event" />

        <TextField
          fullWidth
          type="number"
          label="Ticket Price"
          placeholder="Enter price"
        />
        <TextField
          select
          fullWidth
          label="Currency"
          SelectProps={{
            native: true,
          }}
        >
          <option value="">Select currency</option>
          <option value="USD">USD</option>
          <option value="MMK">MMK</option>
        </TextField>

        <TextField
          fullWidth
          type="number"
          label="Ticket Capacity"
          placeholder="Enter maximum number of tickets"
        />

        <TextField
          select
          fullWidth
          label="Refund Policy"
          SelectProps={{
            native: true,
          }}
        >
          <option value="">Select refund policy</option>
          <option value="none">No Refund</option>
          <option value="partial">Partial Refund</option>
          <option value="full">Full Refund</option>
        </TextField>

        <Typography variant="h6">Registration Settings</Typography>
        <TextField
          fullWidth
          type="datetime-local"
          label="Registration Deadline"
        />

        <TextField
          fullWidth
          type="number"
          label="Maximum Tickets per Person"
          placeholder="Enter limit per person"
        />

        <FormControlLabel control={<Switch />} label="Enable Waiting List" />

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Ticket Description"
          placeholder="e.g. Includes lunch and materials"
        />
      </Box>
    </div>
  );
}

export default TicketsAndRegistration;
