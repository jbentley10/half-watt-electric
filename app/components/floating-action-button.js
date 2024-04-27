/**
 * @file floating-action-button.js
 */
"use client";

// Import dependencies
import { Fab, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useContext } from "react";
import { LocaleContext } from "../locale-provider";

const FloatingActionButton = () => {
  const isEnglish = useContext(LocaleContext);

  return (
    <div
      className={
        "floating-action-button fixed lg:bottom-14 lg:right-14 xs:bottom-9 xs:right-9"
      }
    >
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        onClick={() => isEnglish.setIsEnglish((oldValue) => !oldValue)}
      >
        <LanguageIcon />
        <Typography variant={"button"}>
          {isEnglish.isEnglish ? "Leer en Español" : "Read in English"}
        </Typography>
      </Fab>
    </div>
  );
};

export default FloatingActionButton;
