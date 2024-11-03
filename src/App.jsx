function App() {
  return (
    <>
      <div className="navbar bg-base">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">devWAVE</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-22 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  /*src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"*/
                  src="https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?w=440"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
