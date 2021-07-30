import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
	const [gifValue, setInputValue] = useState("");
	// const [nGifValue, setnGifValue] = useState("");
	const handeInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (gifValue.trim().length > 1) {
			setCategories((cats) => [gifValue, ...cats]);
			setInputValue("");
		} else {
			alert("Llene eso bien, vago");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="gifValue"
					name="gifValue"
					value={gifValue}
					onChange={handeInputChange}
					placeholder="Buscar Gifs (Ej. Goku)"
				/>
				<input
					className="search "
					type="submit"
					onSubmit={handleSubmit}
					value="Buscar"
				/>
			</form>
		</>
	);
};
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
