import React, {useEffect, useState} from 'react';

function GetData() {

    const [myData , setMyData] = useState([])
    const getData =async ()=>{
        await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data =>  setMyData(data))
    }
    const [Cpage , setCPage ] = useState(1)
    const [Lpage , setLPage ] = useState(15)
    return (
        <>
            <div className="col-12 border p-3">
                <button className="btn btn-success " onClick={getData}> add data </button>
            </div>
            <div className="col-12">
                <nav className="nav nav-item">
                    <ul className='list-unstyled col-2 p-3 border bg-secondary bg-opacity-10 d-flex justify-content-between'>
                        <li className="col text-center border rounded" onClick={() => {
                            setCPage(1)
                            setLPage(15)
                        }}>1</li>
                        <li className="col text-center border rounded" onClick={() => {
                            setCPage(16)
                            setLPage(31)
                        }}>2</li>
                        <li className="col text-center border rounded" onClick={() => {
                            setCPage(32)
                            setLPage(46)
                        }}>3</li>

                    </ul>
                </nav>
                <ul className="col-12">
                    {
                        myData.slice(Cpage,Lpage)?.map(item => {
                            return (
                                <li key={item?.id} className="col-5 border">
                                    {
                                        item?.title
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default GetData;