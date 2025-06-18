export async function apiClient({
  path,
  options,
}: {
  path: string;
  options: RequestInit;
}) {
  const baseUrl = 'http://localhost:8080';
  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  };
  const response = await fetch(`${baseUrl}${path}`, fetchOptions);
  return response.json();
}
