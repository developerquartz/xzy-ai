import { toast } from "react-toastify";

export const currencySymbols = {
  USD: "$",
  INR: "₹",
  usd: "$",
  inr: "₹",
};

export const authUsers = {
  0: "user",
  1: "subadmin",
  2: "admin",
};

export const successMsg = (msg) => {
  toast.dismiss();
  toast.success(msg);
};

export const errorMsg = (msg) => {
  toast.dismiss();
  toast.error(msg);
};
