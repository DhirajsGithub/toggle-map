import { createContext, useState } from "react";
export const AppContext = createContext({
  isDark: false,
  toggleMode: () => {},
});

function AppContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  function toggleMode() {
    setIsDark(!isDark);
  }

  const value = {
    isDark,
    toggleMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
