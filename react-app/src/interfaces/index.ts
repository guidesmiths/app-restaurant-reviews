export interface Restaurant {
	id?: number;
	name: string;
	distance?: number;
	avgprice?: number;
	cuisine?: string;
	img: string;
	average_rate?: number;
}
export interface Review {
	id: number;
	content: string;
	restaurant_id: number;
	rate: number;
	cuisinerate: number;
	pricerate: number;
	settingrate: number;
	date: string;
	authorname: string;
	authorimg: string;
}
