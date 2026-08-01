import { tennis } from "./tennis";
import { gym } from "./gym";
import type { Sport } from "./types";

export { tennis, gym };
export type { Sport };

export const sports: Sport[] = [tennis, gym];

export const sportBySlug: Record<string, Sport> = Object.fromEntries(
  sports.map((s) => [s.slug, s])
);
