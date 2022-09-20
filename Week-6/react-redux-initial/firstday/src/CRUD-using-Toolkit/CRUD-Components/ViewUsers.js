import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeUser } from "../userSlice";
const ViewUsers = () => {
    const dispatch = useDispatch()
    const { loading, usersData } = useSelector((state) => state.user.value)
    const handleDelete = (userid) => {
        dispatch(removeUser({ userid: userid }))
    }
    return (
        <div>
            {/* {console.log('global state', usersData)} */}
            <div className='margin-control'>
                <h1 className="text-center t-color ">List of users</h1>
                {
                    usersData.map((item) => (

                            <div className="card box" >
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <h3 className="card-title">{item.username}</h3>
                                    <p className="card-text">{item.email}</p>
                                    <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>delete</button>
                                </div>
                            </div>

                        
                    ))
                }
            </div>
        </div>
    )
}
export default ViewUsers