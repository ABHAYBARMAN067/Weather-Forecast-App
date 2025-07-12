import { TextField, Button, Box } from "@mui/material";

function SearchBox({ city, setCity, fetchWeather }) {
  return (
    <Box textAlign="center" mt={5}>
      <TextField
        label="City Name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <br /><br />
      <Button variant="contained" onClick={fetchWeather}>
        SEARCH
      </Button>
    </Box>
  );
}

export default SearchBox;
