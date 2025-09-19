import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react'


function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedDeals, setSelectedDeals] = useState(new Set());
  const [showAll, setShowAll] = useState(false);
  const [isPriceExpanded, setIsPriceExpanded] = useState(true);
  const [priceRange, setPriceRange] = useState([13.99, 25.99]);

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
                <h3 className='font-medium'>Price</h3>
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
        
        
    </div>
  )
}

export default Sidebar