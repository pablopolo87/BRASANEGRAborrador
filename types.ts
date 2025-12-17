export interface Review {
  id: number;
  user: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface MenuItem {
  category: string;
  items: {
    name: string;
    description: string;
    price: string;
  }[];
}

export interface GroundingMetadata {
  groundingChunks?: {
    web?: { uri: string; title: string };
    maps?: { uri: string; title: string; placeAnswerSources?: { reviewSnippets?: any[] } };
  }[];
}

export interface ImageGenerationConfig {
  aspectRatio: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  imageSize: "1K" | "2K" | "4K";
}
