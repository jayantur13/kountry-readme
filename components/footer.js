import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="logohead">
        Powered by{" "}
        <p className="logo">
          <a
            href="https://github.com/jayantur13/Kountry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/npm.png" alt="Npm Logo" width={48} height={48} />
          </a>
        </p>
      </h2>
      <style jsx>
        {`
          .footer {
            display: flex;
            padding: 32px 0;
            margin-left: 100px;
            justify-content: center;
            align-items: center;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          .footer .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }

          .footer .logohead {
            margin: 0 auto;
          }

          /* On screens that are less than 700px wide, make the sidebar into a topbar */
          @media screen and (max-width: 700px) {
            .footer {
              margin: 0 auto;
            }
          }
        `}
      </style>
    </footer>
  );
}
