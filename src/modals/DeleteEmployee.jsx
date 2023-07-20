function DeleteEmployee() {
    return (
        <>
        <div className="delete-container">
            <div className="delete-header">
                <h3>Delete Employee</h3>
                <button className="delete-close"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className="delete-info">
                <p className="delete-content">Are you sure you want to delete these Records?</p>
                <p className="nd-content">This action cannot be undone</p>
            </div>
            <div className="delete-footer">
                <button className="cancel">Cancel</button>
                <button className="delete">Delete</button>
            </div>
        </div>
        </>
    );
}

export default DeleteEmployee;