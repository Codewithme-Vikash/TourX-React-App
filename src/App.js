import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import intitalData from "./data"


function App() {

    const [data, setData] = useState(intitalData);


    if (data.length === 0) {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                <p className='font-bold text-2xl'>No Tour Left</p>
                <button onClick={() => setData(intitalData)} 
                    className='mt-4 py-2 px-20 text-lg border border-solid border-white  bg-gray-200 rounded-lg
                    cursor-pointer transition-all duration-200 hover:bg-gray-400 hover:text-black'>Refresh</button>
            </div>
        )
    }

    return (
        <div className='App'>

            <div className='tour-container flex flex-col items-center justify-center'>
                <h2 className='text-center text-5xl m-[6vh] py-[1vh] px-[5vw] border-[3px] border-sky-500 rounded-[20px] border-dashed'>Plan with Us</h2>
                <div className='cards max-w-[1300px] flex 
                    justify-center mt-0 mb-8 mx-auto flex-wrap gap-4'>
                    {
                        data.map(city => {
                            return <Card key={city.id} {...city} setData={setData} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
