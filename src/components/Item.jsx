export const Item = ({ task }) => {
    return (
        <div className='d-flex my-1'>
            <p className="bg-primary rounded-1 p-2 mb-0 flex-fill">{task}</p><button className='btn btn-primary bg-danger' onClick={() => handleDeleteButtonPress(index)}>-</button>
        </div>
    )
}
