import * as React from 'react'

export const Logo = () => (
    <svg height="200" width="200" className="logo">
        {/*                 góra  prawo    dół    lewo           */}
        <polygon points="100,0   125,25  100,50   75,25" style={{fill: '#D25EFF'}} />
        {/*              góra-p  prawo  l-dół  lewo-g           */}
        <polygon points="125,25 175,75 150,100 100,50" style={{fill: '#6666FF'}} />
        {/*               góra   prawo    dół    lewo           */}
        <polygon points="175,75 200,100 175,125 150,100" style={{fill: '#3DC85B'}} />
        {/*               prawo   dół     lewo    góra           */}
        <polygon points="175,125 125,175 100,150 150,100" style={{fill: '#73FF5B'}} />
        {/*               góra    prawo   dół     lewo           */}
        <polygon points="100,200   125,175  100,150   75,175" style={{fill: '#FFE65B'}} />
        {/*              góra-p  prawo  l-dół  lewo-g           */}
        <polygon points="75,175 25,125 50,100 100,150" style={{fill: '#FFAD72'}} />
        {/*               góra   prawo    dół    lewo           */}
        <polygon points="25,125 0,100 25,75 50,100" style={{fill: '#FF3DCD'}} />
        {/*               prawo   dół     lewo    góra           */}
        <polygon points="25,75 75,25 100,50 50,100" style={{fill: '#FF8CFF'}} />
        
    </svg>
)