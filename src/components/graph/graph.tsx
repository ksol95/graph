import { FC, useState, ReactElement } from "react";
import "./graph.css";

interface GraphProps {
  percent: number;
}
function Graph({ percent }: GraphProps): ReactElement {
  const emptyPrecent = 100 - percent;
  return (
    <>
      <h2>{percent}%</h2>
      <div className="graph">
        <div className="graph__bar">
          {percent >= 1 && (
            <div className="bar__tested" style={{ flexBasis: percent + "%" }}>
              <div className="bar__value">
                <span className="bar__value--text">{percent / 2}%</span>
              </div>
              <div className="bar__value">
                <span className="bar__value--text">{percent / 2}%</span>
              </div>
            </div>
          )}
          {emptyPrecent >= 1 && (
            <div
              className="bar__other"
              style={{ flexBasis: emptyPrecent + "%" }}
            >
              <div className="bar__value">
                <span className="bar__value--text">{emptyPrecent}%</span>
              </div>
            </div>
          )}
        </div>
        <GraphScale count={5} activePercent={percent} />
      </div>
    </>
  );
}

interface IGraphScaleProps {
  count: number;
  activePercent: number;
}

const GraphScale: FC<IGraphScaleProps> = ({
  count,
  activePercent,
}): ReactElement => {
  if (count < 2) count = 2;
  if (activePercent < 0) activePercent = 0;
  if (activePercent > 100) activePercent = 100;

  let step: number = 100 / (count - 1);
  const scale = [...Array(count)].map((_, i: number) => {
    return step * i;
  });

  return (
    <div className="graph__legend">
      <div className="legend__scale">
        {scale.map((percent) => {
          return (
            <span
              key={percent}
              className={
                activePercent >= percent
                  ? activePercent == percent
                    ? "legend__point active current"
                    : "legend__point active"
                  : "legend__point"
              }
              data-percent={percent + "%"}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export const GraphForm: FC = () => {
  const [percent, setPercent] = useState<number>(25);

  const handleChange = (event: any) => setPercent(Number(event.target.value));
  return (
    <main>
      <h2 className="title">График</h2>
      <input
        type="number"
        step="0.5"
        max="100"
        min="0"
        value={percent}
        onChange={(e) => handleChange(e)}
      />
      <Graph percent={percent} />
    </main>
  );
};
