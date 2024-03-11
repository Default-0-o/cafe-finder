import StarIcon from "@/components/icons/StarIcon";
import React from "react";

function Rating() {
  return (
    <div className="flex gap-2">
      <StarIcon color="#FF8C4B" />
      <StarIcon color="#FF8C4B" />
      <StarIcon color="#FF8C4B" />
      <StarIcon color="#FF8C4B" />
      <StarIcon />
    </div>
  );
}

export default Rating;
