import { useState } from "react";
import { useSession, authClient ,signOut} from "../../lib/auth-client";

const menu = [
  "Dashboard",
  "Repository",
  "Reviews",
  "Subscription",
  "Settings",
];

export default function Sidebar() {
  const [openProfile, setOpenProfile] = useState(false);

  const { data: session, isPending } = useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  if (isPending) {
    return (
      <aside className="w-72 min-h-screen bg-[#111] text-white flex items-center justify-center">
        Loading...
      </aside>
    );
  }

  return (
    <aside className="relative w-72 min-h-screen bg-[#111] text-white p-5 border-r border-gray-800">

      {/* Connected Account */}
      <div className="bg-[#1b1b1b] rounded-lg p-4 mb-10">
        <div className="flex gap-3 items-center">

          <img
            src={user?.image}
            alt="profile"
            className="w-14 h-14 rounded-lg object-cover"
          />

          <div>
            <p className="text-sm text-gray-400">
              Connected Account
            </p>

            <h3 className="font-semibold text-sm">
              @{user?.name}
            </h3>

            <p className="text-xs text-gray-400 truncate">
              {user?.email}
            </p>
          </div>

        </div>
      </div>

      {/* Menu */}
      <p className="text-gray-500 text-sm mb-4">
        MENU
      </p>

      <div className="space-y-2">
        {menu.map((item, index) => (
          <div
            key={item}
            className={`p-3 rounded-lg cursor-pointer transition ${
              index === 0
                ? "bg-[#292929]"
                : "hover:bg-[#222]"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Bottom Profile */}
      <div className="absolute bottom-5 left-5 right-5">

        {/* Dropdown */}
        {openProfile && (
          <div className="absolute bottom-16 left-0 right-0 bg-[#181818] border border-gray-700 rounded-lg overflow-hidden">

            <div className="p-4 border-b border-gray-700">

              <div className="flex items-center gap-3">

                <img
                  src={user?.image}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-sm">
                    {user?.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {user?.email}
                  </p>
                </div>

              </div>

            </div>

            <button className="w-full text-left p-4 hover:bg-[#222] text-gray-300">
              🌙 Dark Mode
            </button>

            <button
              onClick={handleSignOut}
              className="w-full text-left p-4 hover:bg-[#222] text-red-400"
            >
              ↪ Sign Out
            </button>

          </div>
        )}

        {/* Profile Button */}
        <button
          onClick={() => setOpenProfile(!openProfile)}
          className="w-full bg-[#1b1b1b] rounded-lg p-3 border border-gray-800 hover:bg-[#222]"
        >
          <div className="flex items-center gap-3">

            <img
              src={user?.image}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="text-left overflow-hidden">
              <h3 className="text-sm font-semibold truncate">
                {user?.name}
              </h3>

              <p className="text-xs text-gray-400 truncate">
                {user?.email}
              </p>
            </div>

          </div>
        </button>

      </div>

    </aside>
  );
}