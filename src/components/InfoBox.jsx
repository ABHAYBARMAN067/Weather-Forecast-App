import { Card, CardContent, Typography } from "@mui/material";

// Function to return weather emoji based on main condition
function getWeatherIcon(main) {
  switch (main) {
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Clear":
      return "☀️";
    case "Snow":
      return "❄️";
    case "Thunderstorm":
      return "⛈️";
    default:
      return "🌡️";
  }
}

// Main component
function InfoBox({ data }) {
  if (
    !data ||
    !data.weather ||
    !data.weather[0] ||
    !data.main
  ) {
    return (
      <p style={{ textAlign: "center", color: "red" }}>
        ❌ Invalid Weather Data
      </p>
    );
  }

  const icon = getWeatherIcon(data.weather[0].main);

  return (
    <Card sx={{ maxWidth: 300, margin: "20px auto", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5">
          {data.name} {icon}
        </Typography>
        <Typography variant="body1">
          Temperature = {data.main.temp}&deg;C
        </Typography>
        <Typography variant="body1">
          Humidity = {data.main.humidity}
        </Typography>
        <Typography variant="body1">
          Min Temp = {data.main.temp_min}&deg;C
        </Typography>
        <Typography variant="body1">
          Max Temp = {data.main.temp_max}&deg;C
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          The weather can be described as <i>{data.weather[0].description}</i> and feels like {data.main.feels_like}&deg;C
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
