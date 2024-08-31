import './ContentSection.css'
import LeftSide from './leftSide/LeftSide';
import RightSide from './rightSide/RightSide';

function ContentSection() {
    return (
        <div className="container-fluid px-0">
            <div className="section">
                
                <div className="container">
                    <div className="row">
                        <LeftSide />
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection;