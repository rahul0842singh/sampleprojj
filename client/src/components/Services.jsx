import React from 'react'
import "../App.css"
import values1 from "../images/values-1.png"
import values2 from "../images/values-2.png"
import values3 from "../images/values-3.png"

const Services = () => {
    return (
        <>
            <section id="values" class="values">

                <div class="container" data-aos="fade-up">

                    <header class="section-header">
                        <h2>Our Services</h2>
                        <p>Thr services provide by Geeksroll</p>
                    </header>

                    <div class="row">

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="box">
                                <img src={values1} class="img-fluid" alt="" />
                                <h3>Analysis of Employee</h3>
                                <p>Get complete anaylis of your company's employee.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                            <div class="box">
                                <img src={values2} class="img-fluid" alt="" />
                                <h3>Detailed Salary</h3>
                                <p>Get complete salary information for your employee</p>
                            </div>
                        </div>

                        <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                            <div class="box">
                                <img src={values3} class="img-fluid" alt="" />
                                <h3>Complete security</h3>
                                <p>Geeksroll provide the best data security for your secret data information.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Services