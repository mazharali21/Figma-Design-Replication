import React from 'react'

const StatsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-[50px] font-bold">$2B+</h3>
            <p className="text-gray-600">trading volume</p>
          </div>
          <div>
            <h3 className="text-[50px] font-bold">900,000+</h3>
            <p className="text-gray-600">orders executed</p>
          </div>
          <div>
            <h3 className="text-[50px] font-bold">5M+</h3>
            <p className="text-gray-600">backtests run</p>
          </div>
        </div>

        <hr />

        {/* Logos */}
            <p className=' font-open-sans text-gray-600 my-8 text-[18px] '>As seen on</p>
        <div className="flex flex-wrap justify-center items-center space-x-20">
          <img
            src="https://www.composer.trade/_next/static/media/seen-wsj.79404bf4.svg"
            alt="The Wall Street Journal"
            className="w-32"
          />
          <img
            src="https://www.composer.trade/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fseen-moneystuff.91772ec7.png&w=640&q=75"
            alt="Bloomberg Money Stuff"
            className="w-32"
          />
          <img
            src="https://www.composer.trade/_next/static/media/seen-benzinga.37907997.svg"
            alt="Benzinga"
            className="w-32"
          />
          <img
            src="https://www.composer.trade/_next/static/media/seen-cnet.58ff0e42.svg"
            alt="CNET"
            className="w-32"
          />
          <img
            src="https://www.composer.trade/_next/static/media/seen-ent.dc79da88.svg"
            alt="Entrepreneur"
            className="w-32"
          />
        </div>
      </div>
    </section>  
    
  )
}

export default StatsSection
