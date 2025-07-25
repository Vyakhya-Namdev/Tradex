import React from 'react';

function Universe() {
    return (
        <div className='container p-5 smt-5'>
            <div className='row text-center'>
                <h1>The TradeX Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "50%" }}></img>
                    <p className='text-small text-muted mt-3' style={{ fontSize: "14px" }}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" style={{ width: "50%" }}></img>
                    <p className='text-small text-muted mt-4' style={{ fontSize: "14px" }}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src="media/images/tijori.svg" style={{ width: "50%" }}></img>
                    <p className='text-small text-muted mt-3' style={{ fontSize: "14px" }}>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" style={{ width: "50%" }}></img>
                    <p className='text-small text-muted mt-4' style={{ fontSize: "14px" }}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" style={{ width: "50%" }}></img>
                    <p className='text-small text-muted mt-5' style={{ fontSize: "14px" }}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" style={{ width: "50%" }}></img>
                    <p className='text-small text-muted mt-4' style={{ fontSize: "14px" }}>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
                <button className='p-2 btn btn-primary mb-5' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;