import axios from "axios";
import { Author } from "../interfaces/search";

export const author: Author = {
  name: "Sebastian",
  lastname: "Mosquera",
};

export const getProduct = async (id: string) => {
  try {
    const itemResponse = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    let description;
    try {
      const descriptionResponse = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`
      );
      description = descriptionResponse.data.plain_text;
    } catch (descriptionError) {
      console.error("Error al obtener la descripción:", descriptionError);
      description = null;
    }

    // Obtener la categoría del producto
    const categoryResponse = await axios.get(
      `https://api.mercadolibre.com/categories/${itemResponse.data.category_id}`
    );
    const category = categoryResponse.data.name;

    const result = {
      author,
      item: {
        id: itemResponse.data.id,
        title: itemResponse.data.title,
        price: {
          currency: itemResponse.data.currency_id,
          amount: Math.floor(itemResponse.data.price),
          decimals: parseInt(
            (itemResponse.data.price % 1).toFixed(2).substring(2),
            10
          ),
        },
        picture: itemResponse.data.pictures[0].url,
        condition: itemResponse.data.condition,
        free_shipping: itemResponse.data.shipping.free_shipping,
        sold_quantity: itemResponse.data.sold_quantity,
        description,
        category, // Agregar la categoría al resultado
      },
    };
    return result;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
