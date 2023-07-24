import React, {useState} from 'react';
import './services.scss'
import {dataServices} from '../../constants/index.js'

import {tijolos, logo} from '../../assets'
import {FaWindowClose} from 'react-icons/fa'
import {TbHandClick} from 'react-icons/tb'


const Services = () => {
    const html = document.querySelector('html')
    const [displayStyle, setDisplayStyle] = useState('none');
    const [singleService, setSingleService] = useState(dataServices[0]);

    const closeServices = () =>{
        setDisplayStyle('none')
        html.style.overflow = 'auto';
    }

    const infoServices = (id) =>{
        setDisplayStyle('flex')
        setSingleService(dataServices[id-1])
        html.style.overflow = 'hidden';
    }

  return (
    <section id='services' style={{backgroundImage: `url(${tijolos})`}}>
        <div className="container">
            <img src={logo} alt="logo Mr Barber" className='logo'/>
            <h2>O que Oferecemos</h2>
            <p>Confira os serviços disponíveis na Mr Barber.</p>

            <div className="setContent" >
                {
                    dataServices.map(({id, imgLogo, imgFundo, title}) => {
                        return(
                            <div key={id} className="singleService" onClick={() => infoServices(id)} style={{backgroundImage: `url(${imgFundo})`}}>
                                
                                <div className='serviceInfo'>
                                    <img src={imgLogo} alt="" className='imgLogo'/>
                                    <h3>{title}</h3> 
                                    <TbHandClick className='icon'/>
                                </div>
                                <div className="bgColor">
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


        <div className="boxService" style={{display :displayStyle}}>
            <div className="teste">

                <div className="btnClose" onClick={() => closeServices()}>
                    <FaWindowClose/>
                </div>

                <div className="content">
                    <img src={singleService.imgLogo} alt="logo serviço" />
                    <h2 className='title-service'>{singleService.title}</h2>

                    <div className="items-grid">
                        {
                            singleService.serviceDetails.map(({titleDetails, description, price}) => {
                                return(
                                    
                                    <div className="service-item">
                                        <h3>{titleDetails}</h3>
                                        <p>{description}</p>
                                        <p className='price'>{price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>


    </section>
    
  )
}

export default Services