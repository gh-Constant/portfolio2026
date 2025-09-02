'use client';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerIcon = ({ isOpen, onClick, className }: HamburgerIconProps) => {
  return (
    <div 
      className={`hamburger is-md ${isOpen ? 'is-active' : ''} ${className}`}
      onClick={onClick}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </div>
  );
};

export default HamburgerIcon;