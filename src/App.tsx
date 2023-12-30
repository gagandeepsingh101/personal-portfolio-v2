import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoaderPage from "./pages/LoaderPage";
import { Toaster } from "react-hot-toast";

// Use an interface for the context value to provide better type checking
interface AppContextProps {
  showProjectSection: boolean;
  setShowProjectSection: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext({} as AppContextProps);

const App: React.FC = () => {
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);
  const [showProjectSection, setShowProjectSection] = useState<boolean>(false);

  useEffect(() => {
    // Delay for 5000 milliseconds (5 seconds) before removing the loading state
    const timeoutId = setTimeout(() => {
      setRemoveLoading(true);
    }, 5000);

    // Cleanup the timeout on component unmount or if the loading is removed before the timeout
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <AppContext.Provider value={{ 
      showProjectSection,
      setShowProjectSection,
    }}>
      <div className="h-screen w-screen overflow-hidden relative flex justify-center items-center bg-black">
      <Toaster />
        {removeLoading ? <HomePage /> : <LoaderPage />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
