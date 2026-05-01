import React from 'react';
import Alert from '../../components/Alert/Alert';
import SectionOne from '../../components/SectionOne/SectionOne';
import SectionTwo from '../../components/SectionTwo/SectionTwo';
import SectionThree from '../../components/SectionThree/SectionThree';
import SectionFour from '../../components/SectionFour/SectionFour';
import SectionFive from '../../components/SectionFive/SectionFive';
import SectionSix from '../../components/SectionSix/SectionSix';
import YoutubeVideos from '../../components/YoutubeVideos/YoutubeVideos';

const Home = () => {
  return (
    <>
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <YoutubeVideos />
    </>
  );
};

export default Home;
