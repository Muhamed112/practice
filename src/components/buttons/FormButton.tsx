import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

interface Props {
  isLoading: boolean;
}

const FormButton: React.FC<Props> = ({ isLoading }) => {
  return (
    <LoadingButton
      size="large"
      loading={isLoading}
      variant="contained"
      type="submit"
      form="myForm"
    >
      Submit
    </LoadingButton>
  );
};

export default FormButton;
