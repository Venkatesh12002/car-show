import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CAR_SERVICES_API = 'http://localhost:5000/api/car-services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(CAR_SERVICES_API);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching car services:', error);
    res.status(500).json({ error: 'Failed to fetch car services' });
  }
}