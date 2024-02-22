import Departments from "../departments/Departments";

function UserSideBar() {
    
    return (
        <>
          <div className="bg-white w-1/2 z-50 shadow-md">
                <div className="space-y-4 py-4">
                    <div className="px-3 py-2">
                    <div className="">
                      <Departments/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserSideBar;