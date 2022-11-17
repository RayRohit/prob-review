import React from 'react'
import pcheck from './images/pcheck.png'
import phead from './images/phead.png'
import ptone from './images/ptone.png'
import pemotion from './images/pemotion.png'
import pcorrection from './images/pcorrection.png'
import sdash from './images/sdash.png'
import Heatmap from './images/Heatmap.png'
import segment from './images/segment.png'
import stc from './images/stc.png'
import aws from './images/aws.png'

export default function Snapshot() {
    return (
        <>
            <div className='container-fluid'>
                <div className='shadow-lg rounded'>
                    <h4 className="p-3 fw-bolder border border-5">Projects Snapshot</h4>
                </div>
                <div className='row'>
                    <div className='col-sm-6 p-2'>
                        <div className='card p-3 border border-5'>
                            <h6 className='fw-bolder'>Plagiarism Checker</h6>
                            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div className="carousel-item active card-body shadow border border-5 p-3" >
                                        <img src={pcheck} className="d-block w-100" alt="first slide" height="400px" />
                                    </div>
                                    <div className="carousel-item card-body shadow border border-5 p-3">
                                        <img src={phead} className="d-block w-100" alt="first slide" height="400px" />
                                    </div>
                                    <div className="carousel-item card-body shadow border border-5 p-3">
                                        <img src={ptone} className="d-block w-100" alt="first slide" height="400px" />
                                    </div>
                                    <div className="carousel-item card-body shadow border border-5 p-3">
                                        <img src={pemotion} className="d-block w-100" alt="first slide" height="400px" />
                                    </div>
                                    <div className="carousel-item card-body shadow border border-5 p-3">
                                        <img src={pcorrection} className="d-block w-100" alt="first slide" height="400px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 p-2'>
                        <div className='card p-3 border border-5'>
                            <h6 className='fw-bolder'>STC - Voice Assistant</h6>
                            <div className='card-body shadow border border-5 p-3'>
                                <img src={stc} alt="avatar snapshot" className='w-100' height="400px" />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 p-2'>
                        <div className='card p-3 border border-5'>
                            <h6 className='fw-bolder'>AWS Bucket Sync</h6>
                            <div className='card-body shadow border border-5 p-3'>
                                <img src={aws} alt="avatar snapshot" className='w-100' height="400px" />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 p-2'>
                        <div className='card p-3 border border-5'>
                            <h6 className='fw-bolder'>Shell - Flame Analytics Video</h6>
                            <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" >
                                        <img src={sdash} className="d-block w-100 img-fluid" alt="first slide" style={{height:'442px'}} />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={Heatmap} className="d-block w-100 img-fluid" alt="first slide" style={{height:'442px'}} />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={segment} className="d-block w-100 img-fluid" alt="first slide" style={{height:'442px'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
