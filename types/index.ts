export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}
export interface FilterProps {
	manufacturer?: string;
	year?: number;
	model?: string;
	limit?: number;
	fuel?: string;
}
export interface HomeProps {
	searchParams: FilterProps;
}

export interface SearchProps {
	pageNumber: number;
	isNext: boolean;
}
