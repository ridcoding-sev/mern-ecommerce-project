import React, { useState } from "react";
import { asserts } from "../assets/assets";
import axios from "axios";
import { backendUri } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {

  // State hooks
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", String(bestseller));
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUri + "/api/product/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {

        toast.success(response.data.message);

        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]);
        setBestseller(false);
        setCategory("Men");
        setSubCategory("Topwear");

      } else {

        toast.error(response.data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error(error.message);

    }

  };


  // Image upload component styles
  const uploadBox =
    "group relative flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-white/80 p-3 transition-all duration-300 hover:border-violet-500 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-100 sm:max-w-36";

  // Input styles
  const inputStyle =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100";

  // Label styles
  const labelStyle =
    "mb-2.5 block text-sm font-semibold text-gray-700";


  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-100 via-slate-50 to-fuchsia-100 p-3 sm:p-5 md:p-8 lg:p-10">

      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"></div>

      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl"></div>

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"></div>


      {/* Main Content */}

      <div className="relative mx-auto max-w-6xl">


        {/* Page Heading */}

        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-200">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />

                </svg>

              </div>

              <div>

                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Add New Product
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  Create and publish your next product.
                </p>

              </div>

            </div>

          </div>


          {/* Admin Badge */}

          <div className="flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">

            <span className="h-2 w-2 rounded-full bg-green-500"></span>

            <span className="text-xs font-semibold text-gray-700">
              Product Dashboard
            </span>

          </div>

        </div>


        {/* Form Card */}

        <form
          onSubmit={onSubmitHandler}
          className="overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-2xl shadow-violet-200/40 backdrop-blur-xl"
        >


          {/* Card Header */}

          <div className="relative overflow-hidden bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 px-5 py-6 sm:px-8 sm:py-8">

            <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full border-[25px] border-white/10"></div>

            <div className="pointer-events-none absolute -bottom-16 right-32 h-36 w-36 rounded-full bg-white/5"></div>

            <div className="relative">

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
                Product Creation
              </p>

              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Let's add something amazing!
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-violet-100">
                Upload your product images, add the details and configure
                the available sizes before publishing.
              </p>

            </div>

          </div>


          <div className="space-y-9 p-5 sm:p-7 md:p-9 lg:p-10">


            {/* Section 1: Upload Images */}

            <section>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 7.5 12 3m0 0L7.5 7.5M12 3v13.5"
                    />

                  </svg>

                </div>

                <div>

                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    Product Images
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Upload up to 4 images to showcase your product.
                  </p>

                </div>

              </div>


              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">


                {/* Image 1 */}

                <div>

                  <label
                    htmlFor="image1"
                    className={uploadBox}
                  >

                    <img
                      className={`h-full w-full object-contain transition duration-300 group-hover:scale-105 ${
                        !image1 ? "p-5" : "rounded-xl"
                      }`}
                      src={
                        !image1
                          ? asserts.uploadImage
                          : URL.createObjectURL(image1)
                      }
                      alt="Upload product image 1"
                    />

                    {!image1 && (

                      <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-semibold text-gray-400">
                        Image 01
                      </span>

                    )}

                    {image1 && (

                      <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-[10px] font-bold text-white shadow">
                        ✓
                      </span>

                    )}

                    <input
                      onChange={(e) => setImage1(e.target.files[0])}
                      type="file"
                      id="image1"
                      accept="image/*"
                      hidden
                    />

                  </label>

                  <p className="mt-2 text-center text-xs font-semibold text-gray-500">
                    Main Image
                  </p>

                </div>


                {/* Image 2 */}

                <div>

                  <label
                    htmlFor="image2"
                    className={uploadBox}
                  >

                    <img
                      className={`h-full w-full object-contain transition duration-300 group-hover:scale-105 ${
                        !image2 ? "p-5" : "rounded-xl"
                      }`}
                      src={
                        !image2
                          ? asserts.uploadImage
                          : URL.createObjectURL(image2)
                      }
                      alt="Upload product image 2"
                    />

                    {!image2 && (

                      <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-semibold text-gray-400">
                        Image 02
                      </span>

                    )}

                    {image2 && (

                      <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-[10px] font-bold text-white shadow">
                        ✓
                      </span>

                    )}

                    <input
                      onChange={(e) => setImage2(e.target.files[0])}
                      type="file"
                      id="image2"
                      accept="image/*"
                      hidden
                    />

                  </label>

                  <p className="mt-2 text-center text-xs font-semibold text-gray-500">
                    Image 02
                  </p>

                </div>


                {/* Image 3 */}

                <div>

                  <label
                    htmlFor="image3"
                    className={uploadBox}
                  >

                    <img
                      className={`h-full w-full object-contain transition duration-300 group-hover:scale-105 ${
                        !image3 ? "p-5" : "rounded-xl"
                      }`}
                      src={
                        !image3
                          ? asserts.uploadImage
                          : URL.createObjectURL(image3)
                      }
                      alt="Upload product image 3"
                    />

                    {!image3 && (

                      <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-semibold text-gray-400">
                        Image 03
                      </span>

                    )}

                    {image3 && (

                      <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-[10px] font-bold text-white shadow">
                        ✓
                      </span>

                    )}

                    <input
                      onChange={(e) => setImage3(e.target.files[0])}
                      type="file"
                      id="image3"
                      accept="image/*"
                      hidden
                    />

                  </label>

                  <p className="mt-2 text-center text-xs font-semibold text-gray-500">
                    Image 03
                  </p>

                </div>


                {/* Image 4 */}

                <div>

                  <label
                    htmlFor="image4"
                    className={uploadBox}
                  >

                    <img
                      className={`h-full w-full object-contain transition duration-300 group-hover:scale-105 ${
                        !image4 ? "p-5" : "rounded-xl"
                      }`}
                      src={
                        !image4
                          ? asserts.uploadImage
                          : URL.createObjectURL(image4)
                      }
                      alt="Upload product image 4"
                    />

                    {!image4 && (

                      <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-semibold text-gray-400">
                        Image 04
                      </span>

                    )}

                    {image4 && (

                      <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-[10px] font-bold text-white shadow">
                        ✓
                      </span>

                    )}

                    <input
                      onChange={(e) => setImage4(e.target.files[0])}
                      type="file"
                      id="image4"
                      accept="image/*"
                      hidden
                    />

                  </label>

                  <p className="mt-2 text-center text-xs font-semibold text-gray-500">
                    Image 04
                  </p>

                </div>

              </div>

            </section>


            {/* Divider */}

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


            {/* Section 2: Basic Information */}

            <section>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h4.5M5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3Z"
                    />

                  </svg>

                </div>

                <div>

                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    Basic Information
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Provide a name and description for your product.
                  </p>

                </div>

              </div>


              {/* Product Name */}

              <div className="mb-5">

                <label
                  htmlFor="productName"
                  className={labelStyle}
                >

                  Product Name

                  <span className="ml-1 text-red-500">*</span>

                </label>

                <input
                  id="productName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputStyle}
                  type="text"
                  placeholder="e.g. Premium Cotton T-Shirt"
                  required
                />

              </div>


              {/* Description */}

              <div>

                <label
                  htmlFor="productDescription"
                  className={labelStyle}
                >

                  Product Description

                  <span className="ml-1 text-red-500">*</span>

                </label>

                <textarea
                  id="productDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`${inputStyle} min-h-36 resize-y leading-6 sm:min-h-40`}
                  placeholder="Describe the product, material, features and other important details..."
                  required
                />

                <p className="mt-2 text-right text-xs text-gray-400">
                  Write a clear and attractive product description.
                </p>

              </div>

            </section>


            {/* Divider */}

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


            {/* Section 3: Product Configuration */}

            <section>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16M8 4v4m8 2v4m-5 2v4"
                    />

                  </svg>

                </div>

                <div>

                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    Product Configuration
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Set your category, pricing and available sizes.
                  </p>

                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">


                {/* Category */}

                <div>

                  <label
                    htmlFor="category"
                    className={labelStyle}
                  >

                    Product Category

                  </label>

                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`${inputStyle} cursor-pointer`}
                  >

                    <option value="Men">Men</option>

                    <option value="Women">Women</option>

                    <option value="Kids">Kids</option>

                  </select>

                </div>


                {/* Subcategory */}

                <div>

                  <label
                    htmlFor="subCategory"
                    className={labelStyle}
                  >

                    Sub Category

                  </label>

                  <select
                    id="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className={`${inputStyle} cursor-pointer`}
                  >

                    <option value="Topwear">Topwear</option>

                    <option value="Bottomwear">Bottomwear</option>

                    <option value="Winterwear">Winterwear</option>

                  </select>

                </div>


                {/* Price */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="price"
                    className={labelStyle}
                  >

                    Product Price

                    <span className="ml-1 text-red-500">*</span>

                  </label>

                  <div className="relative">

                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-5 w-5 text-gray-400"
                      >

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v18m4-14H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
                        />

                      </svg>

                    </div>

                    <input
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className={`${inputStyle} pl-11`}
                      type="number"
                      min="0"
                      step="any"
                      placeholder="Enter product price"
                      required
                    />

                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Enter the selling price of your product.
                  </p>

                </div>

              </div>

            </section>


            {/* Divider */}

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


            {/* Section 4: Size Selection */}

            <section>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-700">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4 7.5 8 4.5m0 0 8-4.5M12 12v9"
                    />

                  </svg>

                </div>

                <div>

                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    Available Sizes
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Select all sizes available for this product.
                  </p>

                </div>

              </div>


              <div className="flex flex-wrap gap-3">

                {["S", "M", "L", "XL", "XXL"].map((size) => (

                  <button
                    key={size}
                    type="button"
                    onClick={() =>
                      setSizes((prev) =>
                        prev.includes(size)
                          ? prev.filter((item) => item !== size)
                          : [...prev, size]
                      )
                    }
                    className={`flex h-12 min-w-14 items-center justify-center rounded-xl border px-4 text-sm font-bold transition-all duration-200 ${
                      sizes.includes(size)
                        ? "border-violet-600 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-200"
                        : "border-gray-200 bg-white text-gray-600 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
                    }`}
                  >

                    {size}

                  </button>

                ))}

              </div>


              <div className="mt-4 flex items-center gap-2">

                <span className="text-xs text-gray-500">
                  Selected sizes:
                </span>

                <span className="text-xs font-bold text-violet-700">
                  {sizes.length > 0 ? sizes.join(", ") : "None selected"}
                </span>

              </div>

            </section>


            {/* Divider */}

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


            {/* Section 5: Bestseller */}

            <section>

              <label
                htmlFor="bestseller"
                className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                  bestseller
                    ? "border-amber-300 bg-amber-50/80 shadow-sm"
                    : "border-gray-200 bg-gray-50/70 hover:border-amber-200 hover:bg-amber-50/40"
                }`}
              >

                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all ${
                  bestseller
                    ? "bg-amber-400 text-white shadow-md shadow-amber-200"
                    : "bg-white text-amber-500"
                }`}>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={bestseller ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6.01L12 16.77l-5.4 2.84 1.03-6.01-4.36-4.25 6.03-.88L12 3Z"
                    />

                  </svg>

                </div>


                <div className="min-w-0 flex-1">

                  <p className="text-sm font-bold text-gray-900">
                    Add to Bestseller
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Highlight this product as a bestseller in your store.
                  </p>

                </div>


                <input
                  checked={bestseller}
                  onChange={() => setBestseller((prev) => !prev)}
                  type="checkbox"
                  id="bestseller"
                  className="h-5 w-5 shrink-0 cursor-pointer accent-violet-600"
                />

              </label>

            </section>


            {/* Submit Section */}

            <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4 sm:p-5">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-sm font-bold text-gray-800">
                    Ready to publish?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Review your information before adding the product.
                  </p>

                </div>


                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-200 active:translate-y-0 sm:w-auto"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />

                  </svg>

                  ADD PRODUCT

                </button>

              </div>

            </div>


          </div>

        </form>


        {/* Footer */}

        <div className="mt-6 flex flex-col items-center justify-center gap-2 pb-4 text-center sm:flex-row">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-4 w-4 text-violet-500"
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c0 2.21-1.79 4-4 4S4 13.21 4 11V7a4 4 0 0 1 8 0v4Zm0 0c0 2.21 1.79 4 4 4s4-1.79 4-4V7a4 4 0 0 0-8 0"
            />

          </svg>

          <p className="text-xs text-gray-500">
            Manage your products with confidence.
          </p>

        </div>


      </div>

    </div>

  );

};

export default Add;