import React from 'react';


export default function Books(props) {
    // สร้างการ์ด
    return (
        <>
          <div  className="cards">
            <a href='#' style={{textDecorationLine:'none',color:`${props.color}`}}>
              <div  className='card' style={{border:`none ${props.color}`}}>
              <div style={{color:"red",borderRadius:"50px"}} className="rating">{props.rates*2*10}%</div>
                  <img src={props.photo} alt="book-image" className='book_img' />
                  <div style={{color:"red",borderRadius:"50px"}} className="bookstatus">{props.bstatus}</div>
                  <div className='book_info'>
                  <h3 className='book_title'>{props.title}</h3>
                      <span className="publice">{props.status}</span><br/>
                      <a href={props.link} className="btn" target="_blank" rel="noreferrer">
                          <button className="book" style={{color:"#fff" ,width:"100px", border: "none",background: "#333",borderRadius:"15px"}}>อ่านเพิ่มเติม</button>
                      </a>
                  </div>
              </div>
            </a>
          </div> 
        </>
    )
}
