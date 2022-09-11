import * as React from "react";
import { Box, TextField, Autocomplete } from "@mui/material";
import { Countries } from "../../util/countryList";

interface Props {
  handleChange: (e: any) => void;
}

const CountrySelect: React.FC<Props> = ({ handleChange }) => {
  return (
    <Autocomplete
      id="country-select"
      fullWidth={true}
      options={Countries}
      autoHighlight
      onChange={handleChange}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          onChange={handleChange}
          name="country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
