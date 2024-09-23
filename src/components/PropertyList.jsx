import React from 'react';
import useFatch from '../hookes/usefetch';

function PropertyList() {
  const { datas, loading } = useFatch(
    'http://localhost:8800/api/hotel/countbytype'
  );
  const images = [
    'https://cf.bstatic.com/xdata/images/hotel/square240/442796608.webp?k=bd9788f6decdcf70060e4f3acb0d561df8eb378e96ea55f76c0b692398abbd77&o=',
    'https://cf.bstatic.com/xdata/images/hotel/square240/575055834.webp?k=976426a538f3d445429656daf20578a780204698ae11ce3dc2cfa8823f39e62a&o=',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
  ];

  return (
    <div className="plist w-full max-w-screen-lg mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        'Loading, please wait...'
      ) : (
        <>
          {datas &&
            images.map((img, i) => (
              <div className="plistItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="plistImage w-full h-[200px] object-cover rounded-lg"
                />
                <div className="plistTitle mt-2 text-center">
                  <h2 className="text-xl capitalize font-bold">
                    {datas[i]?.type}
                  </h2>
                  <span className="font-semibold">
                    {datas[i]?.count} {datas[i]?.type}
                  </span>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
