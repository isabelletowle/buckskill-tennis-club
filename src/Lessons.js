import LessonFilter from "./LessonFilter";
import HeadingWithBorder from "./HeadingWithBorder";
import BodyText from "./BodyText";
import LessonPriceTable from "./LessonPriceTable";

function Lessons() {
    return(
        <div style={{width: '100%'}}>
            <LessonFilter/>
            <HeadingWithBorder>Private Lessons</HeadingWithBorder>
                <BodyText>
                    Whether you are looking to work on a particular stroke, improve your all-around game, or you simply need a extensive workout, our experienced and enthusiastic pros can help you achieve your tennis goals. They will provide individualized instruction to help you attain your true potential!
                    <ul>
                        <li>
                            Private and Semi-Private Lessons are available to members and non-members, all day, everyday.
                        </li>
                        <li>
                            Members receive a 15% discount on all lessons and can schedule one week in advance or purchase a seasonal lesson package and thereby schedule for the whole season.
                        </li>
                        <li>
                            Non-Members may only book 3 days in advance.
                        </li>
                        <li>
                            Discounted lesson packs are available for Members and Non-Members.
                        </li>
                    </ul>
                </BodyText>
                <HeadingWithBorder>Offsite Lessons</HeadingWithBorder>
                <BodyText>
                    If you have your own court our top-notch Pros will come to you! In conjunction with our parent company, Hamptons Tennis Co., we offer professional tennis instruction in the privacy and convenience of your own backyard. We cater to all ages and tennis abilities. Our offsite tennis services include:
                    <ul>
                        <li>Private Lessons</li>
                        <li>Private Pro-Ams</li>
                        <li>Adult and Junior Clinics</li>
                        <li>Tennis Parties</li>
                        <li>Competitive Match Play</li>
                        <li>Social Doubles</li>
                    </ul>
                    Offsite lessons are available all day, everyday and can be scheduled on a one-time basis or in a discounted series depending on your preference. One hour minimum for offsite lessons. Pre-pay and pre-book your offsite lessons and receive a 5% discount. Travel fees may apply. 
                    <br/>
                    <br/>
                    Please contact us at (631) 324-2243 or send us an email at info@buckskilltennis.com to schedule your Tennis Pro now!
                </BodyText>
                <HeadingWithBorder>Pricing</HeadingWithBorder>
                <LessonPriceTable/>
        </div>
    ); 
}

export default Lessons;