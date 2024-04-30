import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const getCatalog = createAsyncThunk(
  "/all",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}all`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "No Auth",
        },
      });
      let data = await response.json();
      if (response.status === 200) {
        /*    const arr = data;
        const itemToFind = data[12];
        const foundIdx = arr.findIndex((el) => el == itemToFind);
        console.log(foundIdx);
        arr.splice(foundIdx, 6);
        arr.unshift(itemToFind); */
        sessionStorage.setItem(
          "catalogs",
          JSON.stringify([
            data[0],
            data[6],
            data[9],
            data[8],
            data[16],
            data[1],
            data[4],
            data[2],
            ...data
              ?.filter(({ Id }) => Id !== 1)
              ?.filter(({ Id }) => Id !== 7)
              ?.filter(({ Id }) => Id !== 10)
              ?.filter(({ Id }) => Id !== 9)
              ?.filter(({ Id }) => Id !== 17)
              ?.filter(({ Id }) => Id !== 2)
              ?.filter(({ Id }) => Id !== 5)
              ?.filter(({ Id }) => Id !== 3),
          ])
        );
      } else {
        toast.error("Error", {
          description: data?.Error || "Couldn't get catalog, please try again.",
          duration: 5000,
          className: "testClass",
          style: { background: "#ff910a" },
        });
      }
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue([
        {
          message: "Failed to establish connection!",
        },
      ]);
    }
  }
);
