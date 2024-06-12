import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Button({
  text,
  children,
  className,
}: {
  text?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        className,
      )}
    >
      {text && <span className="hidden md:block">{text}</span>}{' '}
      {children ? children : <PlusIcon className="h-5 md:ml-4" />}
    </button>
  );
}
