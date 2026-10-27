import css from "./Footer.module.css";

function CurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {CurrentYear()} NoteHub. All rights reserved.</p>

        <div className={css.wrap}>
          <p>Developer: your name</p>
          <p>
            Contact:{" "}
            <a href="mailto:support@notehub.com">support@notehub.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
