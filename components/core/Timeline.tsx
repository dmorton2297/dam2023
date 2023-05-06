import React from "react";
import { Text } from "./Text";
import {
  formatDateTime,
  percentageComplete,
} from "../../utils";

export interface TimelineItem {
  title: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
}

interface Props {
  items: TimelineItem[];
}

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => {
  const percentComplete = percentageComplete(item.startTime, item.endTime);
  const itemIsComplete = percentComplete > 0;
  const progressHeight = 50 * percentComplete;
  const remainingHeight = 50 * (1 - percentComplete);
  return (
    <div key={item.title} className="flex justify-between">
      <div className="flex gap-4">
        <div style={{ width: 12 }}>
          <div
            style={{
              height: 10,
              width: 10,
              backgroundColor: itemIsComplete ? "green" : "unset",
              outline: "2px solid green",
            }}
          />
          <div
            style={{
              width: 2,
              height: progressHeight - 6,
              backgroundColor: "green",
              marginLeft: 4,
            }}
          />
          {remainingHeight > 0 && itemIsComplete && (
            <div className="flex">
              <div
                className="blob blue"
                style={{
                  height: 10,
                  width: 10,
                  outline: "2px solid rgba(52, 172, 224, 1)",
                }}
              />
            </div>
          )}
          <div
            style={{
              width: 2,
              height: remainingHeight - 6,
              backgroundColor: "white",
              marginLeft: 4,
            }}
          />
        </div>
        <Text style={{ marginTop: -8, fontSize: 14 }}>{item.title}</Text>
      </div>

      <Text style={{ fontSize: 14, marginTop: -8 }}>
        <strong>
          {formatDateTime(item.startTime)}
          {item.endTime ? <> - {formatDateTime(item.endTime)}</> : null}
        </strong>
      </Text>
    </div>
  );
};

export const Timeline: React.FC<Props> = ({ items }) => {
  return (
    <div style={{ width: 350 }}>
      {items.map((x, i) => (
        <TimelineItem item={x} key={i} />
      ))}
    </div>
  );
};

export default Timeline;
