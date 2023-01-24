import Typography from '@mui/material/Typography';
import ImageFullWidth from './ImageFullWidth';
import Box from '@mui/material/Box';
import Iframe from 'react-iframe'; 
import HeadingWithBorder from './HeadingWithBorder';
import BodyText from './BodyText'; 

function Home() {
    return (
      <Box className="Home">
          <HeadingWithBorder>Welcome</HeadingWithBorder>
          <BodyText>
          Buckskill is a welcoming, low key, fun and relaxed club. Our facilities include three grass courts, six Har-Tru courts, and one DecoTurf court. Our courts have an idyllic English garden setting, our pros are top-notch and the tennis is great! We only allow a limited number of members, ensuring plenty of court time for everyone and, as a member you can book your court time in advance. Our staff is friendly and professional and is always happy to arrange games for our members. We host a number of fun social events throughout the season ranging from serious Pro-Am tournaments to our famous "Tea at Wimbledon" and margarita mixers every Friday Evening. 
          <br/>
          <br/>
          We look forward to seeing you on the courts!
          </BodyText>
        <ImageFullWidth src="./images/grasswithflags.jpeg"/>
        <HeadingWithBorder>Directions</HeadingWithBorder>
        <Iframe 
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.956579719257!2d-72.22528568428216!3d40.96053003030994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8bb9d03563f37%3A0xa54bc7cffd59a4cb!2sBuckskill%20Tennis%20and%20Winter%20Club!5e0!3m2!1sen!2sus!4v1673407124987!5m2!1sen!2sus"
            width="100%" 
            height="450"
            styles={{borderRadius: "20px"}}/>
      </Box>
    );
  }
  
  export default Home;