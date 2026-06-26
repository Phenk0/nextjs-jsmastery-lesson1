'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';

export default function SocialAuthForm() {
  const buttonClass =
    'min-h-12 flex-1 background-dark400_light900 px-4 py-3.5 body-medium text-dark200_light800';

  const handleSignIn = async (provider: 'github' | 'google') => {
    try {
      await signIn(provider, { redirectTo: ROUTES.HOME });
    } catch (error) {
      toast.error('Sign In failed', {
        description:
          error instanceof Error
            ? error.message
            : 'An error occurred. Please try again later.'
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn('github')}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain invert-colors"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn('google')}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
}
