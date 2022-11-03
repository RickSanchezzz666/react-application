import './App.css';
import Card from '../card';
import image from '../imgs/photo-1542273917363-3b1817f69a2d.avif';
import image2 from '../imgs/casey-horner-0D8_tYHIy0o-unsplash.jpg';
import image3 from '../imgs/tobias-tullius-RhjVGxILcqE-unsplash.jpg';
import Header from '../header';

function App () {

  // Describe cards properties
  const cards = [
    {
      id: 'card-1',
      imageSrc: image,
      backgroundColor: '#1a2a1a',
      likesCount: 56,
    },
    {
      id: 'card-2',
      imageSrc: image2,
      backgroundColor: '#FD452B', likesCount: 21
    },
    {
      id: 'card-3',
      imageSrc: image3,
      backgroundColor: '#BC5967', likesCount: 221
    },
    {
      id: 'card-4',
      imageSrc: image3,
      backgroundColor: '#BC5967', likesCount: 47
    },
  ];

  const description = "Pariatur ex eu irure tempor aliqua reprehenderit.";
  // JSX structure
  return (
    <div className="App">
      <Header />
      <span>Hello world</span><br />
      {description}
      {56 + 78}
      <div className="cards-container">
        {
          cards
            .map(card =>
              <Card
                id={card.id}
                imageSrc={card.imageSrc}
                backgroundColor={card.backgroundColor}
                likes={card.likesCount}
              />
            )
        }
      </div>
    </div>
  );
}

export default App;
