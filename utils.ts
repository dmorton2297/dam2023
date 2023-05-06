import { format } from "date-fns";

const CURRENT_MOMENT_OVERRIDE = '2023-05-13T19:00:10-05:00'

export const formatDateTime = (dateTime?: Date) => {
  if (!dateTime) return null;
  return format(dateTime, "h:mm aaa");
};

export const percentageComplete = (
  startDateTime?: Date,
  endDateTime?: Date
) => {
  if (!startDateTime || !endDateTime) return 0;
  const currentMoment = new Date(CURRENT_MOMENT_OVERRIDE);
  if (currentMoment.getTime() > endDateTime.getTime()) return 1;
  const timeElapsedSinceStartAndCurrent =
    currentMoment.getTime() - startDateTime.getTime();

  if (timeElapsedSinceStartAndCurrent <= 0) return 0;
  const differenceMsBetweenBounds =
    endDateTime?.getTime() - startDateTime?.getTime();
  return timeElapsedSinceStartAndCurrent / differenceMsBetweenBounds
};
