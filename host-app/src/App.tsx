import { lazy } from "react";
const RemoteButton = lazy(() => import("admin_ui/Button"));

const App = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <div>
        <RemoteButton
          text="Click Me!"
          onClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
};

export default App;
