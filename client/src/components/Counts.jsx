import React from 'react'

const Counts = () => {
  return (
    <>
       <section id="counts" class="counts">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-emoji-smile"></i>
              <div>
                <span class="purecounter">100</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-journal-richtext" style={{color: "#ee6c20"}}></i>
              <div>
                <span  class="purecounter">54</span>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-headset" style={{color: "#15be56"}}></i>
              <div>
                <span  class="purecounter">89</span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="bi bi-people" style={{color: "#bb0852"}}></i>
              <div>
                <span  class="purecounter">63</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Counts