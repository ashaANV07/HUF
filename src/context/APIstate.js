import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";

export const APIContext = createContext();

const useStyles = makeStyles((theme) => ({
  customScrollbar: {
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#adb5bd",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
}));

export default function APIstate(props) {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <APIContext.Provider value={{ classes, }}>
      {props.children}
    </APIContext.Provider>
  );
}
