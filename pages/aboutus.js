import { useUser } from "@auth0/nextjs-auth0";
import link from "next/link";
import styles from "../styles/aboutus.module.css";
const aboutus = () => {
  const { user } = useUser();
  return (
    <main>
      <div class="section">
        <div className={styles.navbar}>
          <nav>
            <div class="logo">
              <img src="/logo1.png" />
            </div>
            <ul>
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/contactus" className="nav-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/recipe" class="nav-link">
                  Recipe
                </a>
              </li>
              <li>
                {user && (
                  <a href="/api/auth/logout" class="nav-link">
                    Logout{" "}
                  </a>
                )}{" "}
                {!user && (
                  <a href="/api/auth/login" class="nav-link">
                    Login
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="title">
        <div className={styles.body}>
          <section>
            <div classname={styles.image}>
              <img src="https://pngimg.com/uploads/chef/chef_PNG117.png" />
            </div>
            <div classname={styles.content}>
              <h2> About Us </h2> <span> </span>
              <p>
                Cook It - A Recipe Diary is intended to be used for day to day
                purpose.This website is intended to have an intuitive and simple
                user interface that allows the user to find and view different
                food recipes based on input provided by the users.
              </p>
              <ul classname={styles.links}>
                <li>
                  <a href="/members"> Members </a>
                </li>
                <div class="vertical-line"> </div>
                <li>
                  <a href="/contactus"> Contact </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default aboutus;
