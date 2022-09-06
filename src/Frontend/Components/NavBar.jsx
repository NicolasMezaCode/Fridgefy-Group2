import { Link } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import { auth } from "../../Backend/firebase_config";

export const Navbar = () =>{
    const userLoggedIn = auth.currentUser;
    console.log(userLoggedIn);
    const { handleSignOut } = useAuthContext()

    return (
      <>
        <nav>
          <Link to="/">Fridgefy</Link>
          {(!userLoggedIn) ? (
            <>
              <Link to="/signup">Sign up</Link>
              <Link to="/signin">Sign in</Link>
            </>
          ) : (
            <button onClick={handleSignOut}>Sign Out</button>
          )}
          <Link to="/recipes">My recipes</Link>
          <Link to="/shoppinglist">My Shopping List</Link>
        </nav>
      </>
    );
}
