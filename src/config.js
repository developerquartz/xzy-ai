import { initializeApp } from "firebase/app";

export const REACT_APP_API_BASE_URL =
  "https://abc-api.ondemandcreations.com/api";
export const REACT_APP_API_VERSION = "/";
export const fileBaseUrl = "https://abc-ai.s3.us-east-2.amazonaws.com/";

const firebaseConfig = {
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
