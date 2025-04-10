import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity/client';
import { allPostsQuery, totalPostsQuery } from '@/lib/sanity/queries';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get('start') || '0');
  const end = parseInt(searchParams.get('end') || '10');

  try {
    const [posts, total] = await Promise.all([
      sanityClient.fetch(allPostsQuery, { start, end }),
      sanityClient.fetch(totalPostsQuery)
    ]);

    return NextResponse.json({ posts, total });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
} 