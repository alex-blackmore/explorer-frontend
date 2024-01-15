import LoginButton from "./LoginButton.tsx";

function Navbar() {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-4 text-end">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
