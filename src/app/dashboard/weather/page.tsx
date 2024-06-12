'use client';

import { WEATHER_API_URL } from '@/src/app/lib/api';
import { Card } from '@/src/app/ui/dashboard/cards';
import { CardSkeleton } from '@/src/app/ui/skeletons';
// import { Metadata } from 'next';
import { Suspense, useEffect, useState } from 'react';

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
    <Suspense fallback={<CardSkeleton />}>
      <Card title="Weather" value={JSON.stringify(data)} type="invoices" />
    </Suspense>
  );
}
