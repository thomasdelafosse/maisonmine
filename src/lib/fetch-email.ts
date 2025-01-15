export const fetchEmail = async (sendEmail: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/mail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendEmail,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send email");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchEmail:", error);
    throw error;
  }
};
