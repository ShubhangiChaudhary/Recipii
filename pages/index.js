import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, loading } = useUser();
  return (
    <>
      {user && (
        <div>
          <a href="/api/auth/logout">Logout</a>
          <div>{user.email}</div>
          <div>{user.name}</div>
          <img src={user.picture} />
        </div>
      )}
      {!user && (
        <div>
          <a href="/api/auth/login">Login</a>
        </div>
      )}
    </>
  );
}
