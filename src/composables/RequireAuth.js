import getUser from "@/composables/getUser";

const requireAuth = (to, from, next) => {
  let { user } = getUser();
  if (!user.value) {
    next({ name: "SignIn" });
  } else {
    next();
  }

  to;
  from;
};

export default requireAuth;
