import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetails = () => {
  const [VideoDetails, setVideoDetails] = useState(null);
  const { id } = useParams();

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetails;

  if (!VideoDetails?.snippet) return "Loading...";

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
  });

  return (
    <Box minHeight="92vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight=" bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`channel/${channelId}`}>
                <Typography>{channelTitle}</Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
