// components/VideoGrid.tsx
"use client";
import React from "react";
import VideoCard from "./VideoCard";
import { Video } from "../types";

interface VideoGridProps {
    videos: Video[];
    onVideoClick: (video: Video) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoClick }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} onClick={onVideoClick} />
            ))}
        </div>
    );
};

export default VideoGrid;
