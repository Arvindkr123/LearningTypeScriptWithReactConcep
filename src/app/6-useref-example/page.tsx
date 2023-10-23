"use client";
import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
  const InputRef = useRef<HTMLInputElement>(null);
  const userNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    InputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log(userNameInputRef.current?.value);
  };
  return (
    <div className="useRefExample">
      <input ref={InputRef} type="text" placeholder="focus here" />
      <input ref={userNameInputRef} type="text" placeholder="username" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRefExample;
