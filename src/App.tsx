import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks if the password is correct
  const [password, setPassword] = useState(""); // Tracks the user input
  const [error, setError] = useState(false); // Shows error if the password is incorrect

  const handlePasswordSubmit = () => {
    if (password === "bananas") {
      setIsAuthenticated(true); // Grant access
    } else {
      setError(true); // Show error message
    }
  };

  return (
    <div>
      {/* Show modal only if not authenticated */}
      {!isAuthenticated && (
        <Modal open={!isAuthenticated} onClose={() => {}}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 6,
              borderRadius: 2,
              textAlign: "center",
            }}
            // to push
          >
            <Typography variant="h6" component="h2" sx={{ mb: 2, color: "black" }}>
              Enter Password
            </Typography>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false); // Reset error when user types
              }}
              fullWidth
              error={error}
              helperText={error ? "Incorrect password. Try again!" : ""}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handlePasswordSubmit}
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </Modal>
      )}

      {/* Render AppRouter only if authenticated */}
      {isAuthenticated && <AppRouter />}
    </div>
  );
};

export default App;