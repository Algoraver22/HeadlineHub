import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';
  const page = searchParams.get('page') || '1';
  const pageSize = searchParams.get('pageSize') || '12';

  try {
    const apiKey = 'f3600d5b98134c8ab46a388957a58b4d';
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
    
    const res = await fetch(url);
    const data = await res.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('News API error:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}