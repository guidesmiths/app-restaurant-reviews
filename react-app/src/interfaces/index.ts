export interface Restaurant {
	name?: string;
	address?: string;
	rate?: number;
	avgprice?: number;
	img?: string;
}

export interface Comment {
	author: string;
	content: string;
	date: string;
	rate: number;
}

export type ApiResponse = Restaurant & Comment;
