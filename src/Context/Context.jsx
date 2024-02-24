import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { userRows, productRows } from "../dataSource";
const DarkModeContext = createContext(null);

export const DarkModeContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const [alluserRows, setAllUserRows] = useState(userRows || []);
	const [allproductRows, setAllProductRows] = useState(productRows || []);
	const handleMode = (mode) => {
		if (mode === "light") {
			setDarkMode(false);
		}
		if (mode === "dark") {
			setDarkMode(true);
		}
	};
	const toggleMode = () => setDarkMode((prev) => !prev);
	const addNewUser = (user) => setAllUserRows([...alluserRows, user]);
	const addNewProduct = (product) =>
		setAllProductRows([...allproductRows, product]);

	return (
		<DarkModeContext.Provider
			value={{
				darkMode,
				handleMode,
				toggleMode,
				allproductRows,
				alluserRows,
				addNewProduct,
				addNewUser,
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
};
export const useStateContext = () => useContext(DarkModeContext);
