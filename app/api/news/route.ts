import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';
  const page = searchParams.get('page') || '1';
  const pageSize = searchParams.get('pageSize') || '12';

  try {
    // Using NewsData.io instead of NewsAPI (works better in production)
    const apiKey = 'pub_62284c4c8c8a4c0f4b8e9d2a1f3e5b7c9';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us&category=${category}&size=${pageSize}`;
    
    const res = await fetch(url);
    const data = await res.json();
    
    // Transform to match NewsAPI format
    const transformedData = {
      status: 'ok',
      totalResults: data.totalResults || 0,
      articles: data.results?.map((article: any) => ({
        title: article.title,
        description: article.description,
        url: article.link,
        urlToImage: article.image_url,
        publishedAt: article.pubDate,
        content: article.content,
        source: { name: article.source_id }
      })) || []
    };
    
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('News API error:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}