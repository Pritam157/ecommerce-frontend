"use client";

import { useEffect, useState } from "react";
import {  Radio, RadioGroup  } from "@headlessui/react";
import { product } from "./ProductdetailsData";
import "./ProductdetailsStyle.css";
import { Rating ,Button, Grid, Box, LinearProgress } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { men_kurta } from "../../../Data/Men/men_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemtoCart } from "../../../State/Cart/Action";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Prodcutdetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate=useNavigate();
  const params=useParams();
  const dispatch=useDispatch()
  const {products} =useSelector(store=>store)
  console.log("in proutsdetailspage",products);

  const handleAddToCart=()=>{
         const data={productId:params.productId,size:selectedSize.name}
         dispatch(addItemtoCart(data))
         navigate('/cart');
  }

  useEffect(()=>{
    const data={productId:params.productId}
      dispatch(findProductsById(data))
  },[params.productId],handleAddToCart)

  return (
    <div className="bg-white border-blue-600">
      <div className="pt-6 border-blue-800">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className=" mt-6 mx-24 lg:grid  lg:grid-cols-2 lg:gap-x-8 lg:px-8 space-x-16">
          {/* Image gallery */}
          <div className="flex flex-col ">
            <div className=" w-[40rem] h-[40rem]">
              <div className=" w-full h-full">
                <img
                  alt={product.images[0].alt}
                  src={products.products?.image_url}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="mt-10 flex space-x-7 w-[40rem] h-[10rem] ">
              {product.images.map((value) => {
                return (
                  <div className="w-full h-[9rem]">
                    <img
                      alt={value.alt}
                      src={value.src}
                      className="w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product info */}
          <div className="">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold  text-gray-900 ">
                {products.products?.brand}
              </h1>
              <h1 className="text-2xl font-bold  text-gray-900  opacity-60">
              {products.products?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">&#8377;{products.products?.discountedPrice}</p>
                <p className="opacity-50 line-through">&#8377;{products.products?.price}</p>
                <p className="text-green-600 font-semibold">{products.products?.discountPercent}% off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={4.5} readOnly />
                  <p className="opacity-50 text-sm">56540 Reatings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">37700 Reviews</p>
                </div>
              </div>

              <form className="mt-10">
                  
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                     
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                          )} 
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
            
              <div className="mt-5">
                <Button onClick={handleAddToCart} variant='contained' sx={{ mt:'5',px:'2rem',py:'1rem', bgcolor:'#9155fd'}}>
                  Add to Cart
                </Button>
              </div>
               
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* reatings & reviews */}
         <section className="ml-32">
             <h1 className="font-semibold text-lg">Recent Review & Rating</h1>
        
         
         <div className="border p-5">
             <Grid container spacing={50}>
                     <Grid item={7} >
                      <div className="space-y-5">
                        {[1,1,1,1].map((value)=>{
                          return <ProductReviewCard />
                        })}  
                      </div>

                     </Grid>
                      
                      <Grid item={7} xs={5} >
                         <h1 className="text-xl font-semibold pb-1">Product Rreatings</h1>
                        <div className="flex items-center space-x-3">
                         <Rating name="read-only" value={4.6} precision={.5} readOnly/>
                         <p className="opacity-60">54890 Reatings</p> 

                        </div>

                        <Box className="mt-5 space-y-3">
                           <Grid container justifyContent={'center'} alignItems={'center'} gap={2}>
                             <Grid item xs={2}>
                                <p>Excellent</p>
                             </Grid>
                             <Grid item xs={7}>
                               <LinearProgress  sx={{bgcolor:'#d0d0d0',borderRadius:"4",height:"7"}} variant="determinate" value={40} color="success"/>
                             </Grid>
                           </Grid>


                           <Grid container justifyContent={'center'} alignItems={'center'} gap={2}>
                             <Grid item xs={2}>
                                <p>Very Good</p>
                             </Grid>
                             <Grid item xs={7}>
                               <LinearProgress  sx={{bgcolor:'#d0d0d0',borderRadius:"4",height:"7"}} variant="determinate" value={40} color="success"/>
                             </Grid>
                           </Grid>


                           <Grid container justifyContent={'center'} alignItems={'center'} gap={2}>
                             <Grid item xs={2}>
                                <p>Good</p>
                             </Grid>
                             <Grid item xs={7}>
                               <LinearProgress  sx={{bgcolor:'#d0d0d0',borderRadius:"4",height:"7",color:"yellow"}} variant="determinate" value={40} color="primary"/>
                             </Grid>
                           </Grid>


                           <Grid container justifyContent={'center'} alignItems={'center'} gap={2}>
                             <Grid item xs={2}>
                                <p>Avarage</p>
                             </Grid>
                             <Grid item xs={7}>
                               <LinearProgress  sx={{bgcolor:'#d0d0d0',borderRadius:"4",height:"7"}} variant="determinate" value={40} color="warning"/>
                             </Grid>
                           </Grid>


                           <Grid container justifyContent={'center'} alignItems={'center'} gap={2}>
                             <Grid item xs={2}>
                                <p>poor</p>
                             </Grid>
                             <Grid item xs={7}>
                               <LinearProgress  sx={{bgcolor:'#d0d0d0',borderRadius:"4",height:"7"}} variant="determinate" value={40} color="error"/>
                             </Grid>
                           </Grid>
                        </Box>
                      </Grid>
             </Grid>
         </div>
        </section>

          {/* similar products */}
         <section className="ml-32">
                
                <h1 className="py-5 text-xl font-bold">Similar Products</h1>

                <div className="flex flex-wrap space-y-5">
                  {men_kurta.map((value)=>{
                     return <HomeSectionCard info={value}/>
                  })}
                </div>
         </section>

         
      </div>
    </div>
  );
}
