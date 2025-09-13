import React from "react";

export const Header = () => {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl font-bold text-transparent bg-primary bg-clip-text">
        Planex
      </h1>

      <p className="text-muted-foreground">
        Life có thể “undefined”, nhưng mình phải luôn “defined” 💪
      </p>
    </div>
  );
};
export default Header;