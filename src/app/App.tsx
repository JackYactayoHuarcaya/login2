import Login from "../components/Login";

const App = () => {
  return (
    <>
      <div
        className="w-full relative h-full 
      overflow-hidden"
      >
        <Login />
        <div className="container-bg hidden md:block"></div>
      </div>
    </>
  );
};

export default App;
