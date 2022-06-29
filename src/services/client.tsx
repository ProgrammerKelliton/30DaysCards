import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ycfyto186y01ta8svaa8z4/master",
    cache: new InMemoryCache(),
});
