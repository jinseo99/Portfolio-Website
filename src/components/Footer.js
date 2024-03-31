import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section className="page-section">
        <div className="footer">
            <h3> Developed by Jinseo Lee</h3>
            <h3>Copyright © {year} JL.</h3>
        </div>
    </section>
  );
}

export default Footer;