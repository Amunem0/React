import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1><App/></h1>
        </div>
    )
}

const ReactElem=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <MyApp/>
    
)
