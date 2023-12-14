import React from "react";
var currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div className="footer">
      <p>Copyright@ {currentYear} </p>
    </div>
  );
}
export default Footer;
