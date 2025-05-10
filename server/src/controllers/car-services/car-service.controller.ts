import { CarService } from "../../models/car-services/car-services.models";
import express from "express";

// Create a new car service
export const createCarService = async (req: express.Request, res: express.Response) => {
  try {
    const carService = new CarService(req.body);
    console.log(carService);
    const savedCarService = await carService.save();
    res.status(201).json({
        success: true,
        message: "Service created successfully",
        data: savedCarService
    });
   
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(400).json({ message: errorMessage });
  }
};

// Get all car services
export const getAllCarServices = async (req: express.Request, res: express.Response) => {
  try {
    const carServices = await CarService.find();
    const formattedServices = carServices.map(service => ({
    serviceId: service._id,
      serviceName: service.serviceName,
      description: service.description,
      price: service.price,
      img_url: service.img_url,
      duration: service.duration,
    }));
    res.status(200).json({
        success: true,
        message: "Services retrived successfully",
        data: formattedServices
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCarServiceById = async (req: any, res: any) => {
    try {
        const { serviceId } = req.params;
        const service = await CarService.findById(serviceId);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
       
            res.status(200).json({
                success: true,
                message: "Service retrived successfully",
                data: {
                    serviceId: service._id,
                    serviceName: service.serviceName,
                    description: service.description,
                    price: service.price,
                    img_url: service.img_url,
                    duration: service.duration,
                }
            });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateCarService = async (req: any, res: any) => {
    try {
        const { serviceId } = req.params;
        const updatedService = await CarService.findByIdAndUpdate(serviceId, req.body, { new: true });
        if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({
            success: true,
            message: "Service updated successfully",
            data: updatedService
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
}
    

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteCarService = async (req: any, res: any) => {
    try {
        const { serviceId } = req.params;
        const deletedService = await CarService.findByIdAndDelete(serviceId);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({
            success: true,
            message: "Service deleted successfully",
            data: deletedService
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
}