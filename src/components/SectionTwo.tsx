import React, {useEffect, useState} from 'react';
import Card from './Card';

function SectionTwo() {
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [contentLeft, setContentLeft] = useState<any>({
    title:"",
    desc:''
  });
  const [show, setShow] = useState<boolean>(false);

  const fetchRandomImage = async() => {
    setLoading(true);
    const getImages:any= await fetch('https://picsum.photos/v2/list');
    const res = await getImages.json();
    setContentLeft({...contentLeft, title:res[0]?.author});
    setImages(res.map((r:any) =>{return{...r, isActive:false, x:0, y:0}}));
    setLoading(false);
  }

  const onClickCard = (reference:any,id:string) => {
    const {x, y} = reference.current.getBoundingClientRect();
    setImages(images.map((img:any)=> {
      if(img.id === id){
        const newImages = {...img, isActive:!img.isActive,x,y};
        setContentLeft({...newImages, title:newImages.author});
        setShow(!img.isActive);
        return newImages;
      } 
      return {...img, isActive: false}
    }))
    
  }

  useEffect(() => {
    fetchRandomImage();
  },[]);

  console.log(contentLeft,"@@contentLeft")

  return (
    <div className='h-screen px-3 bg-black relative'>
      <div className='w-full justify-center flex py-3'>
        <div className='mt-3 prose prose-lg'>
          <h1 className='text-white'>My Projects</h1>
        </div>
      </div>
      <div className={`flex items-center justify-center mt-[200px] relative`}>
        <div className={`${!show ? 'w-3/6' : ''} prose prose-h2:text-white prose-p:text-white pr-[10%]`}>
          <h2>{contentLeft.title}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias animi omnis quam labore ratione suscipit sed pariatur, quidem deserunt temporibus expedita eos, iusto sunt vitae officia harum fugiat voluptatem dolorum?</p>
        </div>
        <div className={`w-3/6 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex cursor-pointer ${show ? 'hidden' : ''}`}>
          {images?.map((img:any) => (
            <Card 
              key={img.id} 
              title={img.author} 
              imgUrl={img.download_url}
              isActive={img.isActive}
              textColor="text-white"
              x={img.x}
              y={img.y}
              onClick={(reference)=> onClickCard(reference,img.id)}
            />
          ))}
        </div>
        <div className={`cursor-pointer ${!show ? 'hidden' : ''}`}>        
            {show && (
              <Card 
                title={contentLeft.author}
                imgUrl={contentLeft.download_url}
                isActive={false}
                textColor="text-white"
                x={contentLeft.x}
                y={contentLeft.y}
                onClick={(reference) => onClickCard(reference,contentLeft.id)}
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default SectionTwo