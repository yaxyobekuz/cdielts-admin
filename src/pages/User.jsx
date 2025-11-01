// React
import { useEffect } from "react";

// Api
import { usersApi } from "@/api/users.api";

// Toast
import { toast } from "@/notification/toast";

// UI components
import { Switch } from "@/components/ui/switch";

// Router
import { Link, useParams } from "react-router-dom";

// Hooks
import useArrayStore from "@/hooks/useArrayStore";
import useObjectState from "@/hooks/useObjectState";
import useObjectStore from "@/hooks/useObjectStore";

// Components
import Button from "@/components/form/Button";
import ProfilePhoto from "@/components/ProfilePhoto";

// Icons
import { Clock, RefreshCcw, ArrowUpRight } from "lucide-react";

// Helpers
import { formatDate, formatTime, formatUzPhone } from "@/lib/helpers";

const User = () => {
  const { userId } = useParams();
  const { updateItemById } = useArrayStore();
  const { addEntity, getEntity, updateEntity } = useObjectStore("users");

  const user = getEntity(userId);
  const { setField, isLoading, hasError, isUpdating, isActive } =
    useObjectState({
      hasError: false,
      isLoading: !user,
      isUpdating: false,
      isActive: user?.isActive || false,
    });

  const loadUser = () => {
    setField("hasError");
    setField("isLoading", true);

    usersApi
      .getById(userId)
      .then(({ code, user }) => {
        if (code !== "userFetched") throw new Error();
        addEntity(userId, user);
        setField("isActive", user.isActive || false);
      })
      .catch(({ message }) => {
        setField("hasError", true);
        toast.error(message || "Nimadir xato ketdi");
      })
      .finally(() => setField("isLoading"));
  };

  const updateUser = () => {
    if (isUpdating || isLoading) return;

    setField("isUpdating", true);

    usersApi
      .updateUser(userId, { isActive })
      .then(({ code, user, message }) => {
        if (code !== "userUpdated") throw new Error();

        toast.success(message);
        updateEntity(userId, user);
        setField("isActive", user.isActive);

        // Update in the users list as well
        updateItemById(userId, user, "_id", "users-all");
        updateItemById(userId, user, "_id", "users-admin");
        updateItemById(userId, user, "_id", "users-student");
        updateItemById(userId, user, "_id", "users-teacher");
        updateItemById(userId, user, "_id", "users-supervisor");
      })
      .catch(({ message }) => toast.error(message || "Nimadir xato ketdi"))
      .finally(() => setField("isUpdating"));
  };

  const hasChanged = (() => {
    if (!user) return false;
    return isActive !== user.isActive;
  })();

  useEffect(() => {
    !user && loadUser();
  }, []);

  if (isLoading) return <LoadingContent />;
  if (hasError) return <ErrorContent />;

  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center justify-between">
        {/* Title */}
        <h1>Foydalanuvchi</h1>

        <div className="flex items-center gap-5">
          {/* Parts count */}
          <div title="Vaqt" className="flex items-center gap-1.5">
            <Clock strokeWidth={1.5} size={22} />
            <span>
              {formatDate(user?.createdAt)}{" "}
              <span className="text-gray-500">
                {formatTime(user?.createdAt)}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="grid grid-cols-4 gap-5">
        {/* Profile */}
        <Profile user={user} />

        {/* Permissions */}
        <section className="flex flex-col col-span-3 w-full h-auto bg-gray-100 rounded-3xl p-5">
          {/* Title */}
          <h2 className="mb-3.5 text-xl font-medium">
            Ma'lumotlarni yangilash
          </h2>

          {/* Content */}
          <div className="grid grid-cols-4 gap-5 mb-5">
            <label
              htmlFor="is-active"
              className="flex items-center justify-between gap-1.5 bg-white h-14 px-3.5 rounded-xl cursor-pointer"
            >
              {/* Name */}
              <h3 className="font-medium">Aktivlik</h3>

              {/* Switch */}
              <Switch
                id="is-active"
                checked={isActive}
                onCheckedChange={(checked) => setField("isActive", checked)}
              />
            </label>
          </div>

          {/* Update permissions button */}
          <Button
            size="lg"
            onClick={updateUser}
            className="w-36 gap-1.5"
            disabled={isUpdating || isLoading || !hasChanged}
          >
            <RefreshCcw size={20} strokeWidth={1.5} className="mr-1" />
            Yangilash
          </Button>
        </section>
      </div>
    </div>
  );
};

const LoadingContent = () => (
  <div className="container py-8 space-y-6">
    {/* Top */}
    <div className="flex items-center justify-between">
      <h1>Yuklanmoqda...</h1>
      <div className="w-48 h-6 bg-gray-100 p-0 rounded-full animate-pulse" />
    </div>

    {/* Action buttons */}
    <div className="flex items-center justify-end gap-5 animate-pulse">
      <div className="w-32 h-11 bg-gray-100 py-0 rounded-full" />
    </div>

    {/* Main content */}
    <div className="grid grid-cols-4 gap-5 animate-pulse">
      <div className="h-auto aspect-square bg-gray-100 rounded-3xl" />
      <div className="col-span-3 h-[125%] bg-gray-100 rounded-3xl" />
    </div>
  </div>
);

const ErrorContent = () => {
  return <div className="">Error</div>;
};

const Profile = ({ user }) => (
  <section className="flex flex-col justify-between relative overflow-hidden w-full h-auto bg-gray-100 bg-cover bg-no-repeat aspect-square rounded-3xl">
    {/* Top */}
    <div className="flex items-center justify-end p-5 z-10">
      <Link
        to={`/users/${user._id}`}
        title="Foydalanuvchi profili"
        aria-label="Foydalanuvchi profili"
        className="btn size-10 p-0 rounded-full bg-white backdrop-blur-sm"
      >
        <ArrowUpRight size={20} />
      </Link>
    </div>

    {/* Bottom */}
    <div className="z-10 w-full p-5 mt-auto bg-gradient-to-b from-transparent to-black">
      {/* Full name */}
      <h2 className="mb-3 truncate capitalize text-xl font-medium text-white">
        {user.firstName || "Foydalanuvchi"} {user.lastName}
      </h2>

      <div className="flex items-center justify-between">
        {/* Role */}
        <span className="capitalize shrink-0 text-gray-200">
          {user.role || "Noma'lum"}
        </span>

        {/* Phone */}
        <a href={`tel:+${user.phone}`} className="shrink-0 text-gray-200">
          {formatUzPhone(user.phone)}
        </a>
      </div>
    </div>

    {/* Photo */}
    <ProfilePhoto
      user={user}
      photoSize="medium"
      className="absolute inset-0 z-0 size-full text-9xl"
    />
  </section>
);

export default User;
