import './Font.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => <span key={i + idx} className={`${letterClass} _${i + idx}`} >  {char} </span>
                )
            }
        </span>
    )
}

export default AnimatedLetters;


// import './Font.scss';

// const AnimatedLetters = ({ letterClass, strArray, idx }) => {
//     return (
//         <span>
//             {
//                 strArray.map((char, i) => (
//                     <span key={char + i} className={`${letterClass} _${i + idx}`}>
//                         {char}
//                     </span>
//                 ))
//             }
//         </span>
//     )
// };

// export default AnimatedLetters;