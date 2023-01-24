import * as React from 'react';
import MembershipPriceTable from './MembershipPriceTable.js'; 
import HeadingWithBorder from './HeadingWithBorder.js';
import BodyText from './BodyText.js';  
import MembershipBenefitComparison from './MemberBenefitComparison.js';
import BuyMembershipModal from './BuyMembershipModal.js';
  
function Memberships() {
    return(
        <div style={{width: '100%'}}>
            <HeadingWithBorder>Membership Benefit Comparison</HeadingWithBorder>
            <MembershipBenefitComparison/>
            <BodyText>
                Full Members have priority over Partial Members for court time reservations. Adult Members have priority over Junior Members for court time reservations.
            </BodyText>
            <HeadingWithBorder>Membership Pricing</HeadingWithBorder>
            <MembershipPriceTable/>
            <BuyMembershipModal/>
        </div>
    ); 
}
export default Memberships; 