import axios from 'axios';

const CAR_SERVICES_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface CarService {
  serviceId: string;
  serviceName: string;
  description: string;
  price: string;
  img_url: string;
  duration: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: CarService[];
}

export const getCarServices = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(
      `${CAR_SERVICES_API}/car-services`,
      // {
      //   withCredentials: true,
      // }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching car services:', error);
    throw error;
  }
};

export const getCarServiceById = async (serviceId: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(
      `${CAR_SERVICES_API}/car-services/${serviceId}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching car services:', error);
    throw error;
  }
};
