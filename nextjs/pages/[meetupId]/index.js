import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        title: "first",
        address: "aaaaa",
        description: "aaaaaa",
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
