export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export type AppError = Error | ApiError;

export const isApiError = (error: unknown): error is ApiError => {
  return error !== null && typeof error === 'object' && 'message' in error;
};

// For unknown errors where we need to access properties
export type UnknownObject = Record<string, unknown>;

// For API response errors
export interface ApiResponseError {
  error: string;
  message: string;
  details?: unknown;
}