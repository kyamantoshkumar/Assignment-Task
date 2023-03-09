import React from 'react';
// import "../../assets/css/styles.css";

const Home = () => {
    return(

        <>
        <div className='container'>
             <div className='row'>
             <section>
              <div className="col-sm-12 col-md-6 col-lg-12">
                <div className="row">
                  <div className="col-md-6 col-sm-12 ml-3 mt-5">
                    <div className="mt-5 py-5">
                      <strong>Wecome to MediCare+ Clinic</strong>
                      <h1 className="py-2">Best Speacaliest</h1>
                      <p>
                        We are on the leading edge of cancer care. Providing the
                        full continuum of cancer treatments and supportive care
                        services in a single convenient location.
                      </p>
                      <div className="d-flex justify-content-between">
                          <div className="rounded-5">
                          <button style={{background:"#007FF4"}} className=" border border-transparent px-5 py-2 text-light rounded-5">Make a Appointment</button>
                          </div>
                           <div className="" style={{background:'#EBEEFF'}}>
                           <button className="btn bg-white text-primary rounded-5 "><strong className="px-4 py-2">Department</strong></button>
                           </div>
                       </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 mt-3">
                     <div className="justify-content-between mt-5">
                     <div
                      className="card shadow-sm p-3 mb-5 bg-body-tertiary border border-none  mb-3"
                      style={{background:'#EBEEFF', maxWidth: "40rem" }}
                      >
                      {/* <div className="card-header">Header</div> */}
                      <div className="card-body justify-content-center">
                        <h5 className="card-title " style={{ height:'20rem'}}> </h5>
                        <p className="card-text">
                        </p>
                      </div>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </section>
             </div>
        </div>
        </>
    )
}
export default Home