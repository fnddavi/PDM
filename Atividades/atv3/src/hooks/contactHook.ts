import { useContext } from "react";
import { ContactContext } from "../context/contactContext";

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};
//
