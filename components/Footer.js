import React from 'react';

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-center whitespace-nowrap text-sm p-6 text-gray-600">
      <p>Copyright &copy; {new Date().getFullYear()} Kyoya Dev</p>
    </footer>
  );
}

export default Footer;
