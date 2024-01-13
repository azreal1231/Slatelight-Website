import { retainers } from "../utils/constants"

const RetainersComp = () => {
return <>
<div className="row mb-4">
    {retainers.map((_x, _index) => 
        <div className="col-12 col-md-6 col-lg-4" key={_index} style={{'height': '300px'}}>
            <div className="retainer-card">
                <h3>{_x['title']}</h3>
                <h5>{_x['sub_title']} | <span>{_x['amount']}</span></h5>
                <p>{_x['description']}</p>
            </div>
        </div>
    )}
</div>
</>
}

export default RetainersComp