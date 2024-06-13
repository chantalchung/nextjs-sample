import React from 'react';
import { cn } from '@/src/app/ui/utils/cn';

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  const { className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={cn(
        'flex w-full rounded-xl border bg-white py-4 shadow-sm',
        className,
      )}
    />
  );
}
