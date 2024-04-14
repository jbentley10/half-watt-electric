/**
 * @file locale-provider.js
 */
"use client";

import { createContext } from 'react';

export const LocaleContext = createContext({ isEnglish: true, setIsEnglish: isEnglish => !isEnglish});