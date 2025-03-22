// components/VideoModal.tsx
"use client";
import React from "react";
import VideoActions from "./VideoActions";
import CommentSection from "./CommentSection";
import { Video } from "../types";

interface VideoModalProps {
    video: Video;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="relative aspect-video bg-black">
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {video.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                {video.author}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                {video.date}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {video.description}
                    </p>

                    <VideoActions likes={video.likes} />
                    <CommentSection />
                </div>
            </div>
        </div>
    );
};

export default VideoModal;