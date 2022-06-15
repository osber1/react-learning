import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meetup Application</title>
        <meta name="description" content="bla bla bla" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: meetups,
//     },
//   };
// };

export const getStaticProps = async () => {
  const response = await fetch(
    "https://react-learning1-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  );

  const responseData = await response.json();

  const loadedMeetups = [];

  for (const key in responseData) {
    loadedMeetups.push({
      id: key,
      title: responseData[key].title,
      image: responseData[key].image,
      address: responseData[key].address,
      description: responseData[key].description,
    });
  }

  return {
    props: {
      meetups: loadedMeetups,
    },
    revalidate: 10,
  };
};

export default HomePage;
