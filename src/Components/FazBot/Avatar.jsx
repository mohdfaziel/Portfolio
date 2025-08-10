import React from "react";
import Lottie from "lottie-react";
import avatarAnimation from "../../assets/avatar.json";

export default function Avatar({ onClick }) {
  return (
    <div 
      style={{ position: "fixed", bottom: 20, right: 20, cursor: "pointer", width: 150 }}
      onClick={onClick}
    >
      <Lottie animationData={avatarAnimation} loop={true} />
    </div>
  );
}
