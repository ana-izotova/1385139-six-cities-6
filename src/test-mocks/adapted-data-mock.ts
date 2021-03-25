import {adaptToClient, adaptCommentToClient} from "../utils/adapters";
import {testComment, testOffer, testOfferFavorited, testOffer2, testOffer2Favorited} from "./server-data-mock";

export const adaptedTestOffer = adaptToClient(testOffer);

export const adaptedTestOffer2 = adaptToClient(testOffer2);

export const adaptedTestComment = adaptCommentToClient(testComment);

export const adaptedTestOfferFavorited = adaptToClient(testOfferFavorited);

export const adaptedTestOffer2Favorited = adaptToClient(testOffer2Favorited);

