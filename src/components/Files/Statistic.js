import React from 'react'

export default function Statistic({icon,type,num,size}) {
  return (
    <div className="statistic p-2 radius-6 d-flex align-items-center justify-content-between mt-2">
      <div className="fileType d-flex align-items-center justify-content-center ">
        <i className={icon}></i>
        <div className="type d-flex flex-column">
          <span>{type}</span>
          <span className="opacity-75">{num} Files</span>
        </div>
      </div>
      {/*  */}
      <span className="opacity-75">{size}</span>
    </div>
  );
}
