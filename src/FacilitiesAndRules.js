import HeadingWithBorder from "./HeadingWithBorder";
import BodyText from "./BodyText";
import ImageFullWidth from "./ImageFullWidth";

function FacilitiesAndRules() {
    return (
      <div className="FacilitiesAndRules">
          <HeadingWithBorder>Facilities</HeadingWithBorder>
          <BodyText>
            Buckskill Tennis Club has three beautiful natural grass tennis courts, six Har-Tru tennis courts and one DecoTurf court, the surface of the US Open. It's the only club around where you can play on two of the Grand Slam surfaces and the only one with grass courts open to the public!
            <br/>
            <br/>
            We have a spacious club house featuring; a full service snack bar serving breakfast, lunch and snacks all day; a well stocked pro shop with racquet stringing services; bathrooms with private showers and changing area; and a relaxing lounge area. Two expansive decks surround the Club House giving you the ultimate view of your friends playing on the courts below!
          </BodyText>
          <ImageFullWidth src="./images/GrassCourts1.jpeg"/>
          <HeadingWithBorder>Club Rules</HeadingWithBorder>
          <BodyText>
            <ul>
              <li>
                Members may book 1 hour for singles or 1.5 hours for doubles per day, if more time is available they are welcome to use it.
              </li>
              <li>
                The same person may not be a guest of the Club more than three times. 
              </li>
              <li>
                There is a 24 hour cancellation policy for all lessons and court reservations, otherwise you will be charged. 
              </li>
              <li>
                We reserve the right to cancel/refund memberships.
              </li>
              <li>
                A 1.5% per month finance charge will be levied on all accounts more than 30 days past due. 
              </li>
              <li>
                A credit card number must be supplied in order to establish a charge account. The card will be charged at the end of each day during the season. 
              </li>
            </ul> 

          </BodyText>
      </div>
    );
  }
  
  export default FacilitiesAndRules;