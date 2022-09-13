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
  const formSubmit = async (values: FormData) => {
    console.log(values);
    await mutateAsync(values);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Practice Form
      </Typography>
      <Form
        onSubmit={formSubmit}
        render={({ handleSubmit, form, values }) => (
          <form id="myForm" onSubmit={handleSubmit}>
            <Field name="name">
              {(props) => (
                <CustomFormControl>
                  <TextField
                    name={props.input.name}
                    value={props.input.value}
                    label="Name"
                    onChange={props.input.onChange}
                  />
                </CustomFormControl>
              )}
            </Field>

            <Field name="surname">
              {(props) => (
                <CustomFormControl>
                  <TextField
                    name={props.input.name}
                    value={props.input.value}
                    label="Surname"
                    onChange={props.input.onChange}
                  />
                </CustomFormControl>
              )}
            </Field>

            <Field
              name="gender"
              render={({ handleChange }) => (
                <CustomFormControl>
                  <GenderSelect handleChange={handleChange} />
                </CustomFormControl>
              )}
            />

            <Field
              name="country"
              render={({ handleChange }) => (
                <CustomFormControl>
                  <CountrySelect handleChange={handleChange} />
                </CustomFormControl>
              )}
            />

            <CustomFormControl>
              {/* click={() => form.reset()}  */}
              <FormButton isLoading={isLoading} />
            </CustomFormControl>

            <pre>{JSON.stringify(values)}</pre>
          </form>
        )}
      />
    </Box>
  );
};

export default MyForm;
