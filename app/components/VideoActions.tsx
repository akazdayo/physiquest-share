// components/VideoActions.tsx
"use client";
import type React from "react";

interface VideoActionsProps {
    likes: number;
}

const VideoActions: React.FC<VideoActionsProps> = ({ likes }) => {
    return (
        <div className="flex gap-4 mb-6">
            <button type="button" className="flex items-center gap-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
                <i className="fas fa-heart" />
                <span>{likes}</span>
            </button>
            <button type="button" className="flex items-center gap-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
                <i className="fas fa-share" />
                <span>共有</span>
            </button>
        </div>
    );
};

export default VideoActions;