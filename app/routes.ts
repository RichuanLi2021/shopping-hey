import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./components/globalTheme/globalShell.tsx", [
        index("routes/home.tsx"),
        route("contact", "./routes/contact.tsx"),
        route("products", "./routes/product.tsx")
    ])
] satisfies RouteConfig;
