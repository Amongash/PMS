import React from "react";
import "./UserCreate.css";
export default function UserCreate() {
	return (
		<div className="newUser">
			<h1 className="newUserTitle">New User</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label>First Name</label>
					<input type="text" placeholder="John" />
				</div>
				<div className="newUserItem">
					<label>Last Name</label>
					<input type="text" placeholder="Doe" />
				</div>
				<div className="newUserItem">
					<label>Email</label>
					<input type="email" placeholder="johndoe@example.com" />
				</div>
				<div className="newUserItem">
					<label>Password</label>
					<input type="password" placeholder="password" />
				</div>
				<div className="newUserItem">
					<label>Phone</label>
					<input type="text" placeholder="+254712345678" />
				</div>
				<div className="newUserItem">
					<label>Address</label>
					<input type="text" placeholder="Nairobi" />
				</div>
				<div className="newUserItem">
					<label>Role</label>
					<div className="newUserRole">
						<input type="radio" name="role" id="customer" value="customer" />
						<label htmlFor="customer">Customer</label>
						<input type="radio" name="role" id="teller" value="teller" />
						<label htmlFor="teller">Teller</label>
						<input type="radio" name="role" id="admin" value="admin" />
						<label htmlFor="admin">Admin</label>
					</div>
				</div>
				<div className="newUserItem">
					<label>Active</label>
					<select className="newUserSelect" name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className="newUserButton">Create</button>
			</form>
		</div>
	);
}
