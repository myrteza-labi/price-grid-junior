import './WhyBox.css'

function WhyBox(props){
    return (
        <section className="WhyBox" >
            <div className="whyBoxFilter" ></div>
            <h4 className="whyBoxTitle" >Why Us</h4>

            <div className="whyBoxlinkContainer">
                <a className="whyBoxLink" href="#">Tutorials by industry experts</a>
                <a className="whyBoxLink" href="#" > Peer expert code review</a>
                <a className="whyBoxLink" href="#" >Coding exercises</a>
                <a className="whyBoxLink" href="#" >  Access to our GitHub repos</a>
                <a className="whyBoxLink" href="#" >  Community forum</a>
                <a className="whyBoxLink" href="#" >Flashcard decks</a>
                <a className="whyBoxLink" href="#" >New videos every week</a>
            </div>
            
        </section>
    )
}
export default WhyBox; 

