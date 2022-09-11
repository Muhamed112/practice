import React from "react";
import { useState } from "react";
import { FormControl, TextField, Box, Typography } from "@mui/material";
import CountrySelect from "./dropdowns/CountrySelect";
import GenderSelect from "./dropdowns/GenderSelect";
import FormButton from "./buttons/FormButton";
import { useMutation } from "react-query";
import { createForm } from "../api/postApi";

interface FormData {
  name: string;
  surname: string;
  gender: string;
  country: string;
}

const MyForm: React.FC = () => {
  const { mutateAsync, isLoading } = useMutation(createForm);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    gender: "",
    country: "",
  });

  const handleInput = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateAsync(formData);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Practice Form
      </Typography>
      <form id="myForm" onSubmit={formSubmit}>
        <div>
          <FormControl sx={{ mt: 3 }} fullWidth={true}>
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              onChange={handleInput}
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ mt: 3 }} fullWidth={true}>
            <TextField
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              name="surname"
              onChange={handleInput}
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ mt: 3 }} fullWidth={true}>
            <GenderSelect handleChange={handleInput} />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ mt: 3 }} fullWidth={true}>
            <CountrySelect handleChange={handleInput} />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ mt: 3 }} fullWidth={true}>
            <FormButton isLoading={isLoading} />
          </FormControl>
        </div>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </Box>
  );
};

export default MyForm;
