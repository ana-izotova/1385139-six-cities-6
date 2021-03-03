import {Comment, OfferCard} from "../types";

export const adaptCommentToClient = (comment: any): Comment => {
  const adaptedComment = {
    ...comment,
    user: {
      ...comment.user,
      avatarUrl: comment.user.avatar_url,
      isPro: comment.user.is_pro
    },
  };

  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;

  return adaptedComment;
};

export const adaptToClient = (card: any): OfferCard => {
  const adaptedCard = {
    ...card,
    previewImage: card.preview_image,
    isFavorite: card.is_favorite,
    isPremium: card.is_premium,
    maxAdults: card.max_adults,
    host: {
      ...card.host,
      avatarUrl: card.host.avatar_url,
      isPro: card.host.is_pro,
    },
  };

  delete adaptedCard.preview_image;
  delete adaptedCard.is_favorite;
  delete adaptedCard.is_premium;
  delete adaptedCard.max_adults;
  delete adaptedCard.host.is_pro;
  delete adaptedCard.host.avatar_url;

  return adaptedCard;
};
