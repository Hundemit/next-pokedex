"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pokemon } from "@/types/pokemon";

export const description = "A radar chart with dots";

const chartConfig = {
  points: {
    label: "Points",
    color: "gray",
  },
} satisfies ChartConfig;

export function PokeChart({ pokemon }: { pokemon: Pokemon }) {
  const chartData = pokemon.stats.map((stat) => ({
    statsName: stat.stat.name,
    points: stat.base_stat,
  }));

  return (
    <Card className="bg-transparent border-none">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square ">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="statsName" />
            <PolarGrid />
            <Radar
              dataKey="points"
              fill="gray"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
