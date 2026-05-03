export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  area?: string;
  impact?: string;
  tools?: string[];
  url?: string;
  cover?: {
    asset: {
      url: string;
    };
  };
};
