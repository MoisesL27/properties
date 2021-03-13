export interface DataResponse<T = any> {
  data: T;
  success: boolean;
  status?: number;
  error?: string;
}
