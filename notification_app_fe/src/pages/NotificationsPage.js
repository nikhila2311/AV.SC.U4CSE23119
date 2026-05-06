import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Button,
  Stack
} from "@mui/material";

import { fetchNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    async function loadNotifications() {
      const data = await fetchNotifications();
      setNotifications(data);
    }

    loadNotifications();
  }, []);

function toggleViewed(id) {
  const updatedNotifications =
    notifications.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          viewed: !item.viewed
        };
      }

      return item;
    });

  setNotifications(updatedNotifications);
}
function getPriorityScore(type) {
  if (type === "Placement") return 3;

  if (type === "Result") return 2;

  return 1;
}
 const filteredNotifications =
  filter === "All"
    ? notifications
    : notifications.filter(
        (item) => item.type === filter
      );

const sortedNotifications =
  [...filteredNotifications].sort(
    (a, b) =>
      getPriorityScore(b.type) -
      getPriorityScore(a.type)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Campus Notifications
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Stay updated with placements, results and events.
      </Typography>

      <Stack
        direction="row"
        spacing={1.5}
        useFlexGap
        flexWrap="wrap"
        sx={{ mb: 3 }}
      >
        <Button
          variant="contained"
          onClick={() => setFilter("All")}
          sx={{ textTransform: "none" }}
        >
          All
        </Button>

        <Button
          variant="contained"
          onClick={() => setFilter("Placement")}
          sx={{ textTransform: "none" }}
        >
          Placement
        </Button>

        <Button
          variant="contained"
          onClick={() => setFilter("Result")}
          sx={{ textTransform: "none" }}
        >
          Result
        </Button>

        <Button
          variant="contained"
          onClick={() => setFilter("Event")}
          sx={{ textTransform: "none" }}
        >
          Event
        </Button>
      </Stack>

      <Stack spacing={1.5}>
        {sortedNotifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            toggleViewed={toggleViewed}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default NotificationsPage;