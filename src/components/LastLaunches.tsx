import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query GetLastLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
      id
    }
  }
`;

type LastLaunchesProps = {
  launch_date_utc: any;
  launch_success: boolean;
  rocket: {rocket_name:string};
  details: any;
  links: {video_link:string};
  id: number;
};

function LastLaunches() {
  const { loading, error, data } = useQuery( LAUNCHES_QUERY );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
console.log(data.launches);

  return data.launches.map(({ launch_date_utc, links, launch_success, id, details, rocket }: LastLaunchesProps) => (
    <div key={id}>
      <h1>{rocket.rocket_name}</h1>
      <h2>{launch_date_utc}: {launch_success ? 'Oui' : 'Non'}</h2>
      <p>
        {details}
      </p>
      <video width="750" height="500" controls >
      <source src={links.video_link} type="video/mp4"/>
      </video>
    </div>
  ));
}

export default LastLaunches;