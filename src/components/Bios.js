import React from 'react';
import BioCard from './BioCard.js'

const bios = [
  {
    name: 'Roger',
    text: 'The Horse Man',
    photo: ''
  },
  {
    name: 'Howard',
    text: 'The Cow Guy and the Hay Guy',
    photo: ''
  },
  {
    name: 'Elaine',
    text: "Nanny's Mom",
    photo: ''
  }
]

class Bios extends React.Component {
  constructor() {
    super()
    this.state = {
      bios
    }
  }

  render() {
    return (
      this.state.bios.map(b => <BioCard key={b.name} bio={b} />)
    );
  }
}  

export default Bios;
