import MomentumPlaceholder from './assets/Dark.png';
import ViewLogo from './assets/view-logo.svg';
import ChatBubble from './assets/chat-bubble.svg';


function BlogCard() {
    return (
    <>
    <div className="flex flex-col justify-center max-w-[280px] max-h-max border border-solid border-[#616988]/20 rounded-[2px]" style={{padding: '15px'}} id="blogCard">
        <img src={MomentumPlaceholder} alt="Placeholder" className="w-[260px] h-[120px] object-cover" style={{marginTop: '-0.4em', marginBottom: '10px'}} />
        <h1 className="text-[15px] tracking-[1.2px] font-bold">Project Title</h1>
        <p className="font-normal text-[12px] text-[#616988] tracking-[0.8px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex gap-2" id="cardFooter" style={{marginTop: '1em', marginBottom: '-10px'}}>
            <div className="flex align-baseline gap-1" id="comments-section">
                <img src={ChatBubble} className="w-6 h-6" id="card-svg" />
                <p className="flex font-medium text-[#616988]">0</p>
            </div>
            <div className="flex align-baseline gap-1" id="views-section">
                <img src={ViewLogo} className="w-6 h-6" id="card-svg" />
                <p className="flex font-medium text-[#616988]">0</p>
            </div>
        </div>
    </div>   
    </>
    )
}

export default BlogCard;