import Link from 'next/link';

import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="font-space-grotesk h1-bold text-light-500">
        Welcome to Next.js 15
      </h1>
      {session ? (
        <form
          action={async () => {
            'use server';

            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
        >
          <Button type="submit" variant="outline" className="px-10 py-4">
            Log out
          </Button>
        </form>
      ) : (
        <Link href={ROUTES.SIGN_IN}>
          <Button className="px-10 py-4">Log in</Button>
        </Link>
      )}
    </>
  );
}
