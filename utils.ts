import { formatInTimeZone } from "date-fns-tz";

const CURRENT_MOMENT_OVERRIDE = null

export const formatDateTime = (dateTime?: Date) => {
  if (!dateTime) return null;
  return formatInTimeZone(dateTime, 'America/Chicago', "h:mm aaa",);
};

export const percentageComplete = (
  startDateTime?: Date,
  endDateTime?: Date
) => {
  if (!startDateTime || !endDateTime) return 0;
  const currentMoment = new Date();
  if (currentMoment.getTime() > endDateTime.getTime()) return 1;
  const timeElapsedSinceStartAndCurrent =
    currentMoment.getTime() - startDateTime.getTime();

  if (timeElapsedSinceStartAndCurrent <= 0) return 0;
  const differenceMsBetweenBounds =
    endDateTime?.getTime() - startDateTime?.getTime();
  return timeElapsedSinceStartAndCurrent / differenceMsBetweenBounds
};
