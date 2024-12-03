"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ArticleDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = parseInt(params.id);

  const articles = [
    {
      category: "Technology",
      title: "The future of AI in software development",
      description: "Explore how artificial intelligence is revolutionizing software development.",
      longDescription:
        "Explore how artificial intelligence is revolutionizing software development. Learn how AI tools assist developers, enhance debugging, and boost productivity.",
      author: {
        name: "John Smith",
        avatar: "/placeholder.svg",
        initials: "JS",
      },
      date: "July 14, 2021",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600&text=AI+Code",
        "/placeholder.svg?height=400&width=600&text=Machine+Learning",
      ],
    },
    // Add other articles here...
  ];

  const article = articles[id];

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <button onClick={() => router.back()} className="text-blue-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-400 mb-8">{article.date}</p>
      <Image src={article.images[0]} alt={article.title} width={600} height={400} className="mb-4" />
      <p className="text-lg text-gray-300">{article.longDescription}</p>
    </div>
  );
}
