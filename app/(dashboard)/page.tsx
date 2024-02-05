import { LuView } from "react-icons/lu";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFormStats } from "@/actions/form.actions";

export default function Home() {
  return (
    <main className="container min-h-screen">
      <CardStatsWrapper />
    </main>
  );
}

async function CardStatsWrapper() {
  const stats = await getFormStats();

  return <StatsCards loading={false} data={stats} />;
}

async function StatsCards({
  loading,
  data
}: {
  loading: boolean;
  data: Awaited<ReturnType<typeof getFormStats>>;
}) {
  return (
    <div className="w-full pt-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Visits"
        icon={<LuView className="text-blue-600" />}
        helperText="All time form visits"
        value={data.visits.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
    </div>
  );
}

function StatsCard({
  title,
  helperText,
  icon,
  value,
  loading,
  className
}: {
  title: string;
  icon: JSX.Element;
  helperText: string;
  value: string;
  loading: boolean;
  className?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Skeleton or Content</div>
      </CardContent>
    </Card>
  );
}
