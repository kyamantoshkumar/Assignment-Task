import React from "react";
import "../assets/css/Produt.css";

const Product = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-12 col-md-12 col-sm-12"
          style={{ background: "#0C0C0C" }}
        >
          <div className="class">
            <h4 style={{ color: "#E5DFD9" }} className="class1 py-2">
              T A N N T R I M
            </h4>
            <div className="icon">
              <i className="text-light px-3 fa-solid fa-magnifying-glass"></i>
              <i className="text-light px-3 fa-solid fa-user"></i>
              <i className="text-light px-3 fa-regular fa-bookmark"></i>
              <i className="text-light px-3 fa-solid fa-bag-shopping"></i>
            </div>
            <div className="text-center">
              <span className="px-4 text-light">Bags</span>
              <span className="px-4 text-light">Travel</span>
              <span className="px-4 text-light">Accesories</span>
              <span className="px-4 text-light">Gifting</span>
              <span className="px-4 text-light">Jewelery</span>
            </div>
            <hr className="hrline bg-light" />
            <div className="py-4" style={{color: "#E5DFD9"}}>
              <div className="text-center d-flex">
                 <div>
                 <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/All Bags.png")}
                  alt="images"
                />
                <h6 className=""> All Bags</h6>
                 </div>
                 <div>
                 <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Vanity Pouch.png")}
                  alt="images"
                />
                <h6 className=""> Vanity Pouch</h6>
                 </div>
                 <div>
                 <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Tote Bag.png")}
                  alt="images"
                />  
                <h6 className=""> Tote Bag</h6>
                 </div>
                <div> 
                <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Duffle Bag.png")}
                  alt="images"
                />
                <h6 className=""> Duffle Bag</h6>
                </div>
               <div>
               <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Laptop Sleeve.png")}
                  alt="images"
                />
                <h6 className=""> Laptop Sleeve</h6>
               </div>
               <div> 
               <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Messenger Bags.png")}
                  alt="images"
                />
                <h6 className=""> Messenger Bags</h6>
               </div>
                <div> 
                <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Slings Bgs.png")}
                  alt="images"
                />
                <h6 className=""> Slings Bgs</h6>
                </div>
                <div>
                <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Handbags.png")}
                  alt="images"
                />
                <h6 className=""> Handbags</h6>
                </div>
                <div>
                <img
                  className="text-light iconimg px-4"
                  src={require("../assets/images/Bucket Bag.png")}
                  alt="images"
                />
                 <h6 className="" >Bucket Bag</h6>
                </div>
               
              </div>
            </div>
            <div className="px-4"> 
            <div className="text-center row px-4">
             <div className="card " style={{ width: "16rem", background:'#0C0C0C' }}>
             <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Brown Metro.png")} className="card-img-top" alt="" />
                <div className="card-body">
                  <div className="card-text1">
                  <h6>The Brown Metro Movers</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ width: "16rem", background:'#0C0C0C' }}>
               <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Black Metro.png")} className="card-img-top" alt="..." />
                 <div className="card-body">
                  <div className="card-text1">
                  <h6>The Metro Movers Black</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ width: "16rem", background:'#0C0C0C' }}>
              <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Metro Mover.png")} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-text1">
                  <h6>The Metro Movers Black</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ width: "16rem", background:'#0C0C0C' }}>
              <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Gray Metro.png")} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-text1">
                  <h6>The Metro Movers Black</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>

              <div className="card py-2" style={{ width: "16rem", background:'#0C0C0C' }}>
              <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Brown Metro.png")} className="card-img-top" alt="..." />
              
                <div className="card-body1">
                  <div className="card-text1">
                  <h6>The Brown Metro Movers</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>

              <div className="card py-2" style={{ width: "16rem", background:'#0C0C0C' }}>
              <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Black Metro.png")} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-text1">
                  <h6>The Metro Movers Black</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>

              <div className="card py-2" style={{ width: "16rem", background:'#0C0C0C' }}>
              <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Metro Mover.png")} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-text1">
                  <h6>The Metro Movers Black</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>

              <div className="card cardrnd py-2" style={{ width: "16rem", background:'#0C0C0C' }}>
              <p className="icontop text-end"><i className="px-3 fa-regular fa-bookmark"></i></p>
                <img src={require("../assets/images/Gray Metro.png")} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-text1">
                  <h6>The Metro Movers Black</h6>
                  <div className="px-2">
                  <p className="curricon "><i className="fa-solid fa-indian-rupee-sign currency"></i><strong className="px-1">4899</strong><del className="dele"> 8999</del></p> <p className="font px-1">(50% off)</p>
                  <img className="card-icon" src={require("../assets/images/Carry Bag.png")} alt="" />
                   </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
