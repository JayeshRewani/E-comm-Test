import React, { useState } from 'react'
import {LayoutGrid,TextAlignJustify,Star} from 'lucide-react'
import Products from '../data/products.json'

function Product() {
    const [sortBy, setSortBy] = useState('Name');
    const [showCount, setShowCount] = useState(12);
    const [viewMode, setViewMode] = useState('grid');

    const products = Products.products;

    const renderStars = (rating) =>
        Array.from({ length: 5 }, (_, i) => (
            <Star
            key={i}
            className={`w-4 h-4 m-1 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
    ) );
 
    

  return (
    <div className='min-h-screen py-3'>
        {/* Sort by */}
        <div className='flex items-center justify-between mb-6 bg-[#f6f7f8] p-4 rounded shadow-sm'>
            <div className='flex justify-center items-center gap-x-12'>

                <div className='flex items-center space-x-6'>
                    <span className='font-medium text-sm'>13 Items</span>
                </div>

                <div className='flex items-center space-x-5'>
                    <span className='text-gray-500 text-sm'>Sort By : </span>
                    <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)} 
                    className="border-none px-3 pr-8 bg-transparent text-sm focus:outline-none appearance-auto"
                    >
                        <option>Name</option>
                        <option>Price</option>
                        <option>Rating</option>
                    </select>
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-gray-600 text-sm">Show</span>
                    <select 
                    value={showCount} 
                    onChange={(e) => setShowCount(e.target.value)} 
                    className="border-none px-3 pr-8 bg-transparent text-sm focus:outline-none appearance-auto"
                    >
                        <option>12</option>
                        <option>24</option>
                        <option>48</option>
                    </select>
                </div>
            </div>

            <div>
                <div className='flex space-x-1'>
                    <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2  ${viewMode === "grid" ? 'text-[#33a0ff]' : 'text-gray-300'}`}
                    >
                        <LayoutGrid />
                    </button>
                    <button
                    onClick={() => setViewMode('list')}
                    className={`p-2  ${viewMode === "list" ? 'text-[#33a0ff]' : 'text-gray-300'}`}
                    >
                        <TextAlignJustify />
                    </button>
                </div>
            </div>

        </div>

        {/* product */}
        <div className={`mb-8 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
            {
                products.map( product => (
                    <div 
                    key={product.id} 
                    className={`bg-[#f6f7f8] rounded-sm border shadow-sm overflow-hidden relative ${viewMode === 'list' ? 'flex items-center' : ''}`}
                    >

                        {product.isHot && (
                            <span className={`absolute ${viewMode === 'list' ? 'top-2 left-2' : 'top-3 left-3'} bg-red-400 text-white px-2 py-1 text-xs z-10`}>
                                HOT
                            </span>
                        )}

                        <div className={`bg-gray-100 relative overflow-hidden `}>
                            <img src={product.image} alt={product.name} className={viewMode === 'list' ? 'w-48 h-32 flex-shrink-0 object-contain' : 'w-full h-60 object-contain'} />
                        </div>

                        <div className={`${viewMode === 'list' ? 'flex-1 p-4 flex items-center justify-between' : 'p-4'}`}>
                            <div className={viewMode === 'list' ? 'flex-1' : 'flex justify-center flex-col'}>
                                <h3 className={`font-semibold text-gray-900 ${viewMode === 'list' ? 'text-lg mb-1' : 'mb-2 flex justify-center'}`}>
                                    {product.name}
                                </h3>

                                <div className={`flex items-center ${viewMode === 'list' ? 'mb-1' : 'mb-2 justify-center'}`}>
                                    {renderStars(product.rating)}
                                </div>

                                {viewMode === 'list' && (
                                    <div className="text-sm text-gray-600 mb-2">
                                        {product.description}
                                    </div>
                                )}

                                {viewMode === 'list' && (
                                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                                        <span className="bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{product.color}</span>
                                    </div>
                                )}

                            </div>

                            <div className={`${viewMode === 'list' ? 'text-right' : 'flex items-center justify-center'}`}>
                                <div className={`${viewMode === 'list' ? 'space-y-1' : 'flex items-center space-x-2 justify-between'}`}>

                                    <span className={`font-semibold  text-[#33a0ff] ${viewMode === 'list' ? 'text-xl block' : 'text-[16px] mr-5'}`}>
                                        {product.price}
                                    </span>
                                    
                                    <div className={viewMode === 'list' ? 'space-x-2' : 'contents'}>
                                        <span className="text-sm text-gray-400 line-through mr-5">{product.originalPrice}</span>
                                        <span className="text-sm text-red-500">{product.discount}</span>
                                    </div>

                                    {
                                        viewMode === 'list' && (
                                            <div className="mt-2 space-y-1">
                                                <div className="text-xs text-gray-500">
                                                    Sold by: {product.seller.name} ⭐ {product.seller.rating}
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>

                        </div>

                    </div>
                ))
            }
        </div>

       {/* Pagination  */}
        <div className="flex items-center justify-center space-x-2 w-full bg-[#f6f7f8]">
            <button className="w-10 h-10 text-black flex items-center justify-center font-medium hover:bg-[#33a0ff]">1</button>
            <button className="w-10 h-10 text-black flex items-center justify-center font-medium hover:bg-[#33a0ff]">2</button>
            <button className="w-10 h-10 text-white flex items-center justify-center font-medium hover:bg-[#33a0ff] bg-[#33a0ff]">3</button>
            <button className="w-10 h-10 text-black flex items-center justify-center font-medium hover:bg-[#33a0ff]">4</button>
            <button className="w-10 h-10 text-black flex items-center justify-center font-medium hover:bg-[#33a0ff]">5</button>
        </div>

    </div>
  )
}

export default Product