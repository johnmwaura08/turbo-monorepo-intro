import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PageTitle } from "@repo/ui/components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PageTitle title="Kisumu" />
      </div>
    </>
  );
}

export default App;
