import ProAm from './images/pro-am.png'; 
import ProMaam from './images/pro-maam.png'; 
import AdultDoubles from './images/adult-doubles.png'; 
import JuniorTournaments from './images/junior-tournaments.png'; 
import WomensSingles from './images/womens-singles.png'; 
import MensSingles from './images/mens-singles.png'; 

export const tournamentData = [
    {
        name: "23rd Annual Pro-Am",
        date: "Sunday, July 30th",
        entryFee: "$375",
        time: "2:00-6:00 PM", 
        warmUpTime: "1:30 PM",
        description: "The format of this tournament will be Round Robin Groups; the first and second place from each group will advance to Semi-Finals.",
        image: ProAm,
    }, 
    {
        name: "4th Annual Pro-Ma'am",
        date: "Sunday, August 20th",
        entryFee: "$400",
        time: "2:00-6:00 PM", 
        warmUpTime: "1:30 PM",
        description: "Come and play at our 2nd Annual Pro Ma’Am Tournament while enjoying some wine & cheese. There will be prize money for the winners!",
        image: ProMaam,
        imagePlacement: "right", 
    }, 
    {
        name: "Adult Doubles",
        date: "Sunday, August 15th",
        entryFee: "$300",
        time: "2:00-6:00 PM", 
        warmUpTime: "1:30 PM",
        image: AdultDoubles, 
    }, 
    {
        name: "Junior Tournaments",
        description: "Tournaments held periodically throughout the summer, contact our office for more information.",
        entryFee: "$150",
        image: JuniorTournaments, 
        imagePlacement: "right", 
    }, 
    {
        name: "Women's Singles Cup",
        date: "Sunday, July 23rd",
        entryFee: "$200",
        time: "2:00-6:00 PM", 
        warmUpTime: "1:30 PM",
        image: WomensSingles
    }, 
    {
        name: "Men's Singles Cup",
        date: "Sunday, July 23rd",
        entryFee: "$200",
        time: "2:00-6:00 PM", 
        warmUpTime: "1:30 PM",
        image: MensSingles, 
        imagePlacement: "right", 
    }, 
]