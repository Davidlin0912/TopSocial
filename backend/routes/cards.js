const express=require('express');
const {getCardById,postCard,deleteCardById}=require('../controllers/cardsController');

const cardsRouter=express.Router();

//GET get card by id  /api/card?id=1 查詢參數
cardsRouter.get('/',getCardById);
//POST post a card  /api/cards
cardsRouter.post('/',postCard);
//DELETE delete card by id  /api/cards/:card_id 動態參數
cardsRouter.delete('/:card_id',deleteCardById);

module.exports=cardsRouter;
