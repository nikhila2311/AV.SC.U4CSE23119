import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
  Button
} from "@mui/material";

function NotificationCard({
  notification,
  toggleViewed
}) {
  const typeColors = {
    Placement: "#1976d2",
    Result: "#2e7d32",
    Event: "#ed6c02"
  };

  const indicatorColor =
    typeColors[notification.type] || "#9e9e9e";

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "stretch",
        borderRadius: 2,
        border: notification.viewed
          ? "1px solid #e0e0e0"
          : "1px solid #bbdefb",
        backgroundColor: notification.viewed
          ? "#ffffff"
          : "#f5f9ff",
        boxShadow: notification.viewed
          ? "0 1px 3px rgba(0, 0, 0, 0.08)"
          : "0 2px 8px rgba(25, 118, 210, 0.15)",
        transition:
          "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow:
            "0 4px 14px rgba(0, 0, 0, 0.12)"
        }
      }}
    >
      <Box
        sx={{
          width: 6,
          backgroundColor: indicatorColor,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8
        }}
      />

      <Box
        sx={{
          flex: 1,
          p: 2
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{
            xs: "flex-start",
            md: "center"
          }}
          justifyContent="space-between"
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{ mb: 0.5 }}
            >
              {notification.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              {notification.message}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >
              <Chip
                label={notification.type}
                size="small"
                sx={{
                  backgroundColor: indicatorColor,
                  color: "#fff",
                  fontWeight: 600
                }}
              />

              <Typography
                variant="caption"
                color="text.secondary"
              >
                {notification.time}
              </Typography>
            </Stack>
          </Box>

          <Stack
            direction={{
              xs: "row",
              sm: "row",
              md: "column"
            }}
            spacing={1}
            alignItems={{
              xs: "center",
              md: "flex-end"
            }}
            sx={{
              minWidth: {
                xs: "100%",
                md: 190
              },
              justifyContent: "space-between"
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: notification.viewed
                  ? "success.main"
                  : "error.main",
                fontWeight: 700
              }}
            >
              {notification.viewed
                ? "Viewed"
                : "Unread"}
            </Typography>

            <Button
              variant="contained"
              size="small"
              onClick={() =>
                toggleViewed(notification.id)
              }
              sx={{
                textTransform: "none",
                minWidth: 130
              }}
            >
              Mark as
              {notification.viewed
                ? " Unread"
                : " Viewed"}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}

export default NotificationCard;