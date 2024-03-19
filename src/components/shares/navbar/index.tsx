import ActionsButton from "./actions-button";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-4 border-b">
      <Logo />
      <NavigationBar />
      <ActionsButton />
    </div>
  );
}
