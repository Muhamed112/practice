import React from "react";
import { FormControl, TextField, Box, Typography } from "@mui/material";
import CountrySelect from "./dropdowns/CountrySelect";
import GenderSelect from "./dropdowns/GenderSelect";
import FormButton from "./buttons/FormButton";
import { useMutation } from "react-query";
import { createForm } from "../api/postApi";
import { styled } from "@mui/material/styles";
import { Form, Field } from "react-final-form";

const CustomFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 25px;
`;

interface FormData {
  name: string;
  surname: string;
  gender: string;
  country: string;
}

const MyForm: React.FC = () => {
  const { mutateAsync, isLoading } = useMutation(createForm);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    surname: "",
    gender: "",
    country: "",
  });

  const handleInput = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async () => {
    console.log(formData);
    await mutateAsync(formData);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Practice Form
      </Typography>
      <Form
        onSubmit={formSubmit}
        render={({ handleSubmit }) => (
          <form id="myForm" onSubmit={handleSubmit}>
            <CustomFormControl>
              <Field name="name">
                {({ props }) => (
                  <TextField
                    label="Name"
                    name="name"
                    onChange={handleInput}
                    {...props}
                  />
                )}
              </Field>
            </CustomFormControl>

            <CustomFormControl>
              <Field name="surname">
                {({ props }) => (
                  <TextField
                    label="Surname"
                    name="surname"
                    onChange={handleInput}
                    {...props}
                  />
                )}
              </Field>
            </CustomFormControl>

            <CustomFormControl>
              <Field name="gender">
                {({ props }) => (
                  <GenderSelect {...props} handleChange={handleInput} />
                )}
              </Field>
            </CustomFormControl>

            <CustomFormControl>
              <Field name="country">
                {({ props }) => (
                  <CountrySelect {...props} handleChange={handleInput} />
                )}
              </Field>
            </CustomFormControl>

            <div>
              <CustomFormControl>
                <FormButton isLoading={isLoading} />
              </CustomFormControl>
            </div>
          </form>
        )}
      />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </Box>
  );
};

export default MyForm;
