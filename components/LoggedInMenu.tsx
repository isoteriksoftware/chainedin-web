import { useTheme } from '@mui/material';
import { Avatar, PopoverDropdown, PopoverElement } from '@web3uikit/core';
import { Grid, LogOut } from '@web3uikit/icons';
import { Session } from 'next-auth';
import { ReactElement } from 'react';

const Item = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: ReactElement;
  onClick?: () => {};
}) => {
  return (
    <PopoverElement
      backgroundColor="transparent"
      height={50}
      icon={icon}
      iconSize={100}
      onClick={onClick}
      text={text}
      textColor="#FFFFFF"
      textSize={20}
      width={260}
    />
  );
};

const LoggedInMenu = ({ session }: { session: Session }) => {
  const theme = useTheme();

  return (
    <PopoverDropdown
      position="bottom"
      width="300px"
      backgroundColor={theme.palette.secondary.dark}
      parent={
        <Avatar theme="image" image={session.user?.image ?? ''} isRounded />
      }
    >
      <Item text="Dashboard" icon={<Grid />} />
      <Item text="Logout" icon={<LogOut />} />
    </PopoverDropdown>
  );
};

export default LoggedInMenu;
