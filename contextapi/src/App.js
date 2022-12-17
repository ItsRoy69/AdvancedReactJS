import { UserProvider, useUser } from "./UserContext"

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      </p>
      <p>Witten by {user.name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}



function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
export default Root;