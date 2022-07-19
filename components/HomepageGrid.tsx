import { OurStory } from "./OurStory";
import { TheWedding } from "./TheWedding";

export const HompageGrid: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridGap: 10,
        gridTemplateColumns: "500px calc(100% - 520px)",
        width: "100%",
      }}
    >
      <div className="text-ease-in blob" style={{ gridRow: "1 / span 2" }}>
        <OurStory />
      </div>
      <div className="text-ease-in blob">
        <TheWedding />
      </div>
      <div className="text-ease-in blob" />
    </div>
  );
};
