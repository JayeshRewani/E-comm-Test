import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react'


function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpandedBrand, setIsExpandedBrand] = useState(true);
  const [selectedDeals, setSelectedDeals] = useState(new Set());
  const [showAll, setShowAll] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [isPriceExpanded, setIsPriceExpanded] = useState(true);
  const [priceRange, setPriceRange] = useState([13.99, 25.99]);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedBrands, setSelectedBrands] = useState(new Set());

  const deals = [
    { name: 'Nike', count: 2 },
    { name: 'Airmax', count: 48 },
    { name: 'Nike', count: 14 },
    { name: 'Adidas', count: 15 },
    { name: 'Vans', count: 23 },
    { name: 'All Stars', count: 1 },
    { name: 'Adidas', count: 95 },
  ];

  const displayedDeals = showAll ? deals : deals.slice(0,6);
  const hasMoreDeals = deals.length > 6


  const toggleDeals = (dealKey) => {
    const newSelected = new Set(selectedDeals)
    if(newSelected.has(dealKey)){
        newSelected.delete(dealKey)
    }else {
        newSelected.add(dealKey)
    }
    setSelectedDeals(newSelected)
  }

  const handlePriceChange = (index,value) => {
        const newRange = [...priceRange];
        const numValue = parseFloat(value);

        if(index === 0){
            newRange[0] = Math.min(numValue,priceRange[1])
        } else {
            newRange[1] = Math.max(numValue,priceRange[0])
        }

        setPriceRange(newRange)
  }

  const colors = [
    { name: 'blue', class: 'bg-blue-500', value: '#3B82F6' },
    { name: 'red', class: 'bg-red-500', value: '#EF4444' },
    { name: 'black', class: 'bg-black', value: '#000000' },
    { name: 'yellow', class: 'bg-yellow-400', value: '#FACC15' },
    { name: 'pink', class: 'bg-pink-500', value: '#EC4899' },
    { name: 'skieny', class: 'bg-[#efdfdf]', value: '#efdfdf' }
  ];

  const brands = [
    { name: 'Nike', count: 99 },
    { name: 'Nike', count: 99 },
    { name: 'Adidas', count: 99 },
    { name: 'Adidas', count: 99 },
    { name: 'Siemens', count: 99 },
  ];

    const displayedBrands = showAllBrands ? brands : brands.slice(0,6);
    const hasMoreBrands = brands.length > 6

  const toggleBrands = (brandKey) => {
    const newSelected = new Set(selectedBrands)
    if(newSelected.has(brandKey)){
        newSelected.delete(brandKey)
    }else {
        newSelected.add(brandKey)
    }
    setSelectedBrands(newSelected)
  }


  return (
    <div className='space-y-6'>
        {/* Hot Deals */}
        <div className='w-80 bg-[#f6f7f8] border rounded-md shadow-sm p-4'>
            <div className='flex justify-between px-2 py-4'>
                <h3 className='font-medium'>Hot Deals</h3>
                <button onClick={() => setIsExpanded(!isExpanded)}>
                   <ChevronUp className={`transition-transform ${isExpanded ? 'rotate-180': ''}`} size={20}/>
                </button>
            </div>
            {
                isExpanded && (
                   <div className='py-2'>
                        {
                            displayedDeals.map( (deal,index) => {
                                const dealKey = `${deal.name}-${index}`;
                                const isSelected = selectedDeals.has(dealKey);

                                return (
                                    <div key={dealKey} onClick={() => toggleDeals(dealKey)} className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer transition-colors hover:bg-gray-50 ${isSelected ? 'text-[#33a0ff]' : ''}`}>
                                        <span className={isSelected ? 'font-medium' : ''}>{deal.name}</span>
                                        <span className={isSelected ? 'text-[#33a0ff] font-medium': ''}>{deal.count}</span>
                                    </div>
                                )
                            })
                        }
                        {
                            hasMoreDeals && (
                                <div className='px-2 py-3 flex justify-center'>
                                    <button className='text-sm hover:text-[#33a0ff] hover:underline underline-offset-2 font-medium transition-colors' 
                                    onClick={() => setShowAll(!showAll)}
                                    >
                                        {showAll ? 'Show Less' : `Show More (${deals.length - 6})`}
                                    </button>
                                </div>
                            )
                        }   
                   </div>
                )
            }
            

        </div>
        
        {/* Price filter */}
        <div className='w-80 bg-[#f6f7f8] border rounded-md shadow-sm p-4'>
            <div className='flex justify-between px-2 py-4'>
                <h3 className='font-medium'>PRICE</h3>
                <button onClick={() => setIsPriceExpanded(!isPriceExpanded)}>
                   <ChevronUp className={`transition-transform ${isPriceExpanded ? 'rotate-180': ''}`} size={20}/>
                </button>
            </div>

            {
                isPriceExpanded && (
                    <div className='p-2'>
                        <div className='flex items-center justify-between text-sm'>
                            <span>Range : </span>
                            <span>{priceRange[0]} - {priceRange[1]}</span>
                        </div>

                        <div className='relative pt-4'>
                            <div className='relative h-1 bg-gray-200 rounded-full'>
                                <div
                                className='absolute h-1 bg-[#33a0ff] rounded-full pointer-events-none z-10'
                                style={{
                                    left: `${priceRange[0]} %`,
                                    right: `${(100 - (priceRange[1] / 100) ) * 100} %`
                                }}
                                />
                                
                                <input 
                                type="range"
                                min="0"
                                max="26"
                                step="0.01"
                                value={priceRange[0]}
                                className='absolute w-full h-1 bg-transparent appearance-none cursor-pointer range-slider z-20'
                                // style={{zIndex: priceRange[0] > 100 - priceRange[1] ? 2 : 1}}
                                onChange={(e) => handlePriceChange(0,e.target.value)}
                                 />

                                <input 
                                type="range"
                                min="0"
                                max="26"
                                step="0.01"
                                value={priceRange[1]}
                                className='absolute w-full h-1 bg-transparent appearance-none cursor-pointer range-slider z-30'
                                // style={{zIndex: priceRange[1] <= 100 - priceRange[0] ? 2 : 1}}
                                onChange={(e) => handlePriceChange(1,e.target.value)}
                                 />


                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        
        {/* Color filter */}
        <div className='w-80 bg-[#f6f7f8] border rounded-md shadow-sm px-4 py-1'>
            <div className='px-2 py-4'>
                <h3 className="font-medium mb-4">COLOR</h3>
                <div className="flex items-center space-x-3">
                    {colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                        color.class
                        } ${
                        selectedColor === color.name
                            ? 'border-gray-400 ring-2 ring-gray-300 ring-offset-2'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        aria-label={`Select ${color.name} color`}
                    />
                    ))}
                </div>
            </div>
        </div>

        {/* brands filter */}
        <div className='w-80 bg-[#f6f7f8] border rounded-md shadow-sm p-4'>
            <div className='flex justify-between px-2 py-4'>
                <h3 className='font-medium'>Brands</h3>
                <button onClick={() => setIsExpandedBrand(!isExpandedBrand)}>
                   <ChevronUp className={`transition-transform ${isExpandedBrand ? 'rotate-180': ''}`} size={20}/>
                </button>
            </div>
            {
                isExpandedBrand && (
                   <div className='py-2'>
                        {
                            displayedBrands.map( (brand,index) => {
                                const brandKey = `${brand.name}-${index}`;
                                const isSelected = selectedBrands.has(brandKey);

                                return (
                                    <div key={brandKey} onClick={() => toggleBrands(brandKey)} className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer transition-colors hover:bg-gray-50 ${isSelected ? 'text-[#33a0ff]' : ''}`}>
                                        <span className={isSelected ? 'font-medium' : ''}>{brand.name}</span>
                                        <span className={isSelected ? 'text-[#33a0ff] font-medium': ''}>{brand.count}</span>
                                    </div>
                                )
                            })
                        }
                        {
                            hasMoreBrands && (
                                <div className='px-2 py-3 flex justify-center'>
                                    <button className='text-sm hover:text-[#33a0ff] hover:underline underline-offset-2 font-medium transition-colors' 
                                    onClick={() => setShowAllBrands(!showAllBrands)}
                                    >
                                        {showAllBrands ? 'Show Less' : `Show More (${brands.length - 6})`}
                                    </button>
                                </div>
                            )
                        }   
                   </div>
                )
            }
            

        </div>
        
        {/* More Option's */}
        <div className='w-80 bg-[#f6f7f8] border rounded-md shadow-sm p-4'>
            <div className='px-4'>
                <h2 className='font-medium flex justify-center items-center text-xl'>MORE</h2>
            </div>
        </div>

    </div>
  )
}

export default Sidebar