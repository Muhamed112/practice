interface FormData {
  name: string;
  surname: string;
  gender: string;
  country: string;
}

export const createForm = async (data: FormData) => {
  const response = await fetch("https://api.thedogapi.com/v1/votes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key":
        "live_r5oiW0JIkyza8xKk49J2HdgkHFdD192o1GcXEriBJRhxGy0C7Zmew9tfxew0fnW0",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Something is wrong");
  }

  return response.json();
};
