import { useQuery, gql } from "@apollo/client";

const GET_URLS = gql`
  query Url {
    allUrls {
      id
      url
      slug
    }
  }
`;

export const UrlList = () => {
  const { loading, error, data } = useQuery(GET_URLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.allUrls.map(({ id, url, slug }) => (
        <div key={id}>
          <a href={url}>{url}</a> -&gt;{" "}
          <a href={`${window.location.host}`}>{window.location.host}</a>
        </div>
      ))}
    </div>
  );
};
