import React from 'react';

// const Card = (props) => {
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
//             <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
//             <div>   
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

// Refactor 1:
// const Card = (props) => {
//     const { id, name, email } = props;
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
//             <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
//             <div>   
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }

//Refactor 2:
const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>   
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
