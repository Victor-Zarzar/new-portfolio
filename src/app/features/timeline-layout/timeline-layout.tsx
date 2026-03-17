import type { LucideIcon } from "lucide-react";
import { Briefcase, GraduationCap, PenLine } from "lucide-react";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import { getTimelineData } from "@/app/shared/data/getTimelineData";
import { cn } from "@/app/shared/lib/utils";
import type { Experience } from "@/app/shared/types/get-data/get-data";
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/app/shared/ui/timeline";
import FadeWrapper from "@/app/shared/wrapper/fade-wrapper";

export const TimelineLayout = () => {
  const t = useTranslations("Experiences");
  const timelineData: Experience[] = getTimelineData({ t });

  const iconMap: Record<string, LucideIcon> = {
    work: Briefcase,
    education: GraduationCap,
    freelance: PenLine,
  };

  const pillClass: Record<string, string> = {
    work: "border border-blue-500/30 bg-blue-500/10 text-blue-400",
    education:
      "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    freelance: "border border-amber-500/30 bg-amber-500/10 text-amber-400",
  };

  const pillLabel: Record<string, string> = {
    work: t("type.work"),
    education: t("type.education"),
    freelance: t("type.freelance"),
  };

  return (
    <section className="mx-auto mt-28 mb-28 max-w-3xl px-4">
      <FadeWrapper>
        <h1 className="title-about mb-16 font-extrabold leading-tight tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
          {t("h1")}
        </h1>
      </FadeWrapper>

      <div className="relative pl-8">
        <Timeline className="flex flex-col">
          {timelineData.map((item, index) => {
            const Icon = iconMap[item.type ?? "work"] ?? Briefcase;
            const type = item.type ?? "work";

            return (
              <Fade
                key={item.id}
                triggerOnce
                delay={index * 110}
                duration={480}
              >
                <TimelineItem className="group relative">
                  <TimelineHeader className="flex flex-wrap items-center gap-2 mb-1">
                    <TimelineTime
                      className={cn(
                        "font-mono text-[10px] tracking-wide",
                        "px-2 py-0.5 rounded",
                        "shrink-0 transition-colors duration-200",
                        "group-hover:border-border",
                      )}
                    >
                      {item.time}
                    </TimelineTime>

                    <span
                      className={cn(
                        "flex items-center justify-center size-8 rounded-[5px]",
                        "border border-border/50 bg-muted/50",
                        "transition-all duration-200",
                        "group-hover:bg-muted group-hover:border-border",
                      )}
                      aria-hidden
                    >
                      <Icon
                        size={20}
                        className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                        strokeWidth={1.8}
                      />
                    </span>

                    <TimelineTitle className="text-sm sm:text-lg font-medium tracking-tight">
                      {item.title}
                    </TimelineTitle>

                    {item.role && (
                      <span className="text-[16px] w-full basis-full pl-0.5 -mt-0.5">
                        {item.role}
                      </span>
                    )}

                    <span
                      className={cn(
                        "ml-auto text-[11px] tracking-widest px-2 py-1.5 rounded-full",
                        pillClass[type],
                      )}
                    >
                      {pillLabel[type]}
                    </span>
                  </TimelineHeader>

                  {item.description && (
                    <div className="pl-0.5 mt-1 space-y-0.5">
                      {item.achievements && (
                        <p className="text-[14px] uppercase tracking-widest mb-1.5">
                          {item.achievements}
                        </p>
                      )}
                      <TimelineDescription className="text-xs sm:text-[17px] leading-relaxed">
                        {item.description}
                      </TimelineDescription>
                      {item.local && (
                        <TimelineDescription className="text-[14px] tracking-wide">
                          {item.local}
                        </TimelineDescription>
                      )}
                    </div>
                  )}
                </TimelineItem>
              </Fade>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
};
