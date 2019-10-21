import React from 'react';
import Travel from './Travel'

const travels = [
  {
    destination:"Paris",
    country: "France",
    photo:"https://cdn.pixabay.com/photo/2019/07/21/16/29/paris-4353082_960_720.jpg",
    distance: "1.605km",
  },
  {
    destination: "Mainz",
    country: "Germany",
    photo: "https://cdn.pixabay.com/photo/2018/04/03/01/38/frankfurt-mainz-3285698_960_720.jpg",
    distance: "2.265km"
  },
  {
    destination: "London",
    country: "England",
    photo: "https://cdn.pixabay.com/photo/2015/09/18/11/47/london-eye-945497_960_720.jpg",
    distance: "2.186,8km",
  },
  {
    destination: "Tokyo",
    country: "Japan",
    photo: "https://cdn.pixabay.com/photo/2017/05/20/02/04/shibuya-2328029_960_720.jpg",
    distance: "11.030km",
  },
  {
    destination: "Seoul",
    country: "South Korea",
    photo: "https://cdn.pixabay.com/photo/2019/09/26/23/00/han-river-4507176_960_720.jpg",
    distance: "10.412km",
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel trip={travel} />
    ))} 
  </div>
);


export default Travels;