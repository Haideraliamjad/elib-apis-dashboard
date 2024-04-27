export interface Author {
  _id: string;
  name: string;
}

export interface Book {
  _id: string;
  title: string;
  description: string;
  gener: string;
  author: Author;
  coverImage: string;
  file: string;
  createdAt: string;
}
