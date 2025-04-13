import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import { groq } from 'next-sanity';
import { featuredPostsQuery, allPostsQuery, singlePostQuery, totalPostsQuery, imageGalleryQuery } from './queries';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-03-20",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published'
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: string) {
  return builder.image(source);
}

export interface Post {
  _id: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  content?: any[];
}

export interface ImageGallery {
  _id: string;
  title: string;
  categories: any[];
}

export async function fetchFeaturedPosts(): Promise<Post[]> {
  try {
    const posts = await sanityClient.fetch(featuredPostsQuery);
    return posts;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

export async function fetchPosts(start: number = 0, end: number = 10): Promise<Post[]> {
  try {
    const posts = await sanityClient.fetch(allPostsQuery, { start, end });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function fetchTotalPosts(): Promise<number> {
  try {
    const total = await sanityClient.fetch(totalPostsQuery);
    return total;
  } catch (error) {
    console.error("Error fetching total posts:", error);
    return 0;
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    const post = await sanityClient.fetch(singlePostQuery, { slug });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
} 



export async function fetchImageGallery() {
 try {
  const imageGallery = await sanityClient.fetch(imageGalleryQuery);
  return imageGallery;
 } catch (error) {
  console.error("Error fetching image gallery:", error);
  return [];
 }
}
