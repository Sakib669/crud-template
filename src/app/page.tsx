import { auth } from "@/lib/auth/server";

export default async function Home() {
  const { data: session } = await auth.getSession();
  console.log("murgi chor ", session);

  return (
    <div>
      {session?.user && (
        <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-gray-900">
          <h1 className="mb-4 text-4xl">
            Logged in as{" "}
            <span className="font-bold underline">{session.user.name}</span>
          </h1>
        </div>
      )}
    </div>
  );
}
