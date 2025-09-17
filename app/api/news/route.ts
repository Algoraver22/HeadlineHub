import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';
  const page = searchParams.get('page') || '1';
  const pageSize = searchParams.get('pageSize') || '12';

  try {
    // Using GNews API (free tier works in production)
    const apiKey = 'f8c9d4e5a6b7c8d9e0f1a2b3c4d5e6f7';
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=${pageSize}&apikey=${apiKey}`;
    
    const res = await fetch(url);
    const data = await res.json();
    
    // Transform to match NewsAPI format
    const transformedData = {
      status: 'ok',
      totalResults: data.totalArticles || 0,
      articles: data.articles?.map((article: any) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.image,
        publishedAt: article.publishedAt,
        content: article.content,
        source: { name: article.source.name }
      })) || []
    };
    
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('News API error:', error);
    // Fallback to mock data if API fails
    const mockNews = {
      status: 'ok',
      totalResults: 3,
      articles: [
        {
          title: "Breaking: Latest Technology Updates",
          description: "Stay updated with the latest technology trends and innovations.",
          url: "https://example.com/tech",
          urlToImage: "https://via.placeholder.com/400x200/0066cc/ffffff?text=Tech+News",
          publishedAt: "2025-01-15T10:30:00Z",
          content: "Technology news content...",
          source: { name: "TechDaily" }
        },
        {
          title: "Global Business News Update",
          description: "Important business developments from around the world.",
          url: "https://example.com/business",
          urlToImage: "https://via.placeholder.com/400x200/ff6600/ffffff?text=Business+News",
          publishedAt: "2025-01-15T09:15:00Z",
          content: "Business news content...",
          source: { name: "BusinessWorld" }
        },
        {
          title: "Science and Innovation Highlights",
          description: "Discover the latest scientific breakthroughs and innovations.",
          url: "https://example.com/science",
          urlToImage: "https://via.placeholder.com/400x200/00aa44/ffffff?text=Science+News",
          publishedAt: "2025-01-15T08:00:00Z",
          content: "Science news content...",
          source: { name: "ScienceHub" }
        }
      ]
    };
    return NextResponse.json(mockNews);
  }
}