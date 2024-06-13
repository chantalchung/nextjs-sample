'use client';

import { WEATHER_API_URL, WeatherResponse } from '@/src/app/lib/api';
import DashboardSkeleton, { CardSkeleton } from '@/src/app/ui/skeletons';
// import { Metadata } from 'next';
import { Suspense, useEffect, useState } from 'react';
import Card from '@/src/app/ui/components/Card';
import { lusitana } from '@/src/app/ui/fonts';
import Button from '@/src/app/ui/components/Button';
import { MdMyLocation, MdOutlineLocationOn } from 'react-icons/md';
import Search from '@/src/app/ui/components/Search';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import Container from '@/src/app/ui/components/Container';

// export const metadata: Metadata = {
//   title: 'Weather',
// };

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function Page() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { isPending, error, data } = useQuery<WeatherResponse>({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { data } = await axios.get(
        `${WEATHER_API_URL}/forecast?q=vancouver&units=metric&appid=${WEATHER_API_KEY}`,
      );
      return data;
    },
  });

  const firstData = data?.list[0];
  console.log(firstData);

  useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/forecast?q=vancouver&units=metric&appid=${WEATHER_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

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
        {/* <Search placeholder="Search location..." /> */}
        <Button>
          <MagnifyingGlassIcon className="h-4 w-4" />
        </Button>
        <div className="px-2">
          <MdMyLocation />
        </div>
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <Card
          title="Weather"
          value={JSON.stringify(weatherData)}
          type="weather"
        />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-9 px-3 pb-10 pt-4">
          {/* today */}
          <section>
            <div>
              <h2 className="flex items-end gap-1 text-2xl">
                <p>{format(parseISO(firstData?.dt_txt ?? ''), 'EEEE')}</p>
                <p>
                  {' '}
                  {`(${format(
                    parseISO(firstData?.dt_txt ?? ''),
                    'MM.dd.yyyy',
                  )})`}
                </p>
              </h2>
              <Container className="items-center gap-10 px-6">
                <div className="flex flex-col px-4">
                  <span className="text-5xl">{firstData?.main.temp}°</span>
                  <p className="space-x-1 whitespace-nowrap text-xs">
                    <span>Feels like {firstData?.main.feels_like}°</span>
                  </p>
                  <p className="space-x-1 whitespace-nowrap text-xs">
                    <span>{firstData?.main.temp_min}</span>
                    <span>{firstData?.main.temp_max}</span>
                  </p>
                </div>
              </Container>
            </div>
          </section>
          {/* week forecast */}
          <section></section>
        </main>
      </Suspense>
    </div>
  );
}
