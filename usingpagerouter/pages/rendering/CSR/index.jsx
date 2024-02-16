import useSWR from 'swr';

// Define a fetcher function
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export default function Page() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts/1',
    fetcher
  );

  if (error) return <p>Failed to load.</p>;
  if (!data) return <p>Loading...</p>;

  return <p>Your Data: {JSON.stringify(data)}</p>;
}
