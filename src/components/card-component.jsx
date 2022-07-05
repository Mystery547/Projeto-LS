import { useState, useEffect } from 'react';
import {Card, Button} from 'react-bootstrap';
import hobbit from '../images/hobbit.jpg';
import lotr from '../images/senhor-dos-aneis.jpg';
import silmarillion from '../images/silmarillion.jpg';

import '../styles/card-component.css'

function CardComponent() {

  const [quote, setQuote] = useState();

  useEffect(()=>{
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer ztIq64yLNWJP8vl_taDy'
    }
    const fetchData = async () => {    
      const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
          headers: headers
        })
        const quotes = await rawQuotes.json();
        const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
        setQuote(quote.dialog)
    };

    fetchData();
  }, [])

  const [history, setHistory] = useState([
    {
      id: 1, srcImg: silmarillion, title: 'O Silmarillion'
    },
    {
      id: 2, srcImg: hobbit, title: 'O Hobbit'
    },
    {
      id: 3, srcImg: lotr, title: 'O Senhor dos anéis'
    }
  ]);


  return (
    <>
    <div id="card-container">
    {
        history.map(hist => (
          <Card key={hist.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={hist.srcImg} />
          <Card.Body>
            <Card.Title>{hist.title}</Card.Title>
            <Card.Text>
              {quote}
            </Card.Text>
            <Button variant="primary">Ler</Button>
          </Card.Body>
        </Card>
        ))
      }
    </div>
      
    </>
  )
}

export default CarouselComponent;