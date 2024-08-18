import Card from "../model/Card.js";

const createCard = async (req, res) => {
  const { title, description } = req.body;
  try {
    const card = await Card.create({
      title,
      description,
    });
    if (card) {
      res.status(200).json({
        success: true,
        card,
      });
      return;
    }
    res.status(200).json({
      success: false,
      message: "Card not created",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    if (cards.length === 0) {
      return res.json({
        message: "No cards found",
        cards,
      });
    }
    res.status(200).json({
      success: true,
      cards,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const getSingleCard = async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.findOne({ title });
    if (card) {
      res.status(200).json({
        success: true,
        card,
      });
    }
    res.status(200).json({
      message: "Card not found",
      success: false,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

export { createCard, getCards, getSingleCard };
