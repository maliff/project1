import React from 'react'
import LteContent from '../../components/LteContent';
import LteContentHeader from '../../components/LteContentHeader';

function ProductListing() {
  return (
    <>
      <LteContentHeader title='#00123 Product Listing' />
      <LteContent>
      <div className="card">
        <div className="card-body">
            <h3 className="card-title mb-4"><b>#00123 Product Listing</b><span className="badge bg-info ml-1">Open</span></h3>
            <br /><br />
            <div className="user-block mb-3">
                <img className="img-circle img-bordered-sm" src="./images/profile-image-2.jpg" alt="user image" />
                <span className="username">
                    <a href="#">Julian Cassablancas</a>
                </span>
                <span className="description">Data Provider</span>
            </div>
            <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
            </p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
        </div>
      </LteContent>
    </>
  )
}

export default ProductListing