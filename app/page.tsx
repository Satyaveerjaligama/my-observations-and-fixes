import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const observations = [
    {
      label: 'Amazon',
      href: '/amazon'
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h6">Observations</Typography>
      {observations.map((singleObservation, index)=>
      <Typography key={singleObservation.href}>
        {index + 1}.{' '}
        <Link href={singleObservation.href}>
          {singleObservation.label}
        </Link>
      </Typography>
      )}
    </main>
  );
}
