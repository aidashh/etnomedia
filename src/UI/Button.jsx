import React from "react";
import styled from "styled-components";
function stylesButton(variant) {
  switch (variant) {
    case "contained": {
      return {
        background: "#1F6ED4",
        "&:hover": {
          background: "#4C94F0",
        },
        "&:active": {
          background: "#0052BC",
        },
        "&:disabled": {
          background: "#C9C9C9",
        },
      };
    }
    case "outlined": {
      return {
        background: "none",
        border: "1px solid  #1F6ED4 ",
        color: "#0052BC",
        "&:hover": {
          background: "#4C94F0",
          color: "white",
        },
        "&:active": {
          background: "#0052BC",
          color: "white",
        },
        "&:disabled": {
          background: "#C9C9C9",
        },
      };
    }
    case "warning": {
      return {
        background: "#F37705s",
        border: "none ",
        color: "white",
        "&:hover": {
          background: "#FF912B",
          color: "white",
        },
        "&:active": {
          background: "#CF6300",
          color: "white",
        },
        "&:disabled": {
          background: "#C9C9C9",
        },
      };
    }
    case "danger": {
      return {
        background: "#DF2D2D",
        border: "none ",
        color: "white",
        "&:hover": {
          background: "##E54343",
          color: "white",
        },
        "&:active": {
          background: "#C20B0B",
          color: "white",
        },
        "&:disabled": {
          background: "#C9C9C9",
        },
      };
    }
  }
}

const Button = ({
  children,
  disabled,
  type = "button",
  onClick,
  variant = "contained",
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button`
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 18px;
  padding: 5px 10px;
  font-weight: 600;
  border: none;
  ${({ variant }) => stylesButton(variant)}
`;
