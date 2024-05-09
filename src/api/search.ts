import axios from "axios";
import { Author } from "../interfaces/search";

export const author: Author = {
  name: "Sebastian",
  lastname: "Mosquera",
};

export const searchItems = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search`,
      { params: { q: query, limit: 4 } }
    );
    const { results } = response.data;

    // Obtener las categorías únicas de los resultados
    const categoryIds = results.map((item: any) => item.category_id);
    const uniqueCategoryIds = Array.from(new Set(categoryIds));

    // Obtener la información detallada de cada categoría
    const categories = await Promise.all(
      uniqueCategoryIds.map(async (categoryId) => {
        const categoryResponse = await axios.get(
          `https://api.mercadolibre.com/categories/${categoryId}`
        );
        return categoryResponse.data.name;
      })
    );

    // Mapear los resultados y construir el array de items
    const items = results.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: parseInt((item.price % 1).toFixed(2).substring(2)),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));

    // Formatear la respuesta incluyendo la información del autor
    return {
      author,
      categories,
      items,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
