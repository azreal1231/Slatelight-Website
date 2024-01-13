import { addons } from "../utils/constants"

const AddonsComp = () => {
return <>
<div className="row d-flex justify-content-center" style={{marginTop: '100px'}}>
    {addons.map((_x, _index) => 
        <div className="col-6 col-md-4 col-lg-3" key={_index} style={{ height: '200px' }}>
            <div className="addons-card">
                <h3>{_x['title']}</h3>
                <h5>{_x['sub_title']} | <span>{_x['amount']}</span></h5>
                <p>{_x['description']}</p>
            </div>
        </div>
    )}
</div>
</>
}

export default AddonsComp