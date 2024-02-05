import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: 0 } }}
      >
        {exerciseVideos?.slice(0, 6).map(({ video }, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={video.thumbnails[0].url} alt={video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
export default ExerciseVideos;
