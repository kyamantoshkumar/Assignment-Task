import React from "react";
import "../../assets/css/services.css";
const OurServices = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <div className="noclass py-5">
                <h2 className="text-center">Our Services</h2>
                <div className="row text-center py-2">
                  <p className="center">
                    We provide the most full medical services, so every person
                    could <br />
                    heave the oppurtunity to receive qualitative medical help.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-md-3 col-sm12 px-3">
              <div className="card d-block border-none shadow p-3 mb-5 bg-body-tertiary rounded cardservices">
                <img
                  style={{width:'6vw'}}
                  src={require("../../assets/images/Dental Care.png")}
                  className="card-img-top cardimg"
                  alt="..."
                />
                <p className="pragraph text-primary">
                  <strong>Dental Care</strong>
                </p>
                <div className="card-body"></div>
              </div>
              </div>
             <div className="col-md-3 col-sm-12">
             <div className="">

                <div
                  className="card border-none shadow p-3 mb-5 bg-body-tertiary rounded cardservices hovercard"
                  style={{ height:'17vw', background: "#007EF3" }}
                 >

                  <img
                   style={{width:'7vw'}}
                    src={require("../../assets/images/Pulmonary.png")}
                    className="card-img-top cardimg imag text-center justify-content-around"
                    alt="..."
                  />
                  <p className="pragraph">
                    <strong className="text-light">Pulmonary</strong>
                  </p>
                  <div>
                    <a className="text-light anchor f-right  mx-2" href="/learn">
                      LEARN MORE<strong className="mx-3">&#62;</strong>
                    </a>
                  </div>
                  <div className="card-body">
                    <p></p>
                  </div>
                </div>
              </div>
             </div>
               <div className="col-md-3 col-sm-12 px-2">
               <div className="card border-none shadow p-3 mb-5 bg-body-tertiary rounded cardservices">
                <img
                  style={{width:'7vw'}}
                  src={require("../../assets/images/Neurological.png")}
                  className="card-img-top cardimg"
                  alt="images.png"
                />

                <p className="pragraph text-primary">
                  <strong>Neurological </strong>
                </p>
                <div className="card-body"></div>
              </div>
               </div>

              <div className="col-md-3 col-sm-12 px-3">
              <div className="card border-none shadow p-3 mb-5 bg-body-tertiary rounded cardservices">
                <img
                  style={{width:'5vw'}}
                  src={require("../../assets/images/Prediatrics.png")}
                  className="card-img-top cardimg"
                  alt="images.png"
                />
                <p className="pragraph text-primary">
                  <strong>Prediatrics</strong>
                </p>
                <div className="card-body"></div>
              </div>
              </div>
            </div>

            {/* Footer Page */}

            <div className="col-sm-12 col-md-6 col-lg-12 my-5">
              <div className="row">
                <div className="col-md-6 col-sm-12 mt-5 py-5">
                  <div className=" py-5">
                    <h2 className="py-2">Clinic With Innovative</h2>
                    <p className="py-2">
                      We provide the most full medical services, so every person
                      could
                      <br/> heave the oppurtunity to receive qualitative
                      medical help.
                    </p>
                    <button className="btn btn-primary button rounded-5 px-3">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 my-5">
                  <div className="col">
                     <div className="col-md-6 col-sm-12">
                         <div className="col">
                         <div
                      className="card middle1 border-none shadow p-3 mb-5 bg-body-tertiary rounded"
                      >
                      <div class="card-body">
                        <img className="imagespng" src={require("../../assets/images/doctor-woman.png")} alt="images.opng"/>
                        <p className="card-title fw-bold py-3">Qualified Doctor</p>
                      </div>
                    </div>
                      </div>
                     </div>
                     <div className="col-md-12 col-sm-12 justify-content-end">
                         <div className="col middium">
                         <div
                      className="card middle1 border-none shadow p-3 mb-5 bg-body-tertiary rounded"
                       >
                      <div class="card-body">
                        <img className="imagespng" src={require("../../assets/images/doctor-man.png")} alt="images.opng"/>
                        <p className="card-title fw-bold py-3">Emergencey Care</p>
                      </div>
                    </div>
                    </div>
                     </div>
                     <div className="col-md-6 col-sm-12">
                        <div className="col">
                        <div
                      className="card middle1 border-none shadow p-3 mb-5 bg-body-tertiary rounded"
                       >
                      <div className="card-body">
                     <img className="imagespng" src={require("../../assets/images/ambulance.png")} alt="images.opng"/>
                     <p className="card-title fw-bold py-3 "> 24 hours Services</p>
                      </div>

                    </div>
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-12">
             <div className="row"></div>
            </div>
          </div>
        </div>
    </>
  );
};

export default OurServices;
