import React, { useContext, useEffect } from 'react'
import PDataContext from '../../context/pageData/pDataContext';

const Container_A = () => {
  const pDataContext = useContext(PDataContext);
  const { dataName, getPData, pData, text } = pDataContext;
  let style;
  let className;
  let HTML = text;

  return (
    <div style={{ textTransform: style }} className={className} >
      <td dangerouslySetInnerHTML={{ __html: HTML }} />
    </div>
  )
}

export default Container_A
