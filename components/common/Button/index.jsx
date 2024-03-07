import Link from "next/link";
import React, { useState } from "react";

function Button({
  onClick,
  children,
  href,
  variant,
  preIcon,
  postIcon,
  size,
  disabled,
}) {
  const variants = {
    primary:
      "bg-primary hover:bg-primary-tint active:bg-primary border-primary hover:border-primary-tint active:border-primary-tint disabled:bg-grey disabled:border-grey text-white disabled:text-light-text fill-white disabled:fill-light-text stroke-white disabled:stroke-light-text",
    secondary:
      "bg-accent border-accent active:border-primary-tint disabled:bg-grey disabled:border-grey text-primary hover:text-primary-tint active:text-primary disabled:text-light-text fill-primary hover:fill-primary-tint active:fill-primary disabled:fill-light-text stroke-primary hover:stroke-primary-tint active:stroke-primary disabled:stroke-light-text",
    outline:
      "bg-white border-primary hover:border-primary active:border-primary-tint disabled:bg-white disabled:border-light-text text-primary hover:text-primary-tint active:text-primary disabled:text-light-text fill-primary hover:fill-primary-tint active:fill-primary disabled:fill-light-text stroke-primary hover:stroke-primary-tint active:stroke-primary disabled:stroke-light-text",
    link: "bg-white border-white active:border-accent text-primary hover:text-primary-tint active:text-primary disabled:text-light-text fill-primary hover:fill-primary-tint active:fill-primary disabled:fill-light-text stroke-primary hover:stroke-primary-tint active:stroke-primary disabled:stroke-light-text",
  };

  const sizes = {
    sm: "w-[136px] h-[44px]",
    lg: "max-w-[328px] w-full min-w-[140px] h-[44px]",
  };

  return (
    <>
      {onClick ? (
        <button
          disabled={disabled}
          className={`${variants[variant]} ${sizes[size]} border-2 border-solid rounded-lg flex gap-2 justify-center items-center text-center transition-all duration-300 ease-in-out`}
          onClick={onClick}
        >
          {preIcon}
          <span className="text-sm font-semibold leading-[24px]">
            {children}
          </span>
          {postIcon}
        </button>
      ) : href ? (
        <Link
          disabled={disabled}
          className={`${variants[variant]} ${sizes[size]} border-2 border-solid rounded-lg flex gap-2 justify-center items-center text-center transition-all duration-300 ease-in-out`}
          href={href}
        >
          {preIcon}
          <span className="text-sm font-semibold leading-[24px]">
            {children}
          </span>
          {postIcon}
        </Link>
      ) : null}
    </>
  );
}

export default Button;
