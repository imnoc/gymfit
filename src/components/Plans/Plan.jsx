import React from 'react'
import './Plan.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plan = () => {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>

            </div>
            <div className="plans">
                {plansData.map((plan, i) => {
                    return (
                        <div className="plan" key={i}>
                            {plan.icon}
                            <span style={{fontWeight:'bold'}}>{plan.name}</span>
                            <span style={{fontWeight:'bold',fontSize:'3rem'}}>$ {plan.price}</span>
                            <div className="features">
                                {plan.features.map((feature, i) => {
                                    return (
                                        <div className="feature">
                                            <img src={whiteTick} alt="" />
                                            <span key={i}>{feature}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                <span>See more benefits -> </span>
                            </div>
                            <button className='btn'>Join now</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Plan
