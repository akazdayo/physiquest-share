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