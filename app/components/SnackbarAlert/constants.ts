interface AlertInfo {
  message: string;
  description?: (comparison: string) => string;
}

export const ALERT_INFO: Record<string, AlertInfo> = {
  success: {
    message: "You won",
  },
  error: {
    message: "You lost",
    description: (comparison: string) => `Number was ${comparison}`,
  },
};
