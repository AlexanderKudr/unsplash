import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Navbar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
      <Box sx={{ display: "flex", alignItems: "space-between" }}>
        <Typography
          sx={{ marginRight: "20px", marginTop: "5px" }}
          component={"h1"}
          fontWeight={"bold"}
          variant="h6"
        >
          Unsplash
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            placeholder="Search photos"
            sx={{
              ":focus": { border: "1px solid #e0e0e0" },
              "& .MuiInput-underline:before": { borderBottom: "transparent" },
              "& .MuiInputBase-root:after": { borderBottom: "1px solid #63b8d5" },
              "& .MuiInputBase-root:hover": { borderBottom: "transparent" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>
      </Box>
      <Button
        sx={{
          backgroundColor: "lightblue",
          color: "black",
          ":hover": { backgroundColor: "rgb(46, 163, 190)" },
          height: "30px",
          marginTop: "5px",
        }}
        variant={"contained"}
      >
        Add a photo
      </Button>
    </Box>
  );
}