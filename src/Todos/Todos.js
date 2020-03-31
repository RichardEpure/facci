import React, { Component } from 'react';
import "../styles/css/toDo.css";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const randomFacts = [
    "The word 'peach' is from the Latin malum Persicum, which literally means 'Persian apple.'",
    "Nearly 1,000 jasmine flowers and a dozen roses go into a single bottle of Chanel No. 5 perfume.",
    "The earliest gardens were strictly practical and were used to grow food and medicinal herbs. Around 1500 B.C. in Egypt, the first decorative gardens appeared.",
    "The first greenhouses in history were built in Rome in A.D. 30 under the orders of Emperor Tiberius who wanted to eat a cucumber a day. Andrew Faneuil in Boston built the first greenhouse in North America in 1737.",
    "Watermelons are actually vegetables and are related to squash, cucumbers, and pumpkins.",
    "Famous literary works that center their plots on gardens include The Secret Garden, the Dark Materials trilogy, Tom’s Midnight Garden, “The Selfish Giant,” Romeo and Juliet, “The Merchant’s Tale” in Canterbury Tales, La Roman de la Rose, Rebecca, The Door in the Wall, and the book of Genesis in the Bible.",
    "The name of the flower heliotrope is from the ancient Greek (helios, meaning sun, and trepos, meaning “turning to go into to”) because its leaves and flowers turn toward the sun.",
    "World Naked Gardening Day is celebrated on the first Saturday in May. It aims to promote harmony and peace with nature.",
    "The top 5 most beautiful gardens in the world include 1) Châteaux de Versailles in Versailles, France; 2) Royal Botanic Gardens in Kew, England; 3) Powerscourt Gardens in Enniskerry, Ireland; 4) Butchart Gardens in British Columbia, Canada; 5) Villa d’Este in Tivoli",
    "Gardening can be considered both an art (arranging plants harmoniously) and as a science (applying the principles and techniques of cultivation).",
    "In ancient Greek mythology, Hyakinthos (a.k.a. Hyacinthus) was the god of spring flowers. The god Apollo adored Hyakinthos, but killed him by mistake. The hyacinth flower sprang up from his blood and, thus, this flower is a symbol of sorrow, sadness, and resurrection.",
    'Gardens and philosophy are often seen as related. Philosophers note the contribution of gardening to the “good life.”',
    "There is a garden in England called The Poison Garden. It is home to 100 murderous plants. Visitors to this dangerous garden are prohibited from smelling, touching, or tasting any of the plants.[",
    "The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World. They are believed to have been built by the Neo-Babylonian king Nebuchadnezzar II near present day Hillah, Babil province, in Iraq",
    "An herb is from the leaf of a plant. A spice is from the seed, bark, root, berry, or bulb.",
    "A pineapple is actually a berry.",
    "There are over 20,000 species of edible plants in the world. However, just 20 species provide 90% of human food.",
    "Many religions use gardens as symbols of paradise and immortality. Additionally, the association of gardens with perfection is found in Judaism, Christianity, and Islam.",
    "Tulips were once worth more than gold and were responsible for the crash of the Dutch economy.",
    "Pineapples are not apples at all. They are actually berries, and are the only edible part of any bromeliad plant.",
    'Broccoli is actually a flower. The word "broccoli" is related to the Latin word broccus, meaning "shoot, protruding tooth, small nail," which also gives us the word "broach."',
    'Strawberries are not berries. However, avocados, watermelon, bananas, and pumpkins are',
    'Lemons are technically berries. Specifically, they are a hesperidium, a berry with a leathery rind.'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default class Todos extends Component {
  constructor(props) {
      super(props);
      const { match: { params: { date, month, year } } } = props;
      this.state = {
        notes: window.localStorage.getItem(`${date}/${month}/${year}`) || ''       
      }
     
  }

      render() {
          const { match: { params: { date, month, year } } } = this.props;
        
          return(
              <div className="toDoContainer">   
                <div className="dateToday">
                   {"To Do:"} {date} {monthNames[month]} {year}
                </div>
                <div>
                    <textarea
                        onChange={
                            event => {
                              this.setState({ notes: event.target.value })
                              localStorage.setItem(`${date}/${month}/${year}`, event.target.value)
                            }
                        }
                      value={this.state.notes}
                    />
                </div>
                <div className="randomFact">
                    { <strong>  Did you know? </strong>} {randomFacts[getRandomInt(23)]}
                </div>
            </div>
              
          )
      }
}
