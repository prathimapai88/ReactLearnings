export default function getClass(key) {
  switch (key) {
    case "error":
      return "text-bg-danger";
      break;

    case "high":
      return "text-bg-warning";
      break;

    case "low":
      return "text-bg-secondary";
      break;

    case "success":
      return "text-bg-success";
      break;

    default:
      break;
  }
}
