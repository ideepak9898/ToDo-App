import styled from "@emotion/styled";
import {
  DeleteForeverRounded,
  DescriptionRounded,
  ErrorOutlineRounded,
  ExpandMoreRounded,
  RefreshRounded,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Typography,
} from "@mui/material";
import { Emoji } from "emoji-picker-react";
import React, { ErrorInfo } from "react";
import { TaskIcon } from ".";
import { UserContext } from "../contexts/UserContext";
import { getFontColor } from "../utils";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary component that catches and displays errors.
 */

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static contextType = UserContext;
  declare context: React.ContextType<typeof UserContext>;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  handleClearData() {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }

  render() {
    if (this.state.hasError) {
      // const { user } = this.context;
      // const { tasks } = user;

      return (
        <Container>
          <ErrorHeader>
            <span>Oops! An error occurred.&nbsp;</span>
            <span>
              <Emoji size={38} unified="1f644" />
            </span>
          </ErrorHeader>
          <ErrorIconContainer>
            <TaskIcon scale={0.6} variant="error" />
          </ErrorIconContainer>
          <h2>
            To fix it, try clearing your local files (cookies and cache) and then refresh the page.
          </h2>
          <Alert severity="error" variant="filled" sx={{ mt: "-8px", mb: "18px" }}>
            By cleaning app data, you will lose all of your tasks.
          </Alert>
          <div style={{ display: "flex", gap: "12px" }}>
            <StyledButton color="warning" onClick={() => location.reload()}>
              <RefreshRounded /> &nbsp; Refresh Page
            </StyledButton>
            <StyledButton color="error" onClick={this.handleClearData}>
              <DeleteForeverRounded /> &nbsp; Auto Clear
            </StyledButton>
          </div>
          <h3>
            <span style={{ color: "#ff3131", display: "inline-block" }}>
              <ErrorOutlineRounded sx={{ verticalAlign: "middle", mb: "4px" }} /> ERROR:
            </span>{" "}
            <span translate="no">
              [{this.state.error?.name}] {this.state.error?.message}
            </span>
          </h3>

          <ErrorAccordion disableGutters>
            <AccordionSummary expandIcon={<ErrorExpandIcon />}>
              <Typography
                fontWeight={700}
                fontSize={18}
                sx={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <DescriptionRounded /> Error stack
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div translate="no" style={{ opacity: 0.8, fontSize: "12px" }}>
                {this.state.error?.stack?.replace(this.state.error?.message, "")}
              </div>
            </AccordionDetails>
          </ErrorAccordion>
        </Container>
      );
    }

    return this.props.children;
  }
}

const Container = styled.div`
  margin: 0 8vw;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ErrorIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const ErrorHeader = styled.h1`
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 36px;
  color: #ff3131;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    text-align: left;
    justify-content: left;
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const ErrorAccordion = styled(Accordion)`
  color: ${({ theme }) => getFontColor(theme.secondary)};
  border-radius: 14px !important;
  background: ${({ theme }) => getFontColor(theme.secondary)}18;
  box-shadow: none;
  padding: 4px;
  margin-bottom: 18px;
`;

const ErrorExpandIcon = styled(ExpandMoreRounded)`
  color: ${({ theme }) => getFontColor(theme.secondary)};
  font-size: 32px;
`;

const StyledButton = styled(Button)`
  padding: 10px 30px;
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
StyledButton.defaultProps = {
  variant: "outlined",
  size: "large",
};

// const UserDataLabel = styled.p`
//   font-size: 18px;
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 8px 0;
// `;

export default ErrorBoundary;
