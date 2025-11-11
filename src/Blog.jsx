import MomentumLogo from './assets/logo_white_transparent.png';
import MomentumBackground from './assets/devBlogBackground.png';
import Subject from './assets/subject.png'
import LeftArrowSVG from './assets/left-arrow.svg';
import RightArrowSVG from './assets/right-arrow.svg';
import MailLogo from './assets/mail-logo.svg'
import BlogCard from './BlogCard.jsx';
import './Blog.css';

function Blog() {
  return (
    <>
      <nav className="my-10 flex justify-evenly items-center gap-15" style={{marginTop: '10px', marginBottom: '10px'}}>
        <div className="flex justify-center items-center gap-5" id="logoContainer">
          <img src={MomentumLogo} alt="Momentum Logo" className="w-15 h-15" />
          <h1 className="font-normal tracking-[0.4em]" id="logo-font">MOMENTUM</h1>
        </div>
        <div id="navAction">
          <ul className="flex flex-row justify-center gap-20" id="navButtons">
            <li><a href="#" className="text-white/80">Categories</a></li>
            <li><a href="#" className="text-white/80">About Me</a></li>
            <li><a href="#" className="text-white/80">Contact</a></li>
          </ul>
        </div>
        <div id="searchBar">
          <input type="text" className="border-1 border-[#616988]/80 focus:outline-none placeholder:text-[#616988] placeholder:italic placeholder:p-3" placeholder="Search" />
        </div>
        <div id="socmedLogosContainer">
        </div>
      </nav>
      <main className="relative overflow-hidden">
        <img src={MomentumBackground} className="h-150 w-full object-cover object-top" />
        <div className="absolute top-45 left-30" id="heroPageContent">
          <h2 className="tracking-[4.5px] text-[#4175E6] [text-shadow:2px_2px_5px_black]" id="heroContent1">WELCOME TO MY BLOG</h2>
          <h1 className="max-w-80 text-[40px] font-semibold text-[#FFFFFF] opacity-80">Momentum Never <span className="text-[#4175E6]">Stops</span>.</h1>
          <p className="max-w-100 text-[15px] font-light tracking-[1.8px] opacity-80">Notes, lessons, and experiments from my path in software development.</p>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{marginTop: '25px', padding: '10px'}}>
            <a href="#" className="p-25">See All Posts</a>
          </button>
        </div>
        <div className="absolute" id="heroPageName"  style={{ top: '40%', right: '40%' }}>
          <h1 className="font-extralight tracking-[2px] text-[15px]">William Miguel Enriquez</h1>
          <p className="font-light tracking-[2px] text-[15px]">An Aspiring Software Engineer</p>
          <img src={Subject} className="absolute h-[800px] max-w-[850px]" style={{bottom: '-20em', left: '14em'}} />
        </div>
      </main>
      <section>
        <div id="featuredPosts">
          <h1 className="flex justify-center text-[36px] font-bold tracking-[2px]" style={{marginTop: '1em', marginBottom: '1em'}}>Featured Posts</h1>
          <div className="max-w-4xl grid grid-cols-3" style={{margin: 'auto'}} id="featuredPosts">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="max-w-7xl" style={{margin: 'auto', marginTop: '5em'}} id="recentPosts">
          <div className="flex justify-between items-center" id="recentPostsHeader">
            <h1 className="flex justify-start text-[15px] text-[#FFFFFF] font-bold tracking-[2px]" style={{marginBottom: '1em'}}>Recent Posts</h1>
            <div id="devCardNavigations">
              <button><img src={LeftArrowSVG} className="w-10 h-10" id="pagination-svg" /></button>
              <button><img src={RightArrowSVG} className="w-10 h-10" id="pagination-svg" /></button>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-6" id="recentPostContainer" style={{marginTop: '1em', marginBottom: '3em'}}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div id="subscriptionContainer" className="rounded-md bg-[#0E1016] flex justify-around items-center max-w-[1200px] max-h-25" style={{margin: 'auto', padding: '20px', marginBottom: '3em',}}>
          <div id="mailDescription" className="flex justify-center items-center gap-5">
              <div id="logoContainer" className="bg-[#4175E6] w-[max-content] rounded-full" style={{padding: '10px'}}>
                <img src={MailLogo} className="h-12" id="subscription-svg" style={{marginRight: '2px'}} />
              </div>
            <h1 className="font-semibold text-[24px] w-75">Never Miss a Post from <span className="text-[#4175E6]">Momentum</span>.</h1>
          </div>
          <div id="mailInputContainer" className="flex gap-2">
            <input type="email" placeholder="Email" className="border border-[#616988]/80 focus:outline-none placeholder:text-[#616988] placeholder:italic h-8 px-4" />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm w-[100px] h-8 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-none">Subscribe</button>
          </div>
        </div>
      </section>
      <footer className="">
        <nav className="flex justify-center bg-[#0E1016] w-full" style={{padding: '10px', paddingBottom: '15px'}}>
          <ul className="flex flex-col items-center gap-5 text-center">
            <li><img src={MomentumLogo} className="h-[66px]" style={{margin: 'auto'}} /></li>
            <li><a href="#" className="text-[#FFFFFF]/80 text-[16px]">Homepage</a></li>
            <li><a href="#" className="text-[#FFFFFF]/80 text-[16px]">About</a></li>
            <li><a href="#" className="text-[#FFFFFF]/80 text-[16px]">Contact</a></li>
          </ul>
        </nav>
        <section className="flex justify-around items-center bg-[#0A0B10]" style={{paddingTop: '5px', paddingBottom: '5px'}}>
          <p className="text-[#FFFFFF]/50 text-[13px]">© 2025 | All Rights Reserved.</p>
        </section>
      </footer>
    </>
  )
}

export default Blog
