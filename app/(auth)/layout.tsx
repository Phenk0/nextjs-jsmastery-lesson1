import { Metadata } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';

import SocialAuthForm from '@/components/forms/SocialAuthForm';

export const metadata: Metadata = {
  description:
    'Join a community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.'
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center background-auth-light_dark px-4 py-10">
      <section className="min-w-full rounded-[10px] border light-border background-light800_dark200 px-4 py-10 shadow-md shadow-light100_dark100 sm:min-w-130 sm:px-10">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              {' '}
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="DevFlow Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
}
