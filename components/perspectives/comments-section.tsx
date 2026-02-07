"use client";

import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  initial: string;
  date: string;
  content: string;
  highlighted?: boolean;
}

interface CommentsSectionProps {
  comments: Comment[];
}

export default function CommentsSection({ comments }: CommentsSectionProps) {
  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    if (newComment.trim()) {
      // Handle comment submission
      setNewComment("");
    }
  };

  return (
    <div className="border border-secondary bg-white shadow rounded-xl p-6">
      <h2 className="text-base font-bold text-primary mb-6">Comments</h2>

      {/* Comments List */}
      <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`p-4 rounded-xl border transition-colors border-secondary`}
          >
            <div className="flex items-center justify-between gap-4">
              <div
                className={`w-8 h-8 mt-[-10] rounded-full flex items-center justify-center text-gray-500 font-medium flex-shrink-0 bg-secondary`}
              >
                {comment.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-primary">
                    {comment.author}
                  </h3>
                  <span className="text-sm font-normal text-gray-400">{comment.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm font-normal mt-2">{comment.content}</p>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="space-y-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
          rows={4}
        />
        <button
          onClick={handlePostComment}
          disabled={!newComment.trim()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-50 disabled:cursor-not-allowed transition-colors font-normal text-base"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.59037 10.7831L8.57904 10.7791L8.56904 10.7925L8.00904 11.5931L7.96037 11.6578C6.9777 12.9571 6.4317 13.6798 5.76237 13.6798L5.76904 13.6731C5.68237 13.6731 5.5957 13.6598 5.50904 13.6398C4.66237 13.4131 4.66237 12.4931 4.66237 10.6598V9.42646L4.2757 9.29313C1.46904 8.3198 0.0757041 7.83313 0.00237073 6.62646C-0.0642959 5.4098 1.2757 4.77646 3.94237 3.5158L3.96237 3.50646L8.84237 1.1998C11.0424 0.153129 12.149 -0.366871 13.0424 0.293129C13.9357 0.953129 13.7357 2.14646 13.3357 4.5198L12.6957 8.3198L12.691 8.34513C12.427 9.8758 12.2844 10.7025 11.5557 11.1265C11.3024 11.2731 11.049 11.3398 10.7557 11.3398L10.749 11.3331C10.1957 11.3331 9.5277 11.1045 8.59037 10.7831ZM5.66237 9.7718V10.6598C5.66237 11.5798 5.66237 12.5265 5.80237 12.6998C5.9757 12.6331 6.60237 11.8065 7.20237 11.0065L7.60037 10.4411L5.66237 9.7718ZM4.38237 4.40646C2.32237 5.3798 0.969037 6.0198 0.995704 6.56646C1.02904 7.10646 2.44237 7.5998 4.58237 8.3398L4.85504 8.4338L9.80837 3.4798C10.0017 3.28646 10.3217 3.28646 10.515 3.4798C10.7084 3.67313 10.7084 3.99313 10.515 4.18646L5.9057 8.79646L8.84904 9.81313C10.1424 10.2598 10.7224 10.4465 11.0424 10.2598C11.3557 10.0731 11.469 9.48646 11.6957 8.17313L12.3357 4.36646L12.3437 4.31846C12.639 2.53846 12.8317 1.37713 12.4357 1.08646C12.0317 0.788462 11.003 1.27313 9.29837 2.07646L9.26237 2.09313L4.38237 4.3998V4.40646Z"
              fill="white"
            />
          </svg>
          Post Comment
        </button>
      </div>
    </div>
  );
}
