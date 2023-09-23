
const WhatApp = () => {

    const phoneNumber = '65738248';
    const handleClick = () => {
    const url = `http://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
    };

  return (
    <div className="w-10 md:w-16 fixed right-4 bottom-4 cursor-pointer z-50" onClick={handleClick}>
        <img src="https://muyskatrajestipicos.co/wp-content/uploads/2020/06/png-transparent-whatsapp-icon-whatsapp-logo-computer-icons-zubees-halal-foods-whatsapp-text-circle-unified-payments-interface.png" alt="" className="rounded-lg" />
    </div>
  )
}

export default WhatApp