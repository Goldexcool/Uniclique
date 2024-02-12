// MobileHeader component
import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/Group 4 (1).svg';
import menu from '../../public/assets/bx-menu-alt-right.svg';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="w-full flex justify-between items-center mobile-header">
      <Image src={logo} alt="logo" width={150} height={100} />
      <div onClick={onMenuClick}>
        <Image src={menu} alt="" width={30} height={30} />
      </div>
    </div>
  );
};

export default MobileHeader;
