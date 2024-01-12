import React from 'react'

const user = {
    name: 'Luffy',
    imageURL: 'https://pa1.aminoapps.com/6691/8cf24a98f7bb1229f81a864caa248230ad5ad8d1_00.gif',
    imageSize: 300,
    age: 17
}

export default function Peofile() {
    return (
        <div>
            <img className='avatar'
                 src={user.imageURL}
                 alt={"photo" + user.name}
                 style={{width: user.imageSize, height: user.imageSize}}
            />
            <h1>{user.name}</h1>
            <p>{user.age}</p>
            <p>{user.name} капитан пиратской каманды</p>
        </div>
    )
}