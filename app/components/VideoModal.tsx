// components/VideoModal.tsx
"use client";
import { useEffect, useRef } from "react";
import type React from "react";
import VideoActions from "./VideoActions";
import CommentSection from "./CommentSection";
import type { Video } from "../types";

interface VideoModalProps {
    video: Video;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        modalRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    return (
        <dialog
            ref={modalRef}
            className="fixed inset-0 bg-transparent p-0 m-0 w-full h-full focus:outline-none"
            open
            onKeyDown={handleKeyDown}
            aria-labelledby="modal-title"
        >
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
            <div
                className="relative z-50 flex items-center justify-center min-h-full p-4"
                role="document"
                aria-modal="true"
            >
                <div
                    className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                >
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
                                <h2
                                    id="modal-title"
                                    className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                                >
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
                                type="button"
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                aria-label="閉じる"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    role="img"
                                    aria-labelledby="closeIconTitle"
                                >
                                    <title id="closeIconTitle">閉じる</title>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
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
        </dialog>
    );
};

export default VideoModal;