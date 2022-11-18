//import logo from './logo.svg';
import './App.css';

function App() {
  const users=[
    {
      title: "Ponniyin Selvan-1",
      pic: "https://pbs.twimg.com/media/FcsOpVcaIAAD4qX.jpg",
      about:"Vandiyathevan sets out to cross the Chola land to deliver a message from the crown prince Aditha Karikalan. Meanwhile, Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne.",
      rating: 8.0
    },
    {
      title: "Love Today",
      pic : "https://m.media-amazon.com/images/M/MV5BMjg1ZTkwMGItNWFlMi00YThjLTg5MmEtYTg3NWI2NjY0NWI1XkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg",
      about:"Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles.",
      rating: 9.1
    },
    {
      title: "Vikram",
      pic:"https://m.media-amazon.com/images/M/MV5BOTYxOWU3OWYtOGM4NC00NDhlLTlmZTYtMGUxM2YwZmFhOGFlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      about:"A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai",
      rating: 8.4
    },
    {
      title: "Sardar",
      pic:"https://assetscdn1.paytm.com/images/cinema/Sardar-min-7878f140-5093-11ed-accc-bda99c20e847.jpg",
      about:"Sardar is an 2022 Indian Tamil-language spy action film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under the banner of Prince Pictures.",
      rating: 7.8
    }

  ]
  return (
    <div className="App">
      {/* <User name="Ponniyin Selvan-1" 
      pic="https://pbs.twimg.com/media/FcsOpVcaIAAD4qX.jpg"
      about="Vandiyathevan sets out to cross the Chola land to deliver a message from the crown prince Aditha Karikalan. Meanwhile, Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne."
      rating="8.0"
      />
      <User 
      name="Love Today"
      pic="https://m.media-amazon.com/images/M/MV5BMjg1ZTkwMGItNWFlMi00YThjLTg5MmEtYTg3NWI2NjY0NWI1XkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg" 
      about="Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment. The film stars Pradeep Ranganathan himself, Ivana and Raveena Ravi in lead roles."
      rating="9.1"
      />
      <User 
      name="Vikram"
      pic="https://m.media-amazon.com/images/M/MV5BOTYxOWU3OWYtOGM4NC00NDhlLTlmZTYtMGUxM2YwZmFhOGFlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" 
      about="A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai"
      rating="8.4"
      />
      <User name="Sardar" 
      pic="https://assetscdn1.paytm.com/images/cinema/Sardar-min-7878f140-5093-11ed-accc-bda99c20e847.jpg"
      about="Sardar is an 2022 Indian Tamil-language spy action film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under the banner of Prince Pictures."
      rating= "7.8"
      /> */}

      {users.map((usr) => ( 
      <User name={usr.title} 
      pic={usr.pic}
      about={usr.about}
      rating={usr.rating}
      />
      ))}
    </div>
  );
}


function User({pic,name,rating,about}) //object destructing
{
  return( 
    <div class="col">
      <div class="card">
        <img src={pic} class="card-img-top" alt="..." />
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <i class="fa fa-star"> <span className='rating'>{rating}</span></i> 
          <p class="card-text">{about}</p>
        </div>
      </div>
    </div>
  ); 
}

export default App;
