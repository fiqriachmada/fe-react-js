import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <section className="py-5 text-center container mt-5 mb-lg-5">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Buy a Books for Your Knowledge</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <Link to="/books" className="btn btn-primary my-2 mx-2">
                Books
              </Link>
              <Link to="/members" className="btn btn-secondary my-2 mx-2">
                Members
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
}

export default Home
