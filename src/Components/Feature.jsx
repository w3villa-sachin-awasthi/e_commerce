import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { selectProduct } from "../Config/redux/slices.js/product";
import { addProduct } from "../Config/redux/slices.js/addTocartReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAllProduct } from "../Config/redux/slices.js/allProduct";
import Loader from "../Components2/Loader";
import { addLoading } from "../Config/redux/slices.js/Loading";
import { setting1 as settings } from "../Config/data";
function Feature() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleModal(val) {
    dispatch(selectProduct(val));

    navigate(`/home/product/${val.id}`);
  }

  async function handleSelectedClick(val) {
    try {
      dispatch(addLoading(true));
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${val}?limit=10`
      );
      dispatch(addAllProduct(response.data));
      setData(response.data);

      dispatch(addLoading(false));
    } catch (error) {
      setLoading(false);
      alert("error occurs uring fetching products");
    }
  }
  const product = useSelector((state) => state.allProduct.value);
  const loader = useSelector((state) => state.loading.value);
  useEffect(() => {
    setData(product);
  }, [product]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);

  return (
    <div className="flex flex-col  sm:items-center max-w-[1600px] mx-auto my-10 px-3 md:px-5 lg:px-7 2xl:px-10 ">
      <div className="text-[23px] sm:text-[35px] xl:text-[43px] font-semibold">
        Why buy from us?
      </div>
      <div className="h-[2px] w-[60px] sm:w-[120px] bg-orange-600 my-2"></div>
      <div className="w-[90%] sm:w-[74%] text-start text-[14px] sm:text-normal sm:text-center  text-slate-500 mb-6">
        Journal has been the best selling and most loved Opencart theme since
        its first launch in 2013. Tried and tested by over 20K people, Journal
        is the best Opencart theme framework on the market today.{" "}
        <span className="text-blue-800 underline cursor-pointer  hover:text-blue-500">
          Learn more
        </span>
      </div>

      <div className="flex h-[33px] sm:h-[40px] bg-slate-200 my-5  ">
        <div
          onClick={() => handleSelectedClick(`electronics`)}
          className="h-full min-w-[180px] w-1/2 sm:w-auto bg-blue-700  text-white px-4 flex justify-center items-center cursor-pointer hover:text-blue-700 hover:font-bold hover:bg-white  font-semibold text-[11px] md:text-[15px]"
        >
          electronics
        </div>
        <div
          onClick={() => handleSelectedClick(`jewelery`)}
          className="h-full w-1/2 flex justify-center items-center px-3 border-[0.5px] hover:font-bold border-slate-300 cursor-pointer text-[11px] md:text-[15px]"
        >
          jewelery
        </div>
        <div
          onClick={() => handleSelectedClick(`men's clothing`)}
          className="h-full md:w-[200px] hidden sm:flex justify-center items-center px-3 border-[0.5px] hover:font-bold border-slate-300 cursor-pointer text-[11px] md:text-[15px]"
        >
          men's clothing
        </div>
        <div
          onClick={() => handleSelectedClick(`women's clothing`)}
          className="h-full hidden md:w-[230px] sm:flex justify-center items-center px-3 border-[0.5px] hover:font-bold border-slate-300 cursor-pointer text-[11px] md:text-[15px] "
        >
          women's clothing
        </div>
      </div>

      {loading && <Loader />}
      <div className="w-[100%] text-center ">
        <Slider {...settings}>
          {data.length > 0 &&
            data.map((val, index) => (
              <div
                key={index}
                className="bg-cover bg-center h-[200px]  sm:h-[250px] max-w-[90%] sm:max-w-[90%]  min-w-[90%] sm:min-w-[48%]  flex items-center rounded-xl overflow-hidden justify-center text-white text-xl font-bold  relative  my-6 hover:shadow-[0px_0px_6px_1px_grey] "
                onClick={(e) => handleModal(val)}
              >
                <div
                  className="overflow-hidden h-[100%] w-full rounded-xl  mx-auto "
                  style={{ objectPosition: "80% 100%" }}
                >
                  <img
                    src={val.image}
                    alt=""
                    className="w-[100%] object-contain object-center h-[100%]"
                  />
                </div>

                <div className="w-[100%] absolute  bottom-4 text-center">
                  <span className="bg-slate-300 text-[14px] sm:text-[1em] text-black bg-opacity-80 px-4 py-2 rounded hover:text-white hover:bg-slate-600">
                    ${val.price}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <div className="join mt-8 mx-auto">
        <button
          onClick={() => handleSelectedClick(`electronics`)}
          className="join-item btn"
        >
          1
        </button>
        <button
          onClick={() => handleSelectedClick(`jewelery`)}
          className="join-item btn btn-active"
        >
          2
        </button>
        <button
          onClick={() => handleSelectedClick(`men's clothing`)}
          className="join-item btn"
        >
          3
        </button>
        <button
          onClick={() => handleSelectedClick(`women's clothing`)}
          className="join-item btn"
        >
          4
        </button>
      </div>
    </div>
  );
}

export default Feature;
