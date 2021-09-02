import React from 'react'

const DisplayComponents = ({ data }) => {

  const readArr = (arr, keyName) => {
    return arr.map((target, idx) => {
      if (Object.keys(target).length === 0) return;
      let obj = {
        type: '',
        texttype: '',
        style: {},
        className: '',
        text: '',
        alt: '',
        src: '',
        items: [],
      }

      Object.keys(target).forEach((i, idx) => {
        switch (i) {
          case 'items':
            console.log('Hit Array');
          // return readArr(target[i], 'keyName' + idx)
          case 'type':
          case 'texttype':
          case 'className':
          case 'text':
          case 'alt':
          case 'src':
          case 'items':
            // console.log(i)
            obj[i] = target[i]
            break;
          case 'style':
            // console.log(i)
            obj['style']['textTransform'] = target[i]
            break;
          default:
            obj['style'][i] = target[i]
          // console.log(i)
        }
      })
      console.log("the Object inserted", obj)

      const { alt, className, src, style, text, texttype, type, items } = obj
      // return (
      //   <div className={className} style={style} >
      //     {text !== '' ? (<td dangerouslySetInnerHTML={{ __html: text }} />) : null}
      //     {src !== '' ? (<img src={src} alt={alt} />) : null}
      //     {items.length !== 0 ? readArr(items, 'otherlevel') : null}
      //   </div>
      // )
      return (
        <div className={className} style={style}>
          {text !== '' ? (<td dangerouslySetInnerHTML={{ __html: text }} />) : null}
          {src !== '' ? (<img className={className} style={style} src={src} alt={alt} />) : null}
          {items.length !== 0 ? readArr(items, 'otherlevel') : null}
        </div>
      )
    })
  }

  const testData = [
    { text: '<h1>No one knows</h1>', style: 'uppercase' },
    { text: '<h2>No one knows</h2>', styel: 'lowercase' }
  ]

  return (
    <>
      {readArr(data, 'array')}
      {/* {RecursiveComponents(data)} */}
    </>
  )
}

export default DisplayComponents