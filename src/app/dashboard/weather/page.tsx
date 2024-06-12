'use client';

import { WEATHER_API_URL } from '@/src/app/lib/api';
import { CardSkeleton } from '@/src/app/ui/skeletons';
// import { Metadata } from 'next';
import { Suspense, useEffect, useState } from 'react';
import Card from '@/src/app/ui/components/Card';
import { lusitana } from '@/src/app/ui/fonts';
import Button from '@/src/app/ui/components/Button';
import { MdMyLocation, MdOutlineLocationOn } from 'react-icons/md';
import Search from '@/src/app/ui/components/Search';

// export const metadata: Metadata = {
//   title: 'Weather',
// };

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/weather?lat=${49}&lon=${123}&units=metric&appid=${WEATHER_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Weather</h1>
        <h2 className="text-l flex items-center gap-2">
          Current Location: Vancouver
          <MdOutlineLocationOn />
        </h2>
      </div>
      <div className="mb-4 mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search location..." />
        <Button>
          <MdMyLocation />
        </Button>
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <Card title="Weather" value={JSON.stringify(data)} type="weather" />
      </Suspense>
    </div>
  );
}
