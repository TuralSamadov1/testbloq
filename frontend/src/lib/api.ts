const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

export async function fetchData(endpoint: string) {
  const res = await fetch(`${BASE_URL}/${endpoint}/`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}

export async function postData(endpoint: string, data: any) {
  const res = await fetch(`${BASE_URL}/${endpoint}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(JSON.stringify(errorData) || `Failed to post to ${endpoint}`);
  }
  return res.json();
}
