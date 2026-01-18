export function createAsyncPromise<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    queueMicrotask(() => resolve(value));
  });
}

export function createAsyncRejectedPromise<T>(error: Error): Promise<T> {
  return new Promise((_, reject) => {
    queueMicrotask(() => reject(error));
  });
}
