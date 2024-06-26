import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { cn } from '@/src/app/ui/utils/cn';

type Props = {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  className?: string;
};

export default function Search({
  value,
  placeholder,
  onChange,
  onSubmit,
  className,
}: Props) {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <form
        className={cn('relative flex flex-1 flex-shrink-0', className)}
        onSubmit={onSubmit}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={onChange}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </form>
    </div>
  );
}
