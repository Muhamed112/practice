import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

const CustomLoadingButton = styled(LoadingButton)`
  background: red;
  height: 55px;
  :hover {
    background: darkred;
  }
`;

interface Props {
  isLoading: boolean;
}

const FormButton: React.FC<Props> = ({ isLoading }) => {
  return (
    <CustomLoadingButton
      size="large"
      loading={isLoading}
      variant="contained"
      type="submit"
      form="myForm"
    >
      Submit
    </CustomLoadingButton>
  );
};

export default FormButton;
