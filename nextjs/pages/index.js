import MeetupList from "../components/meetups/MeetupList";

const meetups = [
  {
    id: "m1",
    title: "First one",
    image:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    address: "Kazlu ruda 5, Kaunas",
    description: "kazka kazka",
  },
  {
    id: "m2",
    title: "Second one",
    image:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    address: "Kazlauskiskes 12, Kaunas",
    description: "kazka kazka daugiau",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: meetups,
    },
    revalidate: 10,
  };
};

export default HomePage;
