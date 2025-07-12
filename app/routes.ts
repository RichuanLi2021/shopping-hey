import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("components/globalTheme/globalShell.tsx", [
        index("routes/home.tsx"),
        route("contact", "routes/contact.tsx"),
        route("products", "routes/product.tsx")
    ]),

    layout("features/auth/theme/AuthLayout.tsx" ,[
        route("signup", "routes/signup.tsx"),
        route("login", "routes/login.tsx"),
        route("reset-password", "routes/resetPassword.tsx")
    ])
] satisfies RouteConfig;
