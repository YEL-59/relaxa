import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NavbarDropdown() {
  const navigate = useNavigate();

  const handleLogout = () => {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-[50px] cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => navigate('/profile')}
            className="cursor-pointer justify-between"
          >
            Profile
            <UserIcon />
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => navigate('/settings')}
            className="cursor-pointer justify-between"
          >
            Settings
            <SettingsIcon />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer justify-between"
        >
          Log out
          <LogOutIcon />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
