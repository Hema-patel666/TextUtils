import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        
       
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
               
            })

            setBtnText('Enable Light Mode')
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                

            })
            setBtnText('Enable Dark Mode')
        }

    }
    return (
        <div style={{marginLeft:'5%',marginRight:'5%'}}>
            <div className='container' style={myStyle}>
                <h1 className='my-2'>About us</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}   >
                                Analyze your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Text analysis, also known as text mining or text analytics, is the process of extracting meaningful insights and information from textual data. With the increasing availability of large volumes of text in various forms, such as articles, social media posts, customer reviews, and more, text analysis has become a valuable tool for gaining valuable insights and making informed decisions..</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>"Free to use" refers to the availability and permission to utilize a product, service, or resource without any cost or financial obligation. The concept of "free to use" has become increasingly prevalent in the digital age, where many online platforms, software applications, creative content, and open-source projects offer free access to users.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Browser compatibility refers to the ability of a website, web application, or digital content to function and display correctly across different web browsers. Since various web browsers (such as Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.) interpret and render web content differently, ensuring browser compatibility is crucial for delivering a consistent and seamless user experience.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-3' style={{ padding: "1%" }}><button type="button" className="btn btn-info" onClick={toggleStyle}>{btnText}</button></div>
            </div>
        </div>

    )
}