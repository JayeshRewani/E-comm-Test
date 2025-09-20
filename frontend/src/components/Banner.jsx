import BannerImg from '../assets/bannerImg.png'

function Banner() {
  return (
    <div className="p-6 flex bg-[#40bfff] justify-between items-end w-full overflow-hidden">
      {/* shop now */}
        <div className='m-10 p-5 text-white pt-16'>
            <h2 className="text-xl font-bold">Adidas Men Running Sneakers</h2>
            <p className="text-sm">Performance, comfort & style, right at the edge.</p>
            <button className="mt-4  text-white underline hover:text-gray-500">Shop Now </button>
        </div>
        {/* image */}
        <img src={BannerImg} alt="banner img" className='w-[40%] object-contain' />
    </div>
  );
}

export default Banner;
