import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugToTitle = (slug: string) => {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const extractH1 = (md: string) => {
  const match = md.match(/^# (.+)$/m);
  return match ? match[1].trim() : null;
};

export const removeH1 = (md: string) => {
  return md.replace(/^# .+$/m, "").trim();
};
