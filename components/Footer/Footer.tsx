import { connection } from "next/server";
import { Suspense } from "react";
import css from "./Footer.module.css";

async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>
          ©{" "}
          <Suspense fallback={null}>
            <CurrentYear />
          </Suspense>{" "}
          NoteHub. All rights reserved.
        </p>

        <div className={css.wrap}>
          <p>Developer: Igor Kolodyazhniy</p>
          <p>
            Contact us:{" "}
            <a href="mailto:student@notehub.app">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
