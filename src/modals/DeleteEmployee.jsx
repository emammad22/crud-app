function DeleteEmployee(props) {

    const { delet, cancelDelete, confirmDelete } = props;

    return (
        <>
            <div className="delete-container">
                <div className="delete-header">
                    <h3>Delete Employee</h3>
                    <button className="delete-close" onClick={cancelDelete}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="delete-info">
                    <p className="delete-content">Are you sure you want to delete these Records?</p>
                    <p className="nd-content">This action cannot be undone</p>
                </div>
                <div className="delete-footer">
                    <button className="cancel" onClick={cancelDelete}>Cancel</button>
                    <button className="delete" onClick={() => { confirmDelete(delet); cancelDelete() }}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default DeleteEmployee;