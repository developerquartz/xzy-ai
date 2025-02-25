import React from "react";
import { useNavigate } from "react-router-dom";

export default function TryABCAiButton({ title, className, onClick }) {
  const navigate = useNavigate();
  return (
    <button
      className={`${className} commonBtn rounded-pill d-flex align-items-center justify-content-center btn btn-primary text-white`}
      onClick={() => {
        onClick ? onClick() : navigate("/pricing");
      }}
    >
      {title ? title : "Try ABC.AI Now"}
    </button>
  );
}
