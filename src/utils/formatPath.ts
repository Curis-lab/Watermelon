export const formatPath = (
  path: string,
  base = basePath
): string => {
  return base + path;
};

export const joinPaths = (...paths: string[]): string => {
    return ['', ...paths]
    .join('/')
    .replace(/\/+$/g, '') // Remove trailing separators.
    .replace(/\/+/g, '/'); // Collapse repeated separators.
};

export const basePath = 'http://localhost:3000/api';