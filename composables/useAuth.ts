export default () => {
  const isAuthLoading = useState<boolean>("isAuthLoading", () => true);
  const isAuthenticated = useState<boolean>("isAuthenticated", () => false);

  const { getDiscordProfile } = useDiscordProfile();
  const { getUser } = useUser();

  const refreshToken = async () => {
    try {
      await $fetch("/api/auth/refresh", {
        credentials: "include",
      });
      isAuthenticated.value = true;
    } catch (err) {
      isAuthenticated.value = false;
      console.log("error");
      throw err;
    }
  };

  const initRefreshing = () => {
    const refreshTimer = setInterval(async () => {
      try {
        await refreshToken();
      } catch (err) {
        window.clearInterval(refreshTimer);
      }
    }, 15000);
  };

  const initAuth = async () => {
    isAuthLoading.value = true;

    try {
      await refreshToken();
      await getDiscordProfile();
      await getUser();

      initRefreshing();
    } catch (err) {
    } finally {
      isAuthLoading.value = false;
    }
  };

  return { initAuth, isAuthLoading, isAuthenticated };
};
