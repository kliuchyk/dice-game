import { Alert, Snackbar, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { ALERT_INFO } from "./constants";
import { AlertInfo, AlertType } from "@/app/types";

interface SnackbarAlertProps {
  alertType: AlertType;
  comparison?: string;
  setAlert: Dispatch<SetStateAction<AlertInfo | null>>;
}

export function SnackbarAlert({
  setAlert,
  alertType,
  comparison,
}: SnackbarAlertProps) {
  const { message, description } = ALERT_INFO[alertType];

  return (
    <Snackbar
      open
      autoHideDuration={3000}
      onClose={() => setAlert(null)}
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
