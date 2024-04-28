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
      <button
        className={
          "bg-white text-brand-primary border-brand-primary border-4 rounded-xl px-7 py-4 md:text-xl sm:text-lg font-display font-medium"
        }
        aria-label="add"
        onClick={() => isEnglish.setIsEnglish((oldValue) => !oldValue)}
      >
        <LanguageIcon />

        {isEnglish.isEnglish ? "Leer en Español" : "Read in English"}
      </button>
    </div>
  );
};

export default FloatingActionButton;
