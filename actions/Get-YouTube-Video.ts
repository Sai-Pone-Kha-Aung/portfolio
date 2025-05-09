import { useState, useEffect } from "react";

type YouTubeVideoProps = {
  url: string;
};

const GetYouTubeVideo = () => {
  const [data, setData] = useState<YouTubeVideoProps>({ url: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchYTVideo = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&channelId=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&type=video&maxResults=1&order=date`
        );
        const videoData = await response.json();
        setData({ url: videoData.items[0].id.videoId });
        setLoading(false);
        console.log(videoData.items[0].id.videoId);
        console.log(videoData);
      } catch (error) {
        setLoading(false);
        setError("Error fetching YouTube video");
      }
    };

    fetchYTVideo();
  }, []);

  return data.url;
};

export default GetYouTubeVideo;
