import React from 'react';
// import { Furigana } from 'furigana-react'

// const Kanjin2Unit1 = ({ kanjin2Unit1 }) => {
//     console.log(kanjin2Unit1);
//     return (
//         <div>
//             <center><h1>kanji N2 unit 1 List</h1></center>
//             {kanjin2Unit1.map((kanjiunit1) =>
//                 (
//                     <div className="card" key={kanjiunit1.id}>
//                         <div className="card-body">
//                             <h5 className="card-title">{kanjiunit1.main_word}</h5>
//                             <h6 className="card-subtitle mb-2 text-muted">{kanjiunit1.meanning}</h6>
//                             <div className="card-text">
//                                 {kanjiunit1.kotoba.map((item, index) =>
//                                     (   <div key={index}>
                                            
//                                             <Furigana furigana={item.furigana} >
//                                                 {item.word}
//                                             </Furigana>
//                                             <div>{item.meaning_kotoba}</div>
//                                         </div>
//                                     )
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )
//             )}
//         </div>
//     )
// };

// export default Kanjin2Unit1

function Detail() {
    return (
        <div className="App">
            <h1>Detail page KanjiN2</h1>

        </div>
    )
}

export default Detail;
