import { Box, Typography, FormControl, InputLabel, Select, FormControlLabel, Switch, TextField, Button } from '@mui/material'

function SettingAndPublish() {
  return (
    <div>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Visibility Settings</Typography>
      <FormControl fullWidth>
        <InputLabel>Event Visibility</InputLabel>
        <Select native>
          <option value="">Select visibility</option>
          <option value="public">Public - Searchable on platform</option>
          <option value="private">Private - Accessible via link/code</option>
        </Select>
      </FormControl>

      <Typography variant="h6">Access Control</Typography>
      <FormControlLabel
        control={<Switch />}
        label="Require Approval for Registration"
      />
      <FormControlLabel
        control={<Switch />}
        label="Enable Email Notifications"
      />
      <FormControlLabel
        control={<Switch />}
        label="Allow Attendee Comments/Reviews"
      />

      <Typography variant="h6">Organizer Information</Typography>
      <TextField
        fullWidth
        disabled
        label="Organizer ID"
      />
      <TextField
        fullWidth
        disabled
        label="Organizer Name"
      />
      <TextField
        fullWidth
        disabled
        label="Email"
      />

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="outlined">Save as Draft</Button>
        <Button variant="outlined">Preview Event</Button>
        <Button variant="contained">Publish Event</Button>
      </Box>
    </Box>
  </div>
  )
}

export default SettingAndPublish
