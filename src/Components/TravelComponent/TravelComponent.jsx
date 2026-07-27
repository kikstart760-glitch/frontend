import {React,useState} from 'react'
import '../TravelComponent/TravelComponent.css'
import img1 from '../../assets/travel1.png'
import img2 from '../../assets/travel2.png'
import img3 from '../../assets/travel3.png'
import img4 from '../../assets/travel4.png'
import TravelModal from '../TravelModal/TravelModal'

function TravelComponent() {
    const destinations = [
        {
            id: 1,
            title: "Bali, Indonesia",
            img: img1,
            desc: "Experience the serenity of Ubud’s lush landscapes, indulge in luxurious spa treatments, and immerse yourself in Balinese culture through traditional ceremonies and yoga retreats.",
        },
        {
            id: 2,
            title: "Amalfi Coast, Italy",
            img: img2,
            desc: "Discover the beauty of the Mediterranean coastline while indulging in exquisite Italian cuisine, exploring charming coastal villages, and rejuvenating with scenic hikes and spa treatments.",
        },
        {
            id: 3,
            title: "Costa Rica",
            img: img3,
            desc: "Immerse yourself in the tropical paradise of Costa Rica, where wellness retreats offer yoga, meditation, and eco-friendly adventures amidst stunning rainforests and pristine beaches.",
        },
        {
            id: 4,
            title: "Kyoto, Japan",
            img: img4,
            desc: "Delve into the tranquility of Kyoto’s ancient temples and gardens, experience traditional tea ceremonies, and enjoy the art of Japanese cuisine as you explore the city’s rich cultural heritage.",
        },
        {
            id: 5,
            title: "Sedona, Arizona, USA",
            img: img1,
            desc: "Find inner peace and harmony in the stunning red rock landscapes of Sedona. Engage in mindfulness practices, hike the picturesque trails, and indulge in luxurious spa therapies inspired by Native American traditions.",
        },
        {
            id: 6,
            title: "Maldives",
            img: img2,
            desc: "Escape to a private overwater villa in the Maldives, where crystal-clear turquoise waters and pristine white sands create an idyllic backdrop for relaxation. Enjoy yoga on the beach.",
        },
        {
            id: 7,
            title: "Marrakech, Morocco",
            img: img3,
            desc: "Immerse yourself in the vibrant colors, bustling markets, and rich flavors of Marrakech. Indulge in traditional hammam rituals, explore ancient palaces, and savor delectable Moroccan cuisine.",
        },
        {
            id: 8,  
            title: "Patagonia, Chile",
            img: img4,
            desc: "Embark on an adventure to the awe-inspiring landscapes of Patagonia, where breathtaking mountains, glaciers, and lakes await. Engage in invigorating outdoor activities such as hiking and kayaking.",
        },
        {
            id: 9,
            title: "Kerala, India",
            img: img3,
            desc: "Discover the ancient practices of Ayurveda in the lush backwaters of Kerala. Experience rejuvenating treatments, explore tranquil tea plantations, and immerse yourself in the spirituality of this enchanting region.",
        },
        {
            id: 10,
            title: "Zanzibar, Tanzania",
            img: img4,
            desc: "Unwind on the pristine beaches of Zanzibar, known for its turquoise waters and swaying palm trees. Engage in yoga retreats, explore spice markets, and indulge in traditional Swahili cuisine.",
        },
    ]

    const [show, setShow] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState(null);

    const handleShow = (item) => {
        setSelectedDestination(item);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedDestination(null);
    };

  return (
    <>
       <div className="travel-items">
        {destinations.map((data) => (
            <div className="data" key={data.id}>
            <img src={data.img} alt={data.title} />
            <h4>{data.title}</h4>
            <p>{data.desc}</p>
            <span onClick={() => handleShow(data)} className="learn-more">
                Learn More →
            </span>
            </div>
        ))}
       </div>
       <TravelModal 
            show={show} 
            handleClose={handleClose} 
            destination={selectedDestination} 
       />
    </>
  )
}

export default TravelComponent
