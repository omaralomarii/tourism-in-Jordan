import { Component } from "react";

///////////////////////mapping///////////////////////////////
class Home extends Component {
  state = {
    profile: [
      {
        id: "1",
        Name: "petra",
        Info: "The trading business gained the Nabataeans considerable revenue and Petra became the focus of their wealth. The Nabataeans were accustomed to living in the barren deserts, unlike their enemies, and were able to repel attacks by taking advantage of the area's mountainous terrain.",
        Price: 10,
        img: "https://i.natgeofe.com/n/69e2cf60-ad59-4d20-bdd1-dc96f40ab4e8/petra-world-heritage-jordan.jpg",
      },
      {
        id: "2",
        Name: "jarash",
        Info: "The city is the administrative center of the Jerash Governorate, and has a population of 50,745 as of 2015. It is located 48 kilometres (30 mi) north of the capital city Amman.",
        Price: 15,
        img: "https://dannythedigger.com/wp-content/uploads/jerash-tour-scaled-e1619676987568.jpg",
      },
      {
        id: "3",
        Name: "wadi rum",
        Info: "Wadi Rum has been inhabited by many human cultures since prehistoric times, with many cultures–including the Nabataeans–leaving their mark in the form of petroglyphs, inscriptions, and temple.",
        Price: 13,
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/222654151.jpg?k=7a8edc7f42e907bbf2fb0ed4bd2233f4f053eb5fa5b6f1eae1732cbc5ec622e5&o=",
      },
      {
        id: "4",
        Name: "aqaba",
        Info: "is the only coastal city in Jordan and the largest and most populous city on the Gulf of Aqaba.[4] Situated in southernmost Jordan,",
        Price: 18,
        img: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/aqaba.jpg",
      },
      {
        id: "5",
        Name: "DeadSea",
        Info: "The lake's surface is 430.5 metres (1,412 ft) below sea level,[4][5] making its shores the lowest land-based elevation on Earth. It is 304 m (997 ft) deep",
        Price: 18,
        img: "https://deadsea.com/wp-content/uploads/2018/08/general-info_2.jpg",
      },
    ],
  };

  render() {
    const data = this.state.profile.map((item) => {
      return (
        <div className="card col-lg-4" style={{ width: "18rem" }}>
          <img className="card-img-top" src={item.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.Name}</h5>
            <p className="card-text">{item.Info}</p>
            <p className="card-text">Price {item.Price}$</p>
            <button type="button" class="btn btn-outline-info">
              More Details
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        
        <div className="row">{data}</div>
      </div>
    );
  }
}
export default Home;