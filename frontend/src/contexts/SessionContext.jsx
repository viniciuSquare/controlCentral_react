import { createContext, useState } from "react";

export const SessionContext = createContext({});

export function SessionContextProvider(props) {
  // TODO - GET LAST SESSION DATA

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [domainCategories, setDomainCategories] = useState({});
  const [selectedItem, setSelectedItem] = useState({});

  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const toggleEditFormVisibility = () => setIsEditFormVisible(!isEditFormVisible);


  const handleItemSelection = (selectedItem, intent) => {
    // TODO - OPEN MODAL DEPENDING ON INTENT
    selectedItem.intent = intent;
    setSelectedItem(selectedItem);
  }

  return(
    <SessionContext.Provider
      value={{
        isSidebarOpen, setIsSidebarOpen, 
        domainCategories, setDomainCategories,
        selectedItem, handleItemSelection
      }}
    >
      {props.children}
    </SessionContext.Provider>
  )
}