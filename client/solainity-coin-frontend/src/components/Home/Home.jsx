import './Home.css';

export const Home = () => {
    return(
        <>
            <div className="home-one">
                <div className="coin-container">
                    <img src="Home Images/Bitcoin-1.png" className="coin coin1" alt="coin1" />
                    <img src="Home Images/Etherium-2-1.png" className="coin coin2" alt="coin2" />
                    <img src="Home Images/Bitcoin-1.png" className="coin coin3" alt="coin3" />
                </div>
                <p>
                <p>Earn Coins While</p>
                <p>You Learn</p>
                </p>
                <p>
                <p className='home-page-para'>Complete engaging tasks and watch your coin balance</p>
                <p className='home-page-para'>grow. Redeem coins for for exciting rewards</p>
                <button>Start Earning Now</button>
                </p>
                <div className="coin-container">
                    <img src="Home Images/Etherium-2-1.png" className="coin coin4" alt="coin4" />
                    <img src="Home Images/Bitcoin-1.png" className="coin coin5" alt="coin5" />
                    <img src="Home Images/Bitcoin-1.png" className="coin coin6" alt="coin6" />
                </div>
            </div>
            <div className='home-second'>
                <h2>Benefits</h2>
                <div className='home-second-mid'>
                    <div className='left'>
                        <p>Earn coins for completion tasks</p>
                        <p>Redeem coins for rewards you'll love</p>
                        <p>Fun and engaging activities</p>
                        <p>User-friendly platform</p>
                        <p>Safe and secure environment</p>
                        <p>Boost Your Math Skills</p>
                    </div>
                    <div className='right'>
                        <p>Track Your Progress</p>
                        <p>Compete with Friends</p>
                        <p>Learn ay Your Own Pace</p>
                        <p>Unlock Bonus Content</p>
                        <p>Wide Variety of Tasks</p>
                        <p>Real-world Applications</p>
                    </div>
                </div>
            </div>
            <div className='home-third'>
                <h1>HOW IT WORKS</h1>
                <div className='home-third-div'>
                    <div>
                        <p><img src="Home Images/Group 5944.png" alt="" /></p>
                        <h2>Sign Up in Seconds</h2>
                        <p>Create your free account in a flash - no lengthy forms or commitments needed!</p>
                    </div>
                    <div>
                        <p><img src="Home Images/Group 5945.png" alt="" /></p>
                        <h2>Explore Fun Activities</h2>
                        <p>Dive into a world of engaging math tasks! Choose from various questions formats to suit your learning style</p>
                    </div>
                    <div>
                        <p><img src="Home Images/Group 5946.png" alt="" /></p>
                        <h2>Solve & Earn Coins</h2>
                        <p>Put your math skills to the test and watch your coin balance grow as you complete tasks!</p>
                    </div>
                    <div>
                        <p><img src="Home Images/Group 5947.png" alt="" /></p>
                        <h2>Track Your Progress</h2>
                        <p>Stay motivated by monitoring your coin accumulation and progress towards awesome rewards!</p>
                    </div>
                    <div>
                        <p><img src="Home Images/Group 5948.png" alt="" /></p>
                        <h2>Redeem Awesome Rewards</h2>
                        <p>Cash in your coins for exciting rewards you'll love, from gift cards to exclusive content</p>
                    </div>
                    <div>
                        <p><img src="Home Images/Group 5949.png" alt="" /></p>
                        <h2>Boost Your Math Skills</h2>
                        <p>Sharpen your math skils, gain confidence, and unlock your full potential - all while having fun!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
