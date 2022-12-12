import React, { useState } from "react";
// import '../App.css'
// import _ from 'lodash'
import popularImg from "../../assets/images/popular.png";
import popularImg1 from "../../assets/images/popular-1.png";
import popularImg2 from "../../assets/images/popular-2.png";
import MostPopularRes from "./mostpopularres";


function MostPopular() {
  
  const airports = [
    {
      id: 1,
      name: 'Bandara Soetta',
      city: 'Jakarta',
      country: 'Indonesia',
      tiket: 3,
      image: {popularImg}
      
    },
    {
      id: 2,
      name: 'Bandara Russia',
      city: 'Copenhagen',
      country: 'Russia',
      tiket: 5,
      image: {popularImg1}
      
    },
    {
      id: 3,
      name: 'Bandara Tamsel',
      city: 'Bekasi',
      country: 'Indonesia',
      tiket: 3,
      image: {popularImg2}
      
    },
    {
      id: 4,
      name: 'Bandara Tamsel',
      city: 'Bekasi',
      country: 'Indonesia',
      tiket: 3,
      image: {popularImg2}
      
    },
    {
      id: 5,
      name: 'Bandara Tamsel',
      city: 'Bekasi',
      country: 'Indonesia',
      tiket: 3,
      image: {popularImg2}
      
    },
  ]

  // const transaksi = [
  //   {
  //     id: 1,
  //     nama: 'Celana Panjang',
  //     jumlah_pesanan: 5,
  //   },
  //   {
  //     id: 2,
  //     nama: 'Baju Lengan Panjang',
  //     jumlah_pesanan: 8,
  //   },
  //   {
  //     id: 3,
  //     nama: 'Celana Levis',
  //     jumlah_pesanan: 10,
  //   },
  //   {
  //     id: 4,
  //     nama: 'Jaket',
  //     jumlah_pesanan: 2,
  //   },
  //   {
  //     id: 5,
  //     nama: 'Jaket',
  //     jumlah_pesanan: 2,
  //   },
  //   {
  //     id: 6,
  //     nama: 'Jaket',
  //     jumlah_pesanan: 2,
  //   },
  //   {
  //     id: 7,
  //     nama: 'Jaket',
  //     jumlah_pesanan: 2,
  //   },
  // ]

  // const result = _(transaksi)
  //               .groupBy('nama')
  //               .map((grp, nama) => ({
  //                 nama,
  //                 jumlah_pesanan: _.sumBy(grp, 'jumlah_pesanan'),
  //               })).value();

  // console.log(result);

  // const result_fix = result.sort((a,b) => b-a)
  // const mapping = result.map((x) => x.jumlah_pesanan).sort((a,b) => b-a)
  // console.log(mapping);
  // console.log(result_fix, 'a')

  // const tempRest = transaksi.map((x) => x.jumlah_pesanan).sort((a,b) => b-a)
  // console.log(tempRest[0]);

  
  const [isHovering, setIsHovering] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(true)
  }

  function handleHoverLeave() {
    setIsHover(false)
  }

  function handleMouseEnter() {
    setIsHovering(true)
  }

  function handleMouseLeave() {
    setIsHovering(false)
  }

  const filterBan = airports.filter(airport => airport.id === 1)

  // console.log(airports.sort((a,b) => b-a));

  const displayBan = filterBan.map((airport, index) => {
    return (
      <div
        key={index}
        className={`most-popular-item ${isHover !== isHovering ? "col-3" : "col-6"}`}
        id="most-popular-item-active"
      >
        <img src={popularImg} alt={airport.image} className="w-100 h-100" />
        <div className="most-popular-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <p className="most-popular-card-star">
                    5.0
                    <span className="most-popular-card-total">
                        (5.2K+)
                    </span>
                  </p>
                  <h3 className="most-popular-card-title">
                    {airport.name}
                  </h3>
                  <p className="most-popular-card-location d-flex">
                    {`${airport.city}, ${airport.country}`}
                  </p>
                </div>
                <a href="/#" className="btn btn-cream rounded-4">
                  &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const filterBan1 = airports.filter(airport => airport.id === 2)

  const displayBan1 = filterBan1.map((airport, index) => {
    // console.log(index) 0, 1
    return (
      <div
        key={index}
        className={`most-popular-item ${isHovering ? "col-6" : "col-3"}`}
        id="most-popular-item-active"
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <img src={popularImg} alt={airport.image} className="w-100 h-100" />
        <div className="most-popular-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <p className="most-popular-card-star">
                    5.0
                    <span className="most-popular-card-total">
                        (5.2K+)
                    </span>
                  </p>
                  <h3 className="most-popular-card-title">
                    {airport.name}
                  </h3>
                  <p className="most-popular-card-location d-flex">
                    {`${airport.city}, ${airport.country}`}
                  </p>
                </div>
                <a href="/#" className="btn btn-cream rounded-4">
                  &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const filterBan2 = airports.filter(airport => airport.id === 3)
  
  const displayBan2 = filterBan2.map((airport, index) => {
    // console.log(index) 0, 1
    return (
      <div
        key={index}
        className={`most-popular-item ${isHover ? "col-6" : "col-3"}`}
        id="most-popular-item-active"
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={(e) => handleHoverLeave(e)}
      >
        <img src={popularImg} alt={airport.image} className="w-100 h-100" />
        <div className="most-popular-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <p className="most-popular-card-star">
                    5.0
                    <span className="most-popular-card-total">
                        (5.2K+)
                    </span>
                  </p>
                  <h3 className="most-popular-card-title">
                    {airport.name}
                  </h3>
                  <p className="most-popular-card-location d-flex">
                    {`${airport.city}, ${airport.country}`}
                  </p>
                </div>
                <a href="/#" className="btn btn-cream rounded-4">
                  &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
    <div id="most-popular" className="most-popular d-none d-sm-block">
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-4">
            <p className="text-title-blue">TOP 3 FEATURED AIRPORT</p>
            <h2 className="text-title-black">Most Popular Destinations</h2>
            <p className="text-title-gray">
              The best destination in our opinion is how much customers like it in terms of place, price, comfort and of course airport service
            </p>
            <a href="/#" className="btn btn-view">
              View All Destination
            </a>
          </div>
          <div className="col-8">
            <div className="row">
              {displayBan}
              {displayBan1}
              {displayBan2}
            </div>
          </div>
        </div>
      </div>
    </div>
      <MostPopularRes />
    </>
  );
}

export default MostPopular;
