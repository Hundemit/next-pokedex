"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pokemon } from "@/types/pokemon";

export const description = "A radar chart with dots";

const chartConfig = {
  points: {
    label: "Points",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function PokeChart({ pokemon }: { pokemon: Pokemon }) {
  const chartData = [
    { statsName: pokemon.stats[0].stat.name, points: pokemon.stats[0].base_stat },
    { statsName: pokemon.stats[1].stat.name, points: pokemon.stats[1].base_stat },
    { statsName: pokemon.stats[2].stat.name, points: pokemon.stats[2].base_stat },
    { statsName: pokemon.stats[3].stat.name, points: pokemon.stats[3].base_stat },
    { statsName: pokemon.stats[4].stat.name, points: pokemon.stats[4].base_stat },
    { statsName: pokemon.stats[5].stat.name, points: pokemon.stats[5].base_stat },
  ];

  return (
    <Card className="bg-transparent border-none">
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square ">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="statsName" />
            <PolarGrid />
            <Radar
              dataKey="points"
              fill="var(--color-points)"
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
