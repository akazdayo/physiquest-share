// components/CommentSection.tsx
"use client";
import { useState } from "react";
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
            />
            <button
                type="button"
                className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md hover:opacity-80"
                onClick={handleSubmitComment}
            >
                コメントを投稿
            </button>
        </div>
    );
};

export default CommentSection;