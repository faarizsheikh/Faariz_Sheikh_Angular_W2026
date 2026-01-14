export interface ExtraInfo {
  based_on ?: string;
  creator ?: string;
  notes ?: string;
  sequentialNumbering ?: number;
}

export interface MyData extends ExtraInfo {
  // My topic is films, not video games (a topic chosen previous semester in Angular class :> )
  id: number;
  title : string;
  description : string;
  genre : string;
  yearReleased : number;
  mpaa_rating : string;
  viewer_rating ?: number;
  streaming : string;
  producer : string;
  director : string;
  writer : string
  starring : string;
  is_watched : boolean;
  image_url ?: string; /* I know we will need this to be mandatory later. */
}
