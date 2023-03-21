import React from "react";
import "../../assets/css/News.css";
const Speaciliest = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-12 px-5">
            <div className="text-center justify-content-center">
              <h2>We Have The Best Specialist</h2>
              <p>
                We have a wide experience in experience design and strategy,
                <br /> with locally-rooted knowledge.
              </p>
            </div>
            <div className="row">

            <div className="row rows-cols-md-3 g-2 justify-content-center">
              <div className="cols">
                <div className="card rounded" style={{width:'15rem', }}>
                  <h4 className="shape " style={{height:'18rem', background: "#AED3E2"}}> </h4>
                  <div className="card-body" style={{width:'auto', height:'5rem'}} >
                  <h5 className="card-title">Dr. Awaatif Al</h5>
                  <p className="card-text">Dental Care</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card rounded" style={{width:'15rem' }}>
                <h4 className="shape " style={{height:'18rem', background: "#AED3E2"}}> </h4>
                  <div className="card-body" style={{width:'auto', height:'5rem'}}>
                  <h5 className="card-title">Dr. Sukhmeet Gorae</h5>
                  <p className="card-text">Neurological</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card" style={{width:'15rem', }}>
                <h4 className="shape " style={{height:'18rem', background: "#AED3E2"}}> </h4>
                  <div className="card-body" style={{width:'auto', height:'5rem'}}>
                  <h5 className="card-title">Dr. Filipa Gaspar</h5>
                  <p className="card-text">Cardiology</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card rounded" style={{width:'15rem', }}>
                  <h4 className="shape" style={{height:'18rem', background: "#AED3E2"}}> </h4>
                  <div className="card-body" style={{width:'auto', height:'5rem'}}>
                  <h5 className="card-title">Dr. Siri Jakobsson</h5>
                  <p className="card-text">Prediatrics</p>
                  </div>
                </div>
              </div>

            </div>

              <div className="col-lg-12 col-md-auto col-sm-12 px-5 py-3">
              </div>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-12 px-5 mt-5">
              <div>
                <div className="py-5">
                  <h2 className="py-2">What Our Customers Say</h2>
                </div>
                <div className="row justify-content-around">
                  <div className="col-md-6 col-sm-12">
                  <h2 className=" bg-primary logo1 text-light rounded-5 text-center py-2 ">
                          “
                        </h2>
                    <div className="shadow bg-light rounded">
                      <p className="set logo1">
                       
                      </p>
                      <p className="py-4 px-4">
                        I wanted to thanks everyone at this facility for the
                        quality of care and compassion they showed during my
                        stay.
                      </p>
                      <div className="d-flex px-4">
                        <img
                          style={{ width: "3vw", height: "6vh" }}
                          src={require("../../assets/images/Jacqueline Asong.png")}
                          alt=""
                        />

                        <div className="mx-2">
                          <h4>Jacqueline Asong</h4>
                          <p>Parents</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New */}
                  
                  <div className=" col-md-6 col-sm-12">
                    <p className="NewLogo1 text-center float-left logo1"> 
                    <h2 className="bg-primary text-light rounded-5  py-2 ">
                          “
                        </h2>
                    </p>
                    <div className="shadow bg-light rounded">
                      
                      <p className="py-4 px-4">
                        I wanted to thanks everyone at this facility for the
                        quality of care and compassion they showed during my
                        stay.
                      </p>
                      <div className="d-flex px-4">
                        <img
                          style={{ width: "3vw", height: "6vh" }}
                          src={require("../../assets/images/Patrícia Ribeiro.png")}
                          alt=""
                        />
                        <div className="mx-2">
                          <h4>Patrícia Ribeiro</h4>
                          <p>Parents</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-5 my-5">
              <div className="col-md-12 col-sm-12 d-block px-5 justify-content-end d-block" style={{marginBottom:'3%'}}> 
                <div className="outer subclass shadow p-3 mb-3 bg-body-tertiary ">
                  <div className="inner subclass"></div>
                </div>
                <div className="px-3 py-5 mt-3">
                  <div className="px-3 shadow py-5 p-3 mb-3 bg-body-tertiary bg-primary box-model rounded-4 ">
                    <h5 className="text-center text-light fs-3">
                      Subscribe to Newsletter
                    </h5>

                    <p className="text-center text-light boxline">
                      We have a wide experience in experience design and
                      strategy,
                    </p>

                    <div className="col-md-6 col-lg-12 col-sm-12 text-center px-5">
                    <div className="input-group mycustom px-5">
                      <input
                        type="email"
                        className="form-control rounded-4 px-4 py-3"
                        placeholder="Enter your email address"
                        required
                      />
                      <div className="input-group-prepend px-5 py-2 mx-4">
                        <input
                          type="submit"
                          vlaue="submit"
                          className="btn btn-primary btn-sm rounded-4 px-4"
                          id="inputGroupPrepend2"
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row px-5 py-5">
              <div className="col-md-6 col-lg-12 col-sm-12 px-3">
                 <div className="px-2 py-4">
                 <h5 className="navbar-brand" href="/">
                  <strong style={{ color: "#0073FF" }}>Medi</strong>
                  <strong style={{ color: "#FF9F6A" }}>Care+</strong>
                </h5>
                  <div className="setdata junstify-content-end text-end"> 
                    <span className="px-2 text-primary">Home</span>
                    <span className="px-2 text-primary">About</span>
                    <span className="px-2 text-primary">Service </span>
                    <span className="px-2 text-primary">News </span>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speaciliest;
