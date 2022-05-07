// import { FaGithub } from "react-icons/fa";
// import { FiX } from "react-icons/fi";
// import { signIn, signOut,useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export const SignInButton = () => {
  return (
    <button type="button" className={styles.signInButton}>
      {/* <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} /> */}
      Entrar
    </button>
  );
  // ) : (
  //   <button
  //     onClick={() => signIn("github")}
  //     type="button"
  //     className={styles.signInButton}
  //   >
  //     <FaGithub color="#eba417" />
  //     Sing in with GitHub
  //   </button>
  // );
};
