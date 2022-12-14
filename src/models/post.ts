export interface Post {
  id: number;
  content: string;
  title: string;
  lat: string;
  long: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface CratePost {
  content: string;
  title: string;
  image_url: string;
}
