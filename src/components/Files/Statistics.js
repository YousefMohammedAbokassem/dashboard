import React from 'react'
import Statistic from './Statistic';

export default function Statistics() {
  return (
    <div
      className="col-lg-4 my-3 wow animate__slideInLeft"
      data-wow-duration="0.5s"
      data-wow-offset="200"
    >
      <div className="statistics position-relative p-3 h-auto radius">
        <h4 className="text-center  fw-bold">Files Statistics</h4>
        <Statistic
          icon="fa-regular fa-file-pdf fa-lg blue center-flex c-blue icon me-2 bg-blue-op "
          type="PDF Files"
          num="130"
          size="6.5GB"
        />
        <Statistic
          icon="fa-regular fa-images fa-lg blue center-flex c-blue icon me-2 bg-green-op "
          type="Images"
          num="115"
          size="3.5GB"
        />
        <Statistic
          icon="fa-regular fa-file-word fa-lg blue center-flex c-blue icon me-2 bg-red-op "
          type="Word Files"
          num="110"
          size="3.2GB"
        />
        <Statistic
          icon="fa-solid fa-file-csv fa-lg blue center-flex c-blue icon me-2 bg-orange-op "
          type="CSV Files"
          num="99"
          size="2.9GB"
        />
        <button className="upl border-0 mt-3 py-2 px-3 radius-6 bg-blue d-block mx-auto">
          <i className="fa-solid fa-angles-up me-2 text-white"></i>
          <span className="text-white">Upload</span>
        </button>
      </div>
    </div>
  );
}
