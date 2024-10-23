import { z } from "zod";

const graph = z.object({
  value: z.number(),
  label: z.string(),
});

export const graphSensor = z.object({
  key: z.string(),
  name: z.string(),
  uom: z.string(),
  data: z.array(graph),
});

export type GraphSensor = z.infer<typeof graphSensor>;
export type Graph = z.infer<typeof graph>;

export const createGraphSensor = (data: GraphSensor) => {
  return graphSensor.parse(data);
};
