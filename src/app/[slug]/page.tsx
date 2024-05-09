import React from "react";
import "./md.css";
import { markdownToHtml } from "marksmithjs";
import startup from "@/posts/startup.md";
import { notFound } from "next/navigation";

const PostPage = ({ params }: { params: { slug: string } }) => {
  const content = [
    {
      slugHeading: "startup",
      src: startup,
    },
  ];

  const filteredContent = content.filter(
    (item) => item.slugHeading === params.slug,
  );

  if (filteredContent.length === 0) {
    notFound();
  }

  const markdownHtml = markdownToHtml(filteredContent[0].src);

  return <div className="markdown w-full" dangerouslySetInnerHTML={{ __html: markdownHtml }} />;
};

export default PostPage;
