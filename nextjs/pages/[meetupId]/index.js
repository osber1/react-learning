import Head from "next/head";
import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
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
    fallback: "blocking",
    paths: loadedMeetups.map((meetup) => ({
      params: {
        meetupId: meetup.id,
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

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

  const meetup = loadedMeetups.filter((meetup) => meetup.id == meetupId)[0];

  return {
    props: {
      meetupData: meetup,
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
