import { createUser, getUser } from "@/db/user/controller";

export default async function Mysql() {
  
  const users = await getUser();
  console.log(users);
  await createUser('cesh91','sdgs@cc.cc')

  return (
    <main>
      <div>
        <p>{JSON.stringify(users)}</p>
      </div>
    </main>
  );
}
