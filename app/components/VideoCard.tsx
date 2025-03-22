// components/VideoCard.tsx
"use client";
import React from "react";
import { Video } from "../types";

interface VideoCardProps {
    video: Video;
    onClick: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden transform transition-transform hover:-translate-y-1 cursor-pointer"
            onClick={() => onClick(video)}
        >
            <div className="relative">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 text-sm rounded">
                    {video.duration}
                </span>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {video.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    {video.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {video.date}
                </p>
            </div>
        </div>
    );
};

export default VideoCard;
