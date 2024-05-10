import axios from "axios";

export const getProduct = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/items/${id}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
