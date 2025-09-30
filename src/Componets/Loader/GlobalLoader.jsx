// src/components/GlobalLoader.jsx
import { ClipLoader } from "react-spinners";

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50">
      <ClipLoader color="#2724ff" size={60} />
      <span>Please Wait...</span>
    </div>
  );
};

export default GlobalLoader;
