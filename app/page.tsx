// App.tsx (または page.tsx)
"use client";
import type React from "react";
import { useState } from "react";
import Header from "./components/Header";
import VideoGrid from "./components/VideoGrid";
import VideoModal from "./components/VideoModal";
import { sampleVideos } from "./data/sampleData";
import type { Video } from "./types";

const VideoShareApp: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleVideoClick = (video: Video): void => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // 検索結果をフィルタリング（将来的な実装が可能）
  const filteredVideos = sampleVideos;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <VideoGrid videos={filteredVideos} onVideoClick={handleVideoClick} />
      </main>

      {isModalOpen && selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeModal} />
      )}
    </div>
  );
};

export default VideoShareApp;