import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Mock news data to ensure the app works
  const mockNews = {
    status: 'ok',
    totalResults: 6,
    articles: [
      {
        title: "Breaking: Major Tech Company Announces Revolutionary AI Breakthrough",
        description: "A leading technology company has unveiled groundbreaking artificial intelligence technology that promises to transform multiple industries.",
        url: "https://example.com/tech-breakthrough",
        urlToImage: "https://via.placeholder.com/400x200/0066cc/ffffff?text=Tech+News",
        publishedAt: "2025-01-15T10:30:00Z",
        content: "This is a sample news article content...",
        source: { name: "TechNews" }
      },
      {
        title: "Global Climate Summit Reaches Historic Agreement",
        description: "World leaders have reached a unprecedented consensus on climate action during the latest international summit.",
        url: "https://example.com/climate-summit",
        urlToImage: "https://via.placeholder.com/400x200/00aa44/ffffff?text=Climate+News",
        publishedAt: "2025-01-15T09:15:00Z",
        content: "This is a sample news article content...",
        source: { name: "GlobalNews" }
      },
      {
        title: "Stock Markets Hit Record Highs Amid Economic Optimism",
        description: "Major stock indices reached all-time highs as investors show confidence in economic recovery prospects.",
        url: "https://example.com/stock-markets",
        urlToImage: "https://via.placeholder.com/400x200/ff6600/ffffff?text=Business+News",
        publishedAt: "2025-01-15T08:45:00Z",
        content: "This is a sample news article content...",
        source: { name: "BusinessDaily" }
      },
      {
        title: "Scientists Discover New Species in Deep Ocean Exploration",
        description: "Marine biologists have identified several previously unknown species during a recent deep-sea expedition.",
        url: "https://example.com/ocean-discovery",
        urlToImage: "https://via.placeholder.com/400x200/0099cc/ffffff?text=Science+News",
        publishedAt: "2025-01-15T07:20:00Z",
        content: "This is a sample news article content...",
        source: { name: "ScienceToday" }
      },
      {
        title: "International Space Station Welcomes New Crew Members",
        description: "Three astronauts from different countries have successfully docked with the ISS for a six-month mission.",
        url: "https://example.com/space-mission",
        urlToImage: "https://via.placeholder.com/400x200/6600cc/ffffff?text=Space+News",
        publishedAt: "2025-01-15T06:00:00Z",
        content: "This is a sample news article content...",
        source: { name: "SpaceNews" }
      },
      {
        title: "Renewable Energy Adoption Reaches New Milestone",
        description: "Clean energy sources now account for over 50% of global electricity generation for the first time in history.",
        url: "https://example.com/renewable-energy",
        urlToImage: "https://via.placeholder.com/400x200/00cc66/ffffff?text=Energy+News",
        publishedAt: "2025-01-15T05:30:00Z",
        content: "This is a sample news article content...",
        source: { name: "EnergyReport" }
      }
    ]
  };

  return NextResponse.json(mockNews);
}