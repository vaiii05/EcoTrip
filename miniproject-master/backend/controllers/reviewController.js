import Review from "../models/Review.js";
import Tour from "../models/Tour.js";

// Add a review
export const addReview = async (req, res) => {
  try {
    const { reviewText, rating } = req.body;
    const tourId = req.params.tourId;

    const review = new Review({
      productId: tourId,
      username: req.user.username,
      reviewText,
      rating,
    });

    await review.save();

    const tour = await Tour.findById(tourId);
    tour.reviews.push(review._id);
    await tour.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reviews for a tour
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.tourId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
