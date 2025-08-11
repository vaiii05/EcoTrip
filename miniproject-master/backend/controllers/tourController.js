import Tour from "../models/Tour.js";

// Get all tours
export const getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a tour by ID
export const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate("reviews");
    if (!tour) return res.status(404).json({ message: "Tour not found" });

    res.json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new tour
export const createTour = async (req, res) => {
  try {
    const { title, city, address, distance, photo, desc, price, maxGroupSize } = req.body;

    const tour = new Tour({
      title, city, address, distance, photo, desc, price, maxGroupSize,
    });

    await tour.save();
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
