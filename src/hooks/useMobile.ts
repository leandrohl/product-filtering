import { useState } from 'react';


const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  window.addEventListener("resize", function(){
    setIsMobile(window.innerWidth <= 800)
  });

  return {
    isMobile
  };
}

export default useMobile;