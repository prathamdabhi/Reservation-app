import React from 'react';
import useFatch from '../hookes/usefetch';

function FeatureProperty() {
  const { datas, loading } = useFatch(
    'http://localhost:8800/api/hotel?featured=true&limit=4'
  );

  return (
    <div className="fp max-w-screen-lg w-full mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {loading ? (
        'Loading...'
      ) : (
        <>
          {datas.map((item) => (
            <div className="fp-item bg-white shadow-md rounded-lg" key={item._id}>
              <img
                className="fp-img w-full h-[200px] object-cover rounded-t-lg"
                src={item.img[0]}
                alt=""
              />
              <div className="fp-title p-4">
                <span className="fp-name font-bold text-lg">{item.name}</span>
                <span className="fp-city font-light block">{item.city}</span>
                <span className="fp-price block my-1">
                  Starting from ${item.cheapestprice}
                </span>
                {item.rating && (
                  <div className="fp-rating flex items-center mt-2">
                    <button className="fp-ratingbtn bg-blue-500 text-white px-2 py-1 rounded-md">
                      {item.rating}
                    </button>
                    <span className="fp-status ml-2 text-sm text-gray-600">
                      Excellent
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeatureProperty;

