import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";

import CreateFormButton from "@/components/create-form-button";
import { StatsCardWrapper, StatsCards } from "@/components/stats/stats-cards";
import { FormCardSkeleton, FormCards } from "@/components/form/form-card";

async function Home() {
  return (
    <div className="container h-full">
      {/* <Suspense fallback={<StatsCards loading={true} />}>
        <StatsCardWrapper />
      </Suspense> */}

      {/* <h2 className="text-4xl font-bold mb-12">Your Forms</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {/* <CreateFormButton /> */}

        {/* <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}>
          <FormCards />
        </Suspense> */}
      </div>
    </div>
  );
}

export default Home;
