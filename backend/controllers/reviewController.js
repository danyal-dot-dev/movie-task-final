import { validationResult } from "express-validator"
import { addReview, destroyReview, getReview, getReviews, updateReview } from "../services/reviewService.js"
import RequestError from "../utilities/error/RequestError.js"

export const createReview = async (req, res, next) => {
    //detecting errors in req.body
    const errors = validationResult(req)
    if (!(errors.isEmpty())) return next(new RequestError({code: 406, message: 'Invalid inputs', context: errors.array()?.[0]}))
    let review
    try {
        req.body.user = req.user?._id
        review = await addReview(req.body)
        res.status(201).json({message: 'Review created successfully!', data: review})
    } catch(e) {
        next(new RequestError({code: e.code, message: e.message, context: e}))
    }
}

export const findReviews = async (req, res, next) => {
    let reviews
    try {
        reviews = await getReviews(req.params.movieid ? {movie: req.params.movieid} : {})
        res.json({message: 'Reviews fetched successfully!', data: reviews})
    } catch(e) {
        next(new RequestError({code: e.code, message: e.message, context: e}))
    }
}

export const editReview = async (req, res, next) => {
    let review
    try {
        //verifying if the authenticated user is the creator of the review
        review = await getReview({_id: req.params.id})
        if (review.user.toString() !== req.user._id) return next(new RequestError({code: 403, message: 'You are not authorized to edit this review!'}))
        review = await updateReview(req.params.id, req.body)
        res.status(204).json({message: 'Review updated successfully!'})
    } catch(e) {
        next(new RequestError({code: e.code, message: e.message, context: e}))
    }
}

export const deleteReview = async (req, res, next) => {
    let review
    try {
        //verifying if the authenticated user is the creator of the review
        review = await getReview({_id: req.params.id})
        if (review.user.toString() !== req.user._id) return next(new RequestError({code: 403, message: 'You are not authorized to edit this review!'}))
        review = await destroyReview(req.params.id)
        res.status(204).json({message: 'Review deleted successfully!'})
    } catch(e) {
        next(new RequestError({code: e.code, message: e.message, context: e}))
    }
}   