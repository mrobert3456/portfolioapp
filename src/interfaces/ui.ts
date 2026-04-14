export interface WithTitle {
  title: string;
  header?: never;
}

export interface WithHeader {
  title?: never;
  header: React.ReactNode;
}
