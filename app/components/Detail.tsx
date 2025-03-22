// types/index.ts
export interface Video {
    id: number;
    thumbnail: string;
    duration: string;
    title: string;
    author: string;
    date: string;
    description: string;
    likes: number;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    author: string;
    text: string;
    date: string;
  }
  
  // components/Header.tsx
  "use client";
  import React from "react";
  
  interface HeaderProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
    return (
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            VideoShare
          </h1>
          <div className="flex items-center w-1/2">
            <input
              type="search"
              placeholder="動画を検索..."
              className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  
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
  
  // components/VideoActions.tsx
  "use client";
  import React from "react";
  
  interface VideoActionsProps {
    likes: number;
  }
  
  const VideoActions: React.FC<VideoActionsProps> = ({ likes }) => {
    return (
      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
          <i className="fas fa-heart"></i>
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md">
          <i className="fas fa-share"></i>
          <span>共有</span>
        </button>
      </div>
    );
  };
  
  export default VideoActions;
  
  // components/CommentSection.tsx
  "use client";
  import React, { useState } from "react";
  
  const CommentSection: React.FC = () => {
    const [commentText, setCommentText] = useState<string>("");
  
    const handleSubmitComment = (): void => {
      // 実装予定: コメント投稿処理
      setCommentText("");
    };
  
    return (
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4">
          コメント
        </h3>
        <textarea
          placeholder="コメントを入力..."
          className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white mb-4"
          rows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button 
          className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md hover:opacity-80"
          onClick={handleSubmitComment}
        >
          コメントを投稿
        </button>
      </div>
    );
  };
  
  export default CommentSection;
  
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
  
  // data/sampleData.ts
  import { Video } from "../types";
  
  export const sampleVideos: Video[] = [
    {
      id: 1,
      thumbnail: "/video-thumbnail-1.jpg",
      duration: "3:45",
      title: "東京の街並み散歩",
      author: "山田太郎",
      date: "2025-01-15",
      description: "東京の美しい街並みを散歩しながら撮影しました。",
      likes: 1200,
      comments: [],
    },
    {
      id: 2,
      thumbnail: "/video-thumbnail-2.jpg",
      duration: "5:20",
      title: "料理の作り方講座",
      author: "鈴木花子",
      date: "2025-01-14",
      description: "和食の基本的な作り方を紹介します。",
      likes: 890,
      comments: [],
    },
    {
      id: 3,
      thumbnail: "/video-thumbnail-3.jpg",
      duration: "4:15",
      title: "プログラミング入門",
      author: "田中実",
      date: "2025-01-13",
      description: "プログラミングの基礎を解説します。",
      likes: 756,
      comments: [],
    },
    {
      id: 4,
      thumbnail: "/video-thumbnail-4.jpg",
      duration: "6:30",
      title: "日本の伝統工芸",
      author: "佐藤めぐみ",
      date: "2025-01-12",
      description: "伝統工芸の魅力を紹介します。",
      likes: 645,
      comments: [],
    },
    {
      id: 5,
      thumbnail: "/video-thumbnail-5.jpg",
      duration: "2:50",
      title: "ガーデニングのコツ",
      author: "小林緑",
      date: "2025-01-11",
      description: "初心者向けのガーデニング講座です。",
      likes: 432,
      comments: [],
    },
    {
      id: 6,
      thumbnail: "/video-thumbnail-6.jpg",
      duration: "7:15",
      title: "音楽演奏会",
      author: "中村音楽団",
      date: "2025-01-10",
      description: "クラシック音楽の演奏をお届けします。",
      likes: 923,
      comments: [],
    },
  ];
  
  // App.tsx (または page.tsx)
  "use client";
  import React, { useState } from "react";
  import Header from "./components/Header";
  import VideoGrid from "./components/VideoGrid";
  import VideoModal from "./components/VideoModal";
  import { sampleVideos } from "./data/sampleData";
  import { Video } from "./types";
  
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