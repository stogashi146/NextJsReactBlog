import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "/styles/social.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Social({ iconSize = "initial" }) {
  return (
    <ul className={styles.list} style={{ "--icon-size": iconSize }}>
      <li>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
          <span className="sr-only">facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
}
