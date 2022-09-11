import React from "react";
import { TextField, Autocomplete } from "@mui/material";
import { Genders } from "../../util/genderList";

interface Props {
  handleChange: (e: any) => void;
}

const GenderSelect: React.FC<Props> = ({ handleChange }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Genders}
      fullWidth={true}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Gender"
          name="gender"
          onChange={handleChange}
        />
      )}
    />
  );
};

export default GenderSelect;
