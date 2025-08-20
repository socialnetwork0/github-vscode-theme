const fs = require("fs").promises;
const getYouTubeStudioTheme = require("./youtube-theme");

// YouTube Studio Themes

const youtubeStudioLightTheme = getYouTubeStudioTheme({
  theme: "youtube_studio_light",
  name: "YouTube Studio Light",
});

// Removed dark theme generation to keep only the Light theme

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    fs.writeFile(
      "./themes/youtube-studio-light.json",
      JSON.stringify(youtubeStudioLightTheme, null, 2)
    )
  )
  .catch(() => process.exit(1))
