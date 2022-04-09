import React, {useEffect, useState} from 'react';
import Card from './Card';

function SectionTwo() {
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  const fetchRandomImage = async() => {
    setLoading(true);
    const getImages:any= await fetch('https://picsum.photos/v2/list');
    const res = await getImages.json();
    console.log(res,'getImages');
    setImages(res);
    setLoading(false);
  }

  useEffect(() => {
    fetchRandomImage();
  },[]);

  return (
    <div className='mx-3 flex items-center justify-center h-screen'>
      <div className='w-2/6'>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, sint obcaecati itaque tenetur nemo possimus! Debitis, quis atque! Eum repudiandae sapiente hic dignissimos error vel delectus nemo, fugiat cumque possimus.</h1>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias animi omnis quam labore ratione suscipit sed pariatur, quidem deserunt temporibus expedita eos, iusto sunt vitae officia harum fugiat voluptatem dolorum?</div>
      </div>
      <div className='w-4/6 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex'>
        {isLoading  ?  (<h1>Loading</h1>) : images?.map((img:any) => (
          <Card key={img.id} title={img.author} imgUrl={img.download_url} />
        ))}
      </div>
    </div>
  )
}

export default SectionTwo