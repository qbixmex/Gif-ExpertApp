export interface Image {
  id: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}