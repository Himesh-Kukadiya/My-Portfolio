import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const spinnerStyle = {
    width: "45px",
    height: "45px",
    border: "5px solid rgba(255, 255, 255, 0.3)",
    borderTop: "5px solid rgb(170, 166, 195)",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const percentageStyle = {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 20,
  };

  return (
    <Html as="div" center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={spinnerStyle} className="canvas-spinner">

        </div>
        <p className="mb-2" style={percentageStyle}>{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
