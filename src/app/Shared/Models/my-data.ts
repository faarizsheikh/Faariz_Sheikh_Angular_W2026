// my-data.ts (interface):

export interface ExtraInfo {
  creator?: string;
  movie_sequence?: number;
  mpaa_rating?: string;
  notes?: string;
  seasons?: number;
  total_episodes?: number;
  tv_rating?: string;
}

export interface MyData extends ExtraInfo {
  id: number;
  title: string;
  type: string;
  genre: string;
  yearReleased: number;
  viewer_rating?: number;
  based_on?: string;
  streaming: string;
  producer: string;
  director: string;
  writer: string
  starring: string;
  is_started: boolean;
  is_finished: boolean;
  image_url: string;
}
