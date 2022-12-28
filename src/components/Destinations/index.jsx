import React from 'react'
import Navbar from '../LandingPage/navbar'
import Footer from '../LandingPage/footer'
import Background from "../../assets/images/background.png";
import './Destinations.css'

function Destinations() {
  return (
    <>
      <Navbar />
      <div className="atas">
        <img src={Background} alt="" className="background-image" />
        <div className="card overlaying-card shadow-lg">
          <h3 className='text-center p-3'>
            DESTINATIONS
          </h3>
          <p className="text-center rounded-3 p-3 ">
          Travel the world with Tripie from bustling metropolitans to tranquil highlands, Tripie can take you to over a hundred of cities throughout the world. Discover our top destinations here, and be inspired.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/destination-cards-jakarta.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Jakarta</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/Bali.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Bali</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/thumb_dest_banyuwangi.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Banyuwangi</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/thumb-cards-ujungpandang.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Makassar</h3>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/destination-cards-jakarta.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Jakarta</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/Bali.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Bali</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/thumb_dest_banyuwangi.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Banyuwangi</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/thumb-cards-ujungpandang.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Makassar</h3>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/destination-cards-jakarta.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Jakarta</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/Bali.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Bali</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/thumb_dest_banyuwangi.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Banyuwangi</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="https://www.garuda-indonesia.com/content/dam/garuda/destination/thumb-cards-ujungpandang.jpg" alt="" />
              <p className='text-center mt-3'>(Indonesia)</p>
              <h3 className='text-center'>Makassar</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Destinations