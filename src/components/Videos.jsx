import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      sx={{ justifyContent: { xs: "center", md: "start" } }}
      // justifyContent="center"
    >
      {videos.map((item, indx) => (
        <Box key={indx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
