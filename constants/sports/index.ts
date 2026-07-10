import { tennis } from "./tennis";
import { swimming } from "./swimming";
import { basketball } from "./basketball";
import { gym } from "./gym";
import type { Sport } from "./types";

export { tennis, swimming, basketball, gym };
export type { Sport };

export const sports: Sport[] = [tennis, swimming, basketball, gym];

export const sportBySlug: Record<string, Sport> = Object.fromEntries(
  sports.map((s) => [s.slug, s])
);
