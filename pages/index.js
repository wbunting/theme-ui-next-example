import React from "react";
import Cookie from "js-cookie";
import { useColorMode, Styled } from "theme-ui";

const Page = () => {
  const [colorMode, setColorMode] = useColorMode();
  React.useEffect(() => {
    Cookie.set("colorMode", colorMode);
  }, [colorMode]);

  return (
    <div>
      <Styled.p>Hello World.</Styled.p>
      <button
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      >
        Toggle Color
      </button>
    </div>
  );
};

export default Page;
