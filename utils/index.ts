import { CarProps, FilterProps } from "@/types";

// utils/fetchCars.js
export async function fetchCars(filters: FilterProps) {
	const headers = {
		"X-Api-Key": "DzRUK2lg/Nvud1rT8LaABA==n6muYB0ZJ7C4Lre2", // Ensure the header name is correct (no extra space after the colon)
	};
	const { manufacturer, year, model, limit, fuel } = filters;
	const model1 = model === "" && manufacturer === "" ? "camry" : model;

	const url = `https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model1}&limit=${limit}&fuel_type=${fuel}`;
	//  // The API URL

	try {
		const response = await fetch(url, { headers: headers });

		// Check if the response is okay (status code 200-299)
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		const result = await response.json(); // Parse the response as JSON
		return result; // Return the data
	} catch (error) {
		console.error("Error fetching cars data:", error);
	}
}

export function calcRent(year: number, transmission: string, city_mpg: number) {
	// Base price per day
	let basePrice = 50;

	// Adjust price based on year
	if (year >= 2020) {
		basePrice += 20; // Newer cars cost more
	} else if (year < 2010) {
		basePrice -= 10; // Older cars cost less
	}

	// Adjust price based on transmission type
	if (transmission.toLowerCase() === "a") {
		basePrice += 5; // Automatic cars are typically more expensive
	} else if (transmission.toLowerCase() === "m") {
		basePrice -= 5; // Manual cars are slightly cheaper
	}

	// Adjust price based on city MPG
	if (city_mpg >= 30) {
		basePrice -= 5; // Fuel-efficient cars are cheaper to rent
	} else if (city_mpg < 15) {
		basePrice += 10; // Gas guzzlers cost more
	}

	// Ensure the price is not below a minimum threshold
	basePrice = Math.max(basePrice, 20); // Minimum price is $20

	return basePrice;
}
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, model, year } = car;

	url.searchParams.append("customer", "img");
	url.searchParams.append("make", make);
	url.searchParams.append("modelFamily", model.split(" ")[0]);
	url.searchParams.append("zoomType", "fullscreen");
	url.searchParams.append("modelYear", `${year}`);
	// url.searchParams.append('zoomLevel', zoomLevel);
	url.searchParams.append("angle", `${angle}`);

	return `${url}`;
};

export const deleteSearchParams = (type: string) => {
	// Set the specified search parameter to the given value
	const newSearchParams = new URLSearchParams(window.location.search);

	// Delete the specified search parameter
	newSearchParams.delete(type.toLocaleLowerCase());

	// Construct the updated URL pathname with the deleted search parameter
	const newPathname = `${
		window.location.pathname
	}?${newSearchParams.toString()}`;

	return newPathname;
};
