import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import { getTimelineData } from "@/app/shared/data/getTimelineData";
import type { Experience } from "@/app/shared/types/main";
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/app/shared/ui/timeline";

export const TimelineLayout = () => {
  const t = useTranslations("Experiences");
  const timelineData: Experience[] = getTimelineData({ t });

  return (
    <section className="mx-auto mt-28 mb-28 max-w-3xl">
      <Fade>
        <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
          {t("h1")}
        </h1>
      </Fade>

      <div className="timeline mt-8 mb-16 flex justify-center items-center">
        <Timeline className="mt-8">
          {timelineData.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineHeader>
                <TimelineTime className="capitalize shrink-0 whitespace-nowrap overflow-hidden text-ellipsis min-w-[100px]">
                  {item.time}
                </TimelineTime>

                <TimelineTitle className="text-sm sm:text-2xl">
                  {item.title}
                </TimelineTitle>
              </TimelineHeader>
              {item.description && (
                <>
                  <TimelineDescription className="text-xs sm:text-xl">
                    {item.description}
                  </TimelineDescription>
                  <TimelineDescription className="text-sm md:text-xl">
                    {item.local}
                  </TimelineDescription>
                </>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};
