import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="flex p-4 items-center justify-between">
      This is a protected route!
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default SetupPage;
