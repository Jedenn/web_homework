import img1 from '../img/img_1.png';
import img2 from '../img/img_2.png';
import img4 from '../img/img4.png';

function IndexPage() {

    return <>
        <img alt="" src={img4} className="banner"/>
        <div className="wrap">
            <img alt="" src={img1}/>
            <img alt="" src={img2}/>
        </div>
    </>
}


export default IndexPage;