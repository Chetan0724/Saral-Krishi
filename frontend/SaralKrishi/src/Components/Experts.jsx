import React from 'react';
import AryanGupta from '../assets/AryanGupta.jpg';
import ChetanYadav from '../assets/Chetan.jpg';
import VikramKumar from '../assets/Vikram.jpg';
import ParvJoshi from '../assets/Parv.jpg';
import UttamSingh from '../assets/Uttam.jpg';
import RohanKumar from '../assets/Rohan.jpg';
import VivekRaj from '../assets/Vivek.jpg';

const expertsData = [
  {
    id: 1,
    name: 'Dr. Aryan Gupta',
    qualification: 'PhD in Agricultural Science',
    chargePerMinute: 10,
    photo: AryanGupta
  },
  {
    id: 2,
    name: 'Mr. Chetan Yadav',
    qualification: 'MSc in Horticulture',
    chargePerMinute: 8,
    photo: ChetanYadav
  },
  {
    id: 3,
    name: 'Mr. Vikram Kumar',
    qualification: 'BSc in Agricultural Engineering',
    chargePerMinute: 5,
    photo: VikramKumar
  },
  {
    id: 4,
    name: 'Mr. Parv Joshi',
    qualification: 'BSc in Agricultural Engineering',
    chargePerMinute: 6,
    photo: ParvJoshi
  },
  {
    id: 5,
    name: 'Mr. Uttam Singh',
    qualification: 'BSc in Agricultural Engineering',
    chargePerMinute: 5,
    photo: UttamSingh
  },
  {
    id: 6,
    name: 'Mr. Rohan Kumar',
    qualification: 'BSc in Agricultural Engineering',
    chargePerMinute: 5,
    photo: RohanKumar
  },
  {
    id: 7,
    name: 'Mr. Vivek Raj',
    qualification: 'BSc in Agricultural Engineering',
    chargePerMinute: 5,
    photo: VivekRaj
  }
  
];

const ExpertCard = ({ expert }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md">
      <img src={expert.photo} alt={expert.name} className="w-41 h-41 object-cover rounded-md" /> {/* Set consistent size */}
     <h3 className="text-lg font-semibold mt-2">{expert.name}</h3>
      <p className="text-gray-700">Qualification: {expert.qualification}</p>
      <p className="text-green-500">Charge: ₹{expert.chargePerMinute}/min</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2">
        Talk to Expert
      </button>
    </div>
  );
};

const Experts = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Our Experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {expertsData.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
        <div className="border rounded-lg p-4 m-2 shadow-md text-center">
          <h3 className="text-lg font-semibold mt-2">More Experts</h3>
          <p className="text-gray-700">Explore more experts to get the best advice!</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2">
            View All Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
