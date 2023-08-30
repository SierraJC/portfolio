import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('https://github.com/SierraJC');

  return null;
}
