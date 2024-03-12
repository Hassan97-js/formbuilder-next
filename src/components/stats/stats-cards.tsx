import { Eye, HardDriveUpload } from "lucide-react";
import { TbArrowBounce, TbClick } from "react-icons/tb";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

import { getFormStats } from "@/utils/actions/builder";

export async function StatsCardWrapper() {
  const stats = await getFormStats();

  return <StatsCards data={stats} />;
}

type TStatsCardsProps = {
  loading?: boolean;
  data?: Awaited<ReturnType<typeof getFormStats>>;
};

export async function StatsCards({ loading = false, data }: TStatsCardsProps) {
  return (
    <div className="w-full pt-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Visits"
        icon={<Eye className="text-blue-600 w-4 h-4" />}
        description="All time form visits"
        value={data?.visits.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title="Total Submissions"
        icon={<HardDriveUpload className="text-yellow-600 w-4 h-4" />}
        description="All time submissions"
        value={data?.submissions.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />
      <StatsCard
        title="Submissions Rate"
        icon={<TbClick className="text-green-600" />}
        description="Visits that result in form submissions"
        value={`${data?.submissionsRate.toLocaleString()}%`}
        loading={loading}
        className="shadow-md shadow-green-600"
      />
      <StatsCard
        title="Bounce Rate"
        icon={<TbArrowBounce className="text-red-600" />}
        description="Visits with no submissions"
        value={`${data?.bounceRate.toLocaleString()}%`}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
}

type TStatsCardProps = {
  title: string;
  icon: JSX.Element;
  description: string;
  value?: string;
  loading?: boolean;
  className?: string;
};

export function StatsCard({
  title,
  description,
  icon,
  value,
  loading = false,
  className
}: TStatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0 select-none">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>

        <p className="text-xs text-muted-foreground pt-1">{description}</p>
      </CardContent>
    </Card>
  );
}
