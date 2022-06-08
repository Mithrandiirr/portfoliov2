import React from 'react'
type Props = {
    children?: React.ReactNode;
  };

const  Layout = ({children} : Props) => {
  return (
    <div className='max-w-[1920px] mx-auto'>
        {children}
    </div>
  )
}

export default Layout