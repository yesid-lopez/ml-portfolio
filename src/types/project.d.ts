export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  area?: string;
  url: string;
  cover?: {
    asset: {
      url: string;
    };
  };
};
