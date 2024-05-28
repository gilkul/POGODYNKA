
export interface AirQualityData {
	data: any;
	aqi: number;
	co: number;
	no2: number;
	o3: number;
	so2: number;
	pm25: number;
	pm10: number;
	pollen_level_tree: number;
	pollen_level_grass: number;
	pollen_level_weed: number;
	mold_level: number;
	predominant_pollen_type: string;
}

export interface AirQualityDataAPI {
	aqi: number;
	co: number;
	no2: number;
	o3: number;
	so2: number;
	pm25: number;
	pm10: number;
	pollen_level_tree: number;
	pollen_level_grass: number;
	pollen_level_weed: number;
	mold_level: number;
	predominant_pollen_type: string;
	data: AirQualityData[];
}
