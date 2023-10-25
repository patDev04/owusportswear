import React, { useState, createContext, useContext } from 'react';
import sublinks from './MenuData';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isSubMenuOpen, setisSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setisSidebarOpen(true);
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setisSubMenuOpen(true);
    return page;
  };
  const closeSubMenu = () => {
    setisSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        openSubMenu,
        closeSubMenu,
        isSubMenuOpen,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
