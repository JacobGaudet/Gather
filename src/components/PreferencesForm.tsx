import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

const PreferencesForm: React.FC = () => {
  const [preferences, setPreferences] = useState({
    denomination: "",
    size: "",
    worshipStyle: "",
    language: "",
    serviceTime: "",
    childcare: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    setPreferences({ ...preferences, [name!]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Saved Preferences:", preferences);
    // Add API call or context update logic here to save preferences
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        width: "100%",
        maxWidth: "400px",
        mt: 3,
      }}
    >
      {/* Denomination */}
      <FormControl fullWidth>
        <InputLabel>Denomination</InputLabel>
        <Select
          name="denomination"
          value={preferences.denomination}
          onChange={(event) => handleChange(event as SelectChangeEvent<string>)}
        >
          <MenuItem value="Catholic">Catholic</MenuItem>
          <MenuItem value="Protestant">Protestant</MenuItem>
          <MenuItem value="Baptist">Baptist</MenuItem>
          <MenuItem value="Pentecostal">Pentecostal</MenuItem>
          <MenuItem value="Non-Denominational">Non-Denominational</MenuItem>
        </Select>
      </FormControl>

      {/* Church Size */}
      <FormControl fullWidth>
        <InputLabel>Church Size</InputLabel>
        <Select
          name="size"
          value={preferences.size}
          onChange={(event) => handleChange(event as SelectChangeEvent<string>)}
        >
          <MenuItem value="Small">Small (under 100 members)</MenuItem>
          <MenuItem value="Medium">Medium (100-500 members)</MenuItem>
          <MenuItem value="Large">Large (500+ members)</MenuItem>
        </Select>
      </FormControl>

      {/* Worship Style */}
      <FormControl fullWidth>
        <InputLabel>Worship Style</InputLabel>
        <Select
          name="worshipStyle"
          value={preferences.worshipStyle}
          onChange={(event) => handleChange(event as SelectChangeEvent<string>)}
        >
          <MenuItem value="Traditional">Traditional</MenuItem>
          <MenuItem value="Contemporary">Contemporary</MenuItem>
          <MenuItem value="Blended">Blended</MenuItem>
        </Select>
      </FormControl>

      {/* Language */}
      <FormControl fullWidth>
        <InputLabel>Language</InputLabel>
        <Select
          name="language"
          value={preferences.language}
          onChange={(event) => handleChange(event as SelectChangeEvent<string>)}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Korean">Korean</MenuItem>
          <MenuItem value="Mandarin">Mandarin</MenuItem>
          <MenuItem value="Any">Any</MenuItem>
        </Select>
      </FormControl>

      {/* Service Time */}
      <TextField
        label="Preferred Service Time"
        name="serviceTime"
        type="time"
        value={preferences.serviceTime}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />

      {/* Childcare Availability */}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="childcare"
              checked={preferences.childcare}
              onChange={handleCheckboxChange}
            />
          }
          label="Childcare Available"
        />
      </FormGroup>

      {/* Save Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          width: "100%",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Save Preferences
      </Button>
    </Box>
  );
};

export default PreferencesForm;
