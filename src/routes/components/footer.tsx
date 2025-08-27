export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <div>
      <footer className="app-footer">
        <p className="footer-text">
          {currYear} Dundee Zhang. All Rights Reserved.
        </p>
        <p className="footer-text">+1 905 955 2688</p>
        <p className="footer-text">contact@dundeezha.ng</p>
      </footer>
    </div>
  );
}
