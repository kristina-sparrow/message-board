import React from "react";

type CardProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Card({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
}
