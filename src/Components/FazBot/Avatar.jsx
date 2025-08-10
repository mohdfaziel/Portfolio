import React from "react";
import Lottie from "lottie-react";
import avatarAnimation from "../../assets/avatar.json";

export default function Avatar({ onClick }) {
  return (
    <div 
      style={{ cursor: "pointer", width: 150 }}
      onClick={onClick}
    >
      <Lottie animationData={avatarAnimation} loop={true} />
    </div>
  );
}
