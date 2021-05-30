import RootFragment from "../RootFragment";
import Navbar from "../components/NavbarAuth";
import ProfileDetails from "../components/ProfileDetails";

const Profile = () => {
    return (
        <RootFragment className="w-full min-h-screen bg-blue-50 dark:bg-gray-800">
            <Navbar />
            <ProfileDetails self={true} />
        </RootFragment>
    );
};

export default Profile;
