import React, { useState, useEffect } from 'react'
import BranchCard from '../BranchCard'

function Branch() {
  const [selectedBranch, setSelectedBranch] = useState(null)

  const branchData = [
    {id: 1, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-6a605f2409d4a.png', name:'28 Mall', phone:'+994773281567', location:'1014 15a, 4 Azadlıq Prospekti, Bakı', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428754452179!2d49.8517!3d40.3771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d06d649d689%3A0x743b17d23d8c1998!2s28%20Mall!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 2, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-6766b5e57233a.jpg', name:'Azadlıq', phone:'+994702088684', location:'Azadliq pr. 185 A', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5!2d49.8!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzAwLjAiTiA0OWjNDgnMDAuMCJF!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 3, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-1718653704.jpg', name:'Həzi Aslanov', phone:'+994507627820', location:'Məhəmməd Hadi küç. 382', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.5!2d49.9!3d40.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJzAwLjAiTiA0OWjNTQnMDAuMCJF!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 4, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-1718653716.jpg', name:'Park Bulvar', phone:'+99451229 94 77', location:'Park Bulvar TM', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3!2d49.85!3d40.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzEyLjAiTiA0OWjNTEnMDAuMCJF!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 5, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-1718653752.jpg', name:'N. Nərimanov', phone:'+994512502784', location:'Ağa Nemətulla küç. 52', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0!2d49.87!3d40.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzAwLjAiTiA0OWjNTInMDAuMCJF!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 6, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-67656e1fb6432.jpg', name:'Elmlər Akademiyası', phone:'+99450287 97 61', location:'Hüseyn Cavid pr. 19', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0!2d49.80!3d40.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJzAwLjAiTiA0OWjTOCUwMC4wIlE!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 7, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-1718653806.jpg', name:'Əhmədli', phone:'+994778040223', location:'Sarayevo küç. 18 H', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.0!2d49.93!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzAwLjAiTiA0OWjNTYnMDAuMCJF!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 8, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-1718653826.jpg', name:'Fəvvarələr meydanı', phone:'+99450251 58 67', location:'Tərlan Əliyarbəyov küç. 9', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3!2d49.84!3d40.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJzAwLjAiTiA0OWjTNCUwMC4wIlE!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 9, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-1718653856.jpg', name:'Rəşid Behbudov', phone:'+994518948479', location:'R. Behbudov küç. 16', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3!2d49.85!3d40.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzAwLjAiTiA0OWjTNSUwMC4wIlE!5e0!3m2!1saz!2saz!4v1234567890'},
    {id: 10, img: 'https://admin475.baharstore.az/storage//uploads/images/stores/img-67656f1c9542e.jpg', name:'Yasamal', phone:'+994504088385', location:'M. Şərifzadə küç. 558 D', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0!2d49.81!3d40.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzAwLjAiTiA0OWjTOCUwMC4wIlE!5e0!3m2!1saz!2saz!4v1234567890'}
  ]

  useEffect(() => {
    const savedBranchName = localStorage.getItem("selectedBranchName");
    if (savedBranchName) {
      const found = branchData.find(b => b.name === savedBranchName);
      if (found) {
        setSelectedBranch(found);
      }
      localStorage.removeItem("selectedBranchName");
    }
  }, []);

  return (
    <>
      <h4 className='text-2xl lg:text-3xl font-semibold text-center mt-5'>Filiallar</h4>
      <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-5 mt-10 px-3'>
        {
          branchData.map(item => (
            <BranchCard 
              key={item.id} 
              branch={item} 
              onShowMap={() => setSelectedBranch(item)} 
            />
          ))
        }
      </div>

      {/* Xəritə Modal Pəncərəsi */}
      {selectedBranch && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-2xl relative shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedBranch.name}</h3>
              <button 
                onClick={() => setSelectedBranch(null)}
                className="text-gray-500 hover:text-black font-bold text-xl cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">{selectedBranch.location}</p>
            
            <div className="w-full h-[350px] rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src={selectedBranch.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={selectedBranch.name}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Branch