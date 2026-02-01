// my-data.ts (interface):

export interface ExtraInfo {
  based_on?: string;
  creator?: string;
  movie_sequence?: number;
  mpaa_rating?: string;
  notes?: string;
  seasons?: number;
  total_episodes?: number;
  tv_rating?: string;
}

export interface MyData extends ExtraInfo {
  // My topic is TV Shows and Movies, NOT video games (a topic chosen previous semester in Angular class :> )
  id: number;
  title: string;
  description: string;
  type: string;
  genre: string;
  yearReleased: number;
  viewer_rating?: number;
  streaming: string;
  producer: string;
  director: string;
  writer: string
  starring: string;
  is_started: boolean;
  is_finished: boolean;
  image_url: string;
}
