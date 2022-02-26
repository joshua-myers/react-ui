import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query Users {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

export const User = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error} </p>;

  return (
    <div>
      {data.users.map(({ id, firstName, lastName, email }) => (
        <div key={id}>{firstName}</div>
      ))}
    </div>
  );
};
