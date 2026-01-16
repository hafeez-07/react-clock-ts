import "./App.css";
import StopWatch from "./components/StopWatch";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <div className=" flex flex-col border-3 p-4 flex gap-3  md:flex-row mx-auto bg-[#F72C5B] App">
      <div className="border-2 p-4 bg-[#F4E0AF] flex-1">
        <StopWatch />
      </div>
      <div className="border-2 p-4 bg-[#F4E0AF] flex-1">
        <CurrentTime />
      </div>
    </div>
  );
}

export default App;
