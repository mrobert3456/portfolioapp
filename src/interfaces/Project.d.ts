interface Repository {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description?: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  language: string;
}
