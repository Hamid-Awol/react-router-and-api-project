import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
      
      const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=${API_KEY}`;

      try {

        const response = await fetch(URL);
        const data = await response.json();
        console.log("Fetched data:", data);
        setVideos(data.items || []);
        setLoading(false);
      } catch (error) {

        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    fetchVideos();
    
  }, []);

  if (loading) {
    return <div className="youtube-section">Loading videos...</div>;
  }

  if (videos.length === 0) {
    return <div className="youtube-section">No videos found.</div>;
  }

  
  return (
    <div className="youtube-section">
      <h2>Latest YouTube Videos</h2>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </a>
            <h3>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.snippet.title}
              </a>
            </h3>
            <p>{video.snippet.description || "No description available"}</p>
            <p className="publish-date">
              Published: {new Date(video.snippet.publishedAt).toDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
