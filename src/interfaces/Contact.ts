export interface ContactInformation {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  body: string;
  statusCode: number;
}
