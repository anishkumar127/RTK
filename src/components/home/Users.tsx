"use client";
import { useFetchUserQuery } from "@/Redux/api/apiSlice";
type UserMapProps = {
  title: string;
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  description: string;
  category: string;
};
const Users = () => {
  const {
    data: User,
    isError,
    isLoading,
    isSuccess,
  } = useFetchUserQuery(1) || {};

  return (
    <div>
      {!isLoading &&
        User?.length > 0 &&
        User?.map((item: UserMapProps) => {
          return <div key={item?.id}>{item?.title}</div>;
        })}
    </div>
  );
};

export default Users;
