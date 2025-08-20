const fs = require("fs").promises;
const getYouTubeStudioTheme = require("./youtube-theme");

// YouTube Studio Themes - 为YouTube创作者定制的双主题

const youtubeStudioLightTheme = getYouTubeStudioTheme({
  theme: "youtube_studio_light",
  name: "YouTube Studio Light",
});

const youtubeStudioDarkTheme = getYouTubeStudioTheme({
  theme: "youtube_studio_dark",
  name: "YouTube Studio Dark",
});

// Write themes - 生成浅色和深色两个主题文件

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      "./themes/youtube-studio-light.json",
      JSON.stringify(youtubeStudioLightTheme, null, 2)
    ),
    fs.writeFile(
      "./themes/youtube-studio-dark.json",
      JSON.stringify(youtubeStudioDarkTheme, null, 2)
    )
  ]))
  .catch(() => process.exit(1))
