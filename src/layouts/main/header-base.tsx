import clsx from "clsx";
import Button from "../../components/ui/button";
import { useGetAllTags } from "../../hooks/queries/use-auth-queries";
import StorageService from "../../lib/storage-service";
import { _endpoints } from "../../services/auth-api-service";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

const HeaderBase = () => {
  const { data } = useGetAllTags();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const logout = () => {
    StorageService.removeLocalAccessToken();
    queryClient.invalidateQueries({ queryKey: [_endpoints.user_info()] });
    navigate({ to: "/login" });
  };
  return (
    <>
      <header
        className={clsx(
          "flex",
          "justify-between",
          "items-center",
          "py-3",
          "px-6",
          "bg-white",
          "border-b",
          "border-b-secondary-light/50"
        )}
      >
        <p className={clsx("font-normal", "text-sm")}>
          Welcome
          <span className={clsx("font-semibold")}>
            {" "}
            {data?.user?.username || "User"}
          </span>
        </p>
        <div
          className={clsx(
            "py-2 px-3",
            "bg-secondary-light-2",
            "rounded-sm",
            "text-center"
          )}
        >
          <h3 className={clsx("font-semibold", "text-base")}>
            Arvancloud Challenge
          </h3>
        </div>
        <Button color="secondary" ariaLabel="logout" onClick={logout}>
          Logout
        </Button>
      </header>
    </>
  );
};

export default HeaderBase;
