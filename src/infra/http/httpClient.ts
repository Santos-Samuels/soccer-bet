export interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, body: any): Promise<T>;
  put<T>(url: string, body: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}