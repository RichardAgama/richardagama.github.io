import React from 'react';
import c_BLUE_HOODIE from '../media/c_BLUE_HOODIE.png';
import a_NY_HAT from '../media/a_NY_HAT.jpeg';
import NIKE_STUDY_ONE_DEMO_9 from "../media/NIKE_STUDY_ONE_DEMO_9.png";

const Paper = ({id, index, title, number, className, date, hidden, file, img}) => {


    const img_dictionary = {
        "c_BLUE_HOODIE":[c_BLUE_HOODIE],
        "a_NY_HAT":[a_NY_HAT],
        "NIKE_STUDY_ONE_DEMO_9":[NIKE_STUDY_ONE_DEMO_9]
    }
    const images = [c_BLUE_HOODIE, a_NY_HAT, NIKE_STUDY_ONE_DEMO_9]


    return(

        <>


        <div className={!hidden ? "paper hidden":"paper"}>



            <section id="page">
            <header>
                <div>
                    <p className='type'>NikeLabs Demo</p>
                </div>
                <div>
                    <p className='type'>{title}</p>
                </div>
                <div id='page-number'>
                    <p className='type'>{number}</p>
                </div>
            </header>
            <main>

                <img src={images[index-1]} ></img>

            </main>
            <footer>
                <div>
                    <p className='type'>{date}</p>
                </div>
                <div>
                    <p className='type'>{file}</p>
                </div>
            </footer>
            </section>


        </div>        
        </>
       
    )

}

export default Paper;