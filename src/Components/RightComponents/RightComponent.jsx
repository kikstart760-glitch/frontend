import React from 'react'
import '../../Styles/global.css'
import plain from '../../assets/Vector.png'
import img2 from '../../assets/Vector2.png'
import img3 from '../../assets/Group 688.png'
import SignupComponent from '../SignupComponents/SignupComponent';

function RightComponent() {
  return (
    <div className="right-component">
      <div className="plain">
        <img src={plain} alt="plain" className="plain1" />
      </div>
      <SignupComponent />
      <div className="vectorimg">
        <div className="vector2">
          <img src={img2} alt="vector2" className="vector21" />
        </div>
        <div className="vector3">
          <img src={img3} alt="group" className="group1" />
        </div>
      </div>
    </div>
  );
}

export default RightComponent