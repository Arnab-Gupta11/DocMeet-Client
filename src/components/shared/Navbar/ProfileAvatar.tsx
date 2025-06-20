"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCurrenUser from "@/hooks/useCurrenUser";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
const ProfileAvatar = () => {
  const { user } = useCurrenUser();
  console.log(user?.profileImage);

  // const handleLogout = async () => {

  // };

  return (
    <div className="font-medium ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {user ? (
            <div className="flex items-center cursor-pointer group">
              <Avatar className=" cursor-pointer flex items-center justify-center border-4 lg:border-r-0 border-sky-200 dark:border-dark-primary-border lg:ml-0 w-10 h-10 sm:w-12 sm:h-12">
                <AvatarImage
                  src={user ? user?.profileImage : "https://github.com/shadcn.png"}
                  alt="@shadcn"
                  className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1"
                />
                <AvatarFallback className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 ">DP</AvatarFallback>
              </Avatar>
              <p className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 text-primary-text-light dark:text-primary-text-dark font-semibold -mx-2 px-4 py-1 rounded-r-full border-2 border-sky-100 dark:border-dark-primary-border group-hover:text-primary dark:group-hover:text-primary transition-colors duration-500 hidden lg:block">
                {user.fullName}
              </p>
            </div>
          ) : (
            <span>
              <CgProfile className="text-3xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 ml-4 lg:ml-0 cursor-pointer" />
            </span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-44 font-medium  mt-3 p-2 bg-white dark:bg-black rounded-xl border-indigo-200 dark:border-dark-primary-border shadow-sm shadow-indigo-200 dark:shadow-indigo-950"
        >
          <DropdownMenuLabel className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 rounded-lg">
            <div className="flex items-center gap-2 py-1.5 text-left text-sm ">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.profileImage} alt={user?.fullName} />
                <AvatarFallback className="rounded-lg">DP</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-light-primary-text dark:text-dark-primary-txt">{user?.fullName}</span>
                <span className="truncate text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">{user?.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuGroup className="space-y-1.5"></DropdownMenuGroup>
          {user && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex items-center hover:text-primary cursor-pointer hover:bg-secondary-bg-light-1 hover:dark:bg-secondary-bg-dark-1 rounded-xl font-semibold"
                // onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-1 text-red-500" />
                Log out
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
