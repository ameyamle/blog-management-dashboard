"use client";

import BlogForm from "@/app/components/BlogForm";
import { useParams } from "next/navigation";

export default function EditBlogPage() {
  const params = useParams();

  return <BlogForm mode="edit" blogId={params.id as string} />;
}
