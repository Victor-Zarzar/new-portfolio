import type { ComponentType } from "react";

export type Skill = {
  icon: ComponentType<{ className?: string }>;
  text: string;
};

export type SkillCategory = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
};
