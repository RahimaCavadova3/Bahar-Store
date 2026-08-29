import React from 'react'

function Campaigns() {
  const campaignsData = [
    {id: 1, img: "https://admin475.baharstore.az/storage//uploads/images/campaigns/yeni-ile-ozel-endirim-674d93175fec6.jpeg", title: "Yeni ilə özəl endirim!"},
    {id: 2, img: "https://admin475.baharstore.az/storage//uploads/images/campaigns/8-marta-ozel-10-endirim-674d8ed19c997.jpeg", title: "8 Marta özəl 10% endirim."},
    {id: 3, img: "https://admin475.baharstore.az/storage//uploads/images/campaigns/black-friday-674d87588d988.jpeg", title: "Black Friday"},
    {id: 4, img: "https://admin475.baharstore.az/storage//uploads/images/campaigns/6-il-sizinle-674d8b94a6d25.jpeg", title: "6 il sizinlə"},
    {id: 5, img: "https://admin475.baharstore.az/storage//uploads/images/campaigns/baku-shopping-festival-674d9512dd06a.jpeg", title: "Baku Shopping Festival"},
  ]
  return (
    <>
    <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">
        Kampaniyalar
      </h4>
      <div className='max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 mt-10'>
        {campaignsData.map(item=>(
          <div key={item.id} className='overflow-hidden rounded-xl'>
          <img className='w-full h-72 object-cover grayscale' src={item.img} alt="kampaniya" />
          <div className='flex flex-col gap-5 py-10 px-5 bg-[#fafafa]'>
            <p className='font-semibold'>{item.title}</p>
            <p className='text-[#4b4b4b]'>əldə yoxdur</p>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default Campaigns