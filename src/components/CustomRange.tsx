import { Range, getTrackBackground } from "react-range";
type Props = {
  value: number[];
  step: number;
  min: number;
  max: number;
  onChange: (values: number) => void;
};

const CustomRange: React.FC<Props> = ({ value, step, min, max, onChange }) => {
  return (
    <Range
      values={value}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "28px",
            display: "flex",
            width: "100%",
          }}
          className="group"
        >
          <div
            ref={props.ref}
            style={{
              height: "4px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: value,
                colors: ["#fff", "hsla(0,0%,100%,.3)"],
                min,
                max,
              }),
              alignSelf: "center",
            }}
            className="group-hover:bg-primary"
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "12px",
            width: "12px",
            borderRadius: "100vh",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 6px 0 rgba(0,0,0,.5)",
          }}
          className={`${
            !isDragged ? "opacity-0" : ""
          } opacity-0 group-hover:opacity-100`}
        />
      )}
    />
  );
};

export default CustomRange;
