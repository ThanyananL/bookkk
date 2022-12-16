import React,{useEffect, useState} from 'react';
import Bookcatagory from'./Bookcatagory';
import './style.css';
import Book from './Books';
import Data from './data.json';
import Footer from './footer.js';
import Header from './Header';
import PhotoSlideshow from './PhotoSlideshow';
//import Search from './Search';
//import Mode from './Mode';

export default function Home() {
    let [colors,setColor]=useState("white");
    let [text,textColor]=useState("black");
    let [input,setInput]=useState("")
    let [newData,setnewData]=useState(Data)
    let [type ,setType]=useState("all")
 
   function defaultType(e){
        setType(e.target.value)
    } 

    //ตรวจสอบกรองชนิดหนังสือ 
    useEffect(()=>{
        if(type==='all'){
            setnewData(Data)
        }else{
           let data= Data.filter(book=> {return book.status.toLowerCase()===type.toLowerCase()})
           setnewData(data)
        }
    },[type])

    

    let setinput=(e)=>{
        setInput(e.target.value)
    }

    //ค้นหาข้อมูล 
    function submitInput(){
        // newData=Data.filter(item=>item.title.toLowerCase().slice(0,input.length)===input.toLowerCase())
        newData=Data.filter(item=>item.title.toLowerCase().includes(input.toLowerCase()))
            setnewData(newData);
    }

    // เปลี่ยนสี
    function colorChange(){
        if(colors==='white' || colors==='red'){
            setColor('black');
            textColor('white');
        }else if(colors==='black'){
            setColor('white');
            textColor('black');
        }else if(colors==='black'){
            setColor('red');
            textColor('green');
        }
    }

    

    return (
        <>
        <div className="main">
            <div className="headerbar">
                <Header/>
                <h1 className="logo"><a href='Home'>Book</a></h1>
                {/* serach bar */}
                <div className="searchbar" >
                <input className='search' type="text" onChange={setinput} value={input} placeholder="Search..." />
                <button className="inputbtn" onClick={submitInput} >search</button>
                </div>
                {/* <Mode/> */}
                <input type="button" onClick={colorChange}  className="colorsmode" value='&#9790;'/>
                {/* ตัวกรอง */}
                <Bookcatagory defaultType={defaultType} />
            </div>
            <div style={{background:colors ,color:text}}  className="bookhome" >
            <PhotoSlideshow/>
            <div className='empty'></div>
                <h2>Book list</h2>
                {
                 newData.length>0 ?   
                  newData.map((val)=>{
                        // จับคู่กับ props books
                        return( 
                            <Book
                            color={text}
                            rates={val.rate}
                            photo={val.image}
                            bstatus={val.status}
                            title={val.title}
                            status={val.writer}
                            link={val.website}
                            />
                        )
                }) : <h1 style={{color: "red"}}>Book Not Found!</h1>

                }
            <div className='empty'></div>
            </div>
            <Footer/> 
        </div>
        </>
    )
}


// onChange={(e)=>setInput(e.target.value)}
