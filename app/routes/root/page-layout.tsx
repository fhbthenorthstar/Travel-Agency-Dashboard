import {Outlet, redirect, useNavigate} from "react-router";
import {getExistingUser, logoutUser, storeUserData} from "~/appwrite/auth";
import {account} from "~/appwrite/client";
import RootNavbar from "../../../components/RootNavbar";

// export async function clientLoader() {
//     try {
//         const user = await account.get();

//         if(!user.$id) return redirect('/sign-in');

//         const existingUser = await getExistingUser(user.$id);
//         return existingUser?.$id ? existingUser : await storeUserData();
//     } catch (e) {
//         console.log('Error fetching user', e)
//         return redirect('/sign-in')
//     }
// }

export async function clientLoader() {
    try {
      const user = await account.get();
  
      if (!user?.$id) {
        return redirect('/sign-in');
      }
  
      const existingUser = await getExistingUser(user.$id);
  
      if (existingUser) {
        return existingUser; // Existing user, return it
      }
  
      const newUser = await storeUserData(); // Create and return new user
      return newUser;
    } catch (e) {
      console.log('Error fetching user', e);
      return redirect('/sign-in');
    }
  }
  

const PageLayout = () => {
    return (
        <div className="bg-light-200">
            <RootNavbar />
            <Outlet />
        </div>
    )
}
export default PageLayout
