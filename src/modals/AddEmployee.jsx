function AddEmployee() {
    return (
        <>
            <div className="add-modal">
                <div className="add-modal-header">
                    <div className="modal-name">
                        <h1>Add Employee</h1>
                    </div>
                    <div className="add-modal-close">
                        <button className="close-add-modal"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <form className="add-modal-form">
                    <div className="add-input add-name">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="add-input add-email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="add-input add-address">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" />
                    </div>
                    <div className="add-input add-phone">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" />
                    </div>
                </form>
                <div className="add-modal-footer">
                    <div className="add-buttons">
                        <button className="cancel-add">Cancel</button>
                        <button className="confirm-add">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddEmployee;