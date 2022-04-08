import React from 'react';
import imgNotFound from '../svg/notfound.svg';
function NotFound(props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center">
        <div>
          <img className="p-10" src={imgNotFound} alt="" />
          <h1 className="text-center font-light font-mono">Maaf Halaman yang anda cari tidak dapat ditemukan</h1>
          <h1 className="text-center"><a className="font-extralight text-blue-500 font-mono" href="/">Silahkan Kembali</a></h1>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default NotFound;