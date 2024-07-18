import React, { useRef } from "react";

const ContextMenu = ({options, cordinates, ContextMenu, setContextMenu}) => {
     const contextMenuRef = useRef(null);

  return <div ref={ContextMenu} style={{ top:cordinates.y, left:cordinates.x, boxShadow:"0 2px 5px 0 rgba(var(11,20,26),.26),0 2px 10px 0 rgba(11,20,26;),.16)" }} className=" bg-white shadow-2xl fixed py-5 z-[100] rounded-lg border border-gray-200" >
     <ul>
          {
               options.map(({name,callback})=>{
                    return <li key={name} className="py-2 hover:bg-gray-100 pl-5 pr-10 cursor-pointer " >
                         <span>{name}</span>
                    </li>
               })
          }
     </ul>
  </div>;
};

export default ContextMenu;
