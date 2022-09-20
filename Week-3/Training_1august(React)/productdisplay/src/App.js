
import ElectronicProducts from './WOHOC/ElectronicProducts'
import productDetails from './WOHOC/edata'
// import clothing from './WOHOC/cdata'
// import ClothingProducts from "./WOHOC/ClothingProducts"
import './WOHOC/styles.css'
import clothing from './PRODUCTDISPLAY/cdata'
import ClothingProducts from './PRODUCTDISPLAY/ClothingProducts'
//-----------------------task-1-------------------------------- import './WOHOC/styles.css'
// import ClothingProducts from "./WOHOC/ClothingProducts"

// import data from './PRODUCTDISPLAY/TemplateData.json'
// import './PRODUCTDISPLAY/styles.css'
//------------------------------------------------------------TASK-2
function App() {
  //--------------TASK-2
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {/* <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <p className="price">${val.price}</p>
                  </div>
                )
              })
          }
        </div>
      </div> */}
      <div>
        {/* <ElectronicProducts data={productDetails}></ElectronicProducts> */}
        <ClothingProducts data={clothing}></ClothingProducts>
      </div>
    </>

    //--------------------------------------------------TASK-1 STYLING----------------------------------------
    // <div>
    //    {/* <ElectronicProducts data={productDetails}></ElectronicProducts> */}
    //     <ClothingProducts data={clothing}></ClothingProducts>
    // </div>

    //------------------------------------------------------------
  )
}
export default App
