import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChanelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);

  // console.log(channelDetail, video);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideo(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" justifyContent="center">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              " linear-gradient(90deg, rgba(0,201,172,1) 0%, rgba(177,107,198,1) 100%)",
          }}
        />
        <ChannelCard marginTop="-110px" channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "40px" } }} />
        <Videos videos={video} />
      </Box>
    </Box>
  );
};

export default ChanelDetails;
