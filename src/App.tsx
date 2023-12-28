import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoaderPage from "./pages/LoaderPage";

const App: React.FC = () => {
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);

  useEffect(() => {
    // Delay for 5000 milliseconds (5 seconds) before removing the loading state
    const timeoutId = setTimeout(() => {
      setRemoveLoading(true);
    }, 5000);

    // Cleanup the timeout on component unmount or if the loading is removed before the timeout
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center bg-black">
      {removeLoading && <HomePage />}
      {!removeLoading && <LoaderPage />}
    </div>
  );
}

export default App;
