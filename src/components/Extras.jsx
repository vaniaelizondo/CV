import React from "react";
import { GiTeacher, GiBrain, GiMaterialsScience } from 'react-icons/gi'
import { FaCross, FaHospitalAlt, FaSchool } from 'react-icons/fa'

const Extras = ({ extras }) => {
  return (
    <div id="Extras">
      <h3>Extracurricular activities</h3>
      {extras.map((extra, index) => (
        <div className="block" key={index}>
          <div className="TwoColumns">
            <div className="FirstColumn">
              {index === 0 
                ? <GiTeacher className="icon"/>
                : (index === 1
                  ? <FaCross className="icon" color="brown"/>
                  : (index === 2
                    ? <GiBrain className="icon" color="pink" />
                    : (index === 3
                      ? <FaHospitalAlt className="icon" color="red" />
                      : (index === 4
                        ? <GiMaterialsScience className="icon" color="green" />
                        : <FaSchool className="icon" color="#5e1cad" />
                      )
                    )
                  )
                )
              }
            </div>
            <div className="SecondColumn">
              <h4>{extra.title}</h4>
              <h5>{extra.place}</h5>
              <h6>{extra.date}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Extras;
