import { useEffect, useRef, useState } from "react";

export default function TypingContent() {
  

  const [compareChar, setCompareChar] = useState<string>("")

  const [targetText, setTargetText] =  useState<string>("the silk road derives its name from the highly lucrative trade of silk textiles that were primarily produced in china the network began with the expansion of the han dynasty into")


  const [charStatus, setCharStatus] = useState<boolean[]>([])
  
   const [isAwaitingSpace, setIsAwaitingSpace]  = useState<boolean>()

  // function for checking user input

useEffect(() => {

  const TrackKey = (e: KeyboardEvent) => {

    const typedKey = e.key
 
    if(e.key.length === 1){
            setCompareChar(prev => prev + typedKey)
    }

     
if(typedKey === "Backspace"){
      setCompareChar(prev => prev.slice(0, -1 ))
}


// ctrl + backspace shortcut for deleting a whole word 

    if (e.ctrlKey && e.key === 'Backspace') {
  setCompareChar(prev => {
    let text = prev;
    let i = text.length - 1;
    
   
    while (i >= 0 && text[i] === ' ') {
      i--;
    }
    
    
    while (i >= 0 && text[i] !== ' ') {
      i--;
    }
    
    
    return text.slice(0, i + 1);
  });

}
}

document.addEventListener('keydown', TrackKey)

return (() => {
  document.removeEventListener('keydown', TrackKey)
})
}, [])


// function for checking the correct and incorrect typed text.

useEffect(() => {
  
 const statusArray: boolean[] = []

 for(let i =0; i < compareChar.length; i++){
        if(compareChar[i] === targetText[i]){
          //  if(targetText[i] === " " && compareChar[i] !== " " ){
          //   setIsAwaitingSpace(true)
          //   console.log(`Expected space at index ${i}, but got: "${compareChar[i]}"`);
            
          // }else {
          //   setIsAwaitingSpace(false)
          // }
          statusArray.push(true)

          console.log(`comparechar ${compareChar[i]} and targetText ${targetText[i]} `)
          
      }else {
          statusArray.push(false)
        }
       }


  
       setCharStatus(statusArray)

}, [compareChar])
 


  return (
  
  
  
  <div>

          {targetText.split("").map((item, index) => {
            if(index < compareChar.length){

              return charStatus[index] ? 
            
              <span className="text-green-500" >{item}</span> : 
              <span className="text-red-500" >{item}</span>
              // (isAwaitingSpace ?

              //   <span className="text-red-500" >{`${item}${compareChar}`}</span> :

              //  <span className="text-red-500" >{item}</span>
              // )
            
            }else {
              return <span className="text-gray-500">{item}</span>
            }
          })}

        
   
   </div>     

  


  )
}