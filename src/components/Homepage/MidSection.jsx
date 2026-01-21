import React from "react";
import '../Header/Header.scss';
import image2 from "../../assets/img2.jpeg";
import thinker from "../../assets/thinker.jpeg";
import { useMediaQuery } from "react-responsive";

export default function MidSection({ onAddToCart }) {
  const isMobile = useMediaQuery({ query: '(max-width: 997px)' });

  return (
    <>
      {isMobile ? (
        <>
          <div className="middleRowMob">
            <img src={image2} alt="midImage1" className="columnImgOne" />
            <div className="midImage1A">
              <div className="midImage1Red">{"Summer "}</div>
              <div>&nbsp;{"is here and"}</div>
            </div>
            <div className="midImage1B">
              {"So is our "}
              <div className="midImage1Red">&nbsp;{"Collection"}</div>
            </div>
            <div className="thinkerImg">
            <img src={thinker} alt="midImage2" className="columnImgTwo" />
                <div className="midImage2A">
                  <div className="midImage2Red">{"Wrinkle-free "}</div>
                  <div>&nbsp;{"t-shirts"}</div>
                </div>
            </div>

            <div className="stainImg">
            <img src={image2} alt="midImage3" className="columnImgThree" />
                <div className="midImage3A">
                  <div className="midImage3Red">{"stain-free "}</div>
                  <div>&nbsp;{"denim shirts"}</div>
                </div>
            </div>
          </div>
        </>
      ) : (
        <ul className="middleRow">
          <li className="midColumn1">
            <img src={image2} alt="midImage1" className="columnImgOne" />
            <div className="imageTextFlex">
              <div className="midImage1A">
                <div className="midImage1Red">{"Summer "}</div>
                <div>&nbsp;{"is here and"}</div>
              </div>
              <div className="midImage1B">
                {"So is our "}
                <div className="midImage1Red">&nbsp;{"Collection"}</div>
              </div>
            </div>
          </li>
          <li className="midColumn1">
            <ul id="products">
              <li>
                <img src={thinker} alt="midImage2" className="columnImgTwo" />
                <div className="midImage2A">
                  <div className="midImage2Red">{"Wrinkle-free "}</div>
                  <div>&nbsp;{"t-shirts"}</div>
                </div>
              </li>
              <li>
                <img src={image2} alt="midImage3" className="columnImgThree" />
                <div className="midImage3A">
                  <div className="midImage3Red">{"stain-free "}</div>
                  <div>&nbsp;{"denim shirts"}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </>
  );
}
