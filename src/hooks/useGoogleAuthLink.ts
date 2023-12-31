import { useQuery } from "@tanstack/react-query";
import { getGoogleAuthLink } from "../api";

const useGoogleAuthLink = () =>
  useQuery({
    queryKey: ["google_oauth"],
    queryFn: getGoogleAuthLink,
    enabled: false,
  });

export default useGoogleAuthLink;
