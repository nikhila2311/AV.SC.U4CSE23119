export async function fetchNotifications() {
  try {
    const response = await fetch(
      "http://localhost:5000/notifications"
    );

    const data = await response.json();

    console.log("API DATA:", data);

    if (!data.notifications) {
      return [];
    }

    return data.notifications.map((item, index) => ({
      id: index + 1,
      title: item.Type,
      message: item.Message,
      type: item.Type,
      time: item.Timestamp,
      viewed: false
    }));

  } catch (error) {
    console.log("FETCH ERROR:", error);

    return [];
  }
}