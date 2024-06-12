import { PlusIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

export default function Button({
  text,
  children,
}: {
  text?: string;
  children?: ReactNode;
}) {
  return (
    <button className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      {text && <span className="hidden md:block">{text}</span>}{' '}
      {children ? children : <PlusIcon className="h-5 md:ml-4" />}
    </button>
  );
}
