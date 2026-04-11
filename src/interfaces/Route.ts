export interface CustomRoute {
  path: string;
  name: string;
  action: () => void;
}
