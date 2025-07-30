import { Alert, Snackbar, Typography } from "@mui/material";
import React from "react";
import { ALERT_INFO } from "./constants";
import { AlertType } from "@/app/types";

interface SnackbarAlertProps {
  open: boolean;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  alertType: AlertType;
  comparison?: string;
}

export function SnackbarAlert({
  open,
  onClose,
  alertType,
  comparison,
}: SnackbarAlertProps) {
  const { message, description } = ALERT_INFO[alertType];

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={alertType} variant="filled" sx={{ width: 600 }}>
        {message}
        {comparison && (
          <Typography variant="body2" fontWeight={500} style={{ margin: 0 }}>
            {description?.(comparison)}
          </Typography>
        )}
      </Alert>
    </Snackbar>
  );
}
