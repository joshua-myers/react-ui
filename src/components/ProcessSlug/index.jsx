import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const GET_URL_FROM_SLUG = gql`
  query UrlBySlug($slug: String!) {
    urlBySlug(slug: $slug) {
      url
    }
  }
`;
export const ProcessSlug = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_URL_FROM_SLUG, {
    variables: {
      slug
    }
  });

  if (data) {
    if (data.urlBySlug?.url) {
      let {
        urlBySlug: { url }
      } = data;

      if (!url.startsWith("http")) {
        url = `http://${url}`;
      }
      window.location = url;
      return (
        <div>
          <p>
            Redirecting to <Link to={url}>{url}</Link>
          </p>
          <p>
            Click <Link to={url}>here</Link> if you are not automatically
            redirected
          </p>
        </div>
      );
    } else {
      return (
        <div>
          Custom slug: "{slug}" has not been claimed! Click{" "}
          <Link to={`/?slug=${slug}`}>here</Link> to claim this slug now.
        </div>
      );
    }
  } else {
    return <div>Loading... "{slug}"</div>;
  }
};
