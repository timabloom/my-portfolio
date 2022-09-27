import { atom } from "recoil";

const languageChoice = JSON.parse(localStorage.getItem("language"));

export const language = atom({
  key: "language",
  default: languageChoice.language,
});
