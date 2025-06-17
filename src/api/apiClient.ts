export async function apiClient({
  path,
  options,
}: {
  path: string;
  options: RequestInit;
}) {
  const baseUrl = 'http://localhost:8080';
  const response = await fetch(`${baseUrl}${path}`, options);
  return response.json();
}
